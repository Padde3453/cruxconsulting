/**
 * Writes public/sitemap.xml. Run from the project root with: bun scripts/generate-sitemap.ts
 * (The production build also regenerates dist/sitemap.xml via the Vite plugin.)
 */
import * as fs from 'fs';
import * as path from 'path';
import { buildSitemap } from './sitemap';

const root = process.cwd();
const { xml, count } = buildSitemap(root);
fs.writeFileSync(path.resolve(root, 'public/sitemap.xml'), xml, 'utf-8');
console.log(`sitemap.xml written (${count} URLs)`);
