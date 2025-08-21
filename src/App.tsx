
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import Impressum from "./pages/Impressum";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import BandwerkDemo from "./demo/pages/BandwerkDemo";
import InstagramDemo from "./demo/pages/InstagramDemo";
import AiChatbot from "./pages/services/AiChatbot";
import Workshops from "./pages/services/Workshops";
import ProcessAudit from "./pages/services/ProcessAudit";
import Automation from "./pages/services/Automation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai-chatbot" element={<AiChatbot />} />
          <Route path="/services/ai-chatbot-team" element={<AiChatbot />} />
          <Route path="/services/workshops" element={<Workshops />} />
          <Route path="/services/process-audit" element={<ProcessAudit />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ISOLATED DEMO ROUTES */}
          <Route path="/demo/bandwerk" element={<BandwerkDemo />} />
          <Route path="/demo/instagram" element={<InstagramDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
