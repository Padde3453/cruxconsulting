import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/supabase/vite";
import { buildSitemap } from "./scripts/sitemap";

/**
 * Build-only: regenerates dist/sitemap.xml and prerenders the language-specific
 * tender/solution URLs into dist/<path>/index.html using the real React components.
 * Fails soft (logs a warning) so a prerender problem never blocks a deploy;
 * those URLs then fall back to the normal client-rendered SPA shell.
 */
function cruxPrerender(): Plugin {
  let root = process.cwd();
  let outDir = "dist";
  return {
    name: "crux-prerender",
    apply: "build",
    configResolved(c) {
      root = c.root;
      outDir = path.resolve(c.root, c.build.outDir);
    },
    async closeBundle() {
      try {
        fs.writeFileSync(path.join(outDir, "sitemap.xml"), buildSitemap(root).xml, "utf-8");
      } catch (e) {
        console.warn("[crux-prerender] sitemap skipped:", e);
      }
      const templatePath = path.join(outDir, "index.html");
      if (!fs.existsSync(templatePath)) return;
      const { createServer } = await import("vite");
      let server: Awaited<ReturnType<typeof createServer>> | undefined;
      // The SSR loader compiles JSX with the dev runtime, so load React's matching dev build.
      const prevNodeEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "development";
      try {
        server = await createServer({
          configFile: false,
          root,
          logLevel: "error",
          plugins: [react()],
          resolve: { alias: { "@": path.resolve(root, "./src") } },
          server: { middlewareMode: true, hmr: false, watch: null },
          appType: "custom",
          ssr: { noExternal: ["react-helmet-async"] },
          optimizeDeps: { noDiscovery: true, include: [] },
        });
        const mod = await server.ssrLoadModule("/src/prerender/entry-server.tsx");
        const template = fs.readFileSync(templatePath, "utf-8");
        for (const url of mod.prerenderPaths as string[]) {
          const { html, head, lang } = await mod.render(url);
          const page = template
            .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
            .replace(/<title>[\s\S]*?<\/title>\s*/, "")
            .replace(/<meta [^>]*data-rh="true"[^>]*>\s*/g, "")
            .replace("</head>", `${head}\n  </head>`)
            .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
          const target = path.join(outDir, url, "index.html");
          fs.mkdirSync(path.dirname(target), { recursive: true });
          fs.writeFileSync(target, page, "utf-8");
        }
        console.log(`[crux-prerender] prerendered ${mod.prerenderPaths.length} routes`);
      } catch (e) {
        console.warn("[crux-prerender] prerender skipped:", e);
      } finally {
        await server?.close();
        process.env.NODE_ENV = prevNodeEnv;
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mcpPlugin(),
    cruxPrerender(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
