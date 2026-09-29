import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Download from "./pages/Download.tsx";

// Keep route code out of the initial bundle. In particular, the home page's
// charting dependency is expensive on lower-powered phones. Download is
// deliberately eager so its primary route can never remain in the Suspense
// loading state while a split chunk is being fetched.
const Index = lazy(() => import("./pages/Index.tsx"));
const Pricing = lazy(() => import("./pages/Pricing.tsx"));
const Invest = lazy(() => import("./pages/Invest.tsx"));
const Early = lazy(() => import("./pages/Early.tsx"));
const Learn = lazy(() => import("./pages/Learn.tsx"));
const Support = lazy(() => import("./pages/Support.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense
          fallback={
            <main className="min-h-screen grid place-items-center" aria-live="polite" aria-label="Loading page">
              <span className="text-muted-foreground">Loading page…</span>
            </main>
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/early" element={<Early />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/support" element={<Support />} />
            <Route path="/download" element={<Download />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
