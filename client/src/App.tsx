import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import Chat from "@/pages/chat";
import ProductivityPage from "@/pages/modules/productivity";
import FinancePage from "@/pages/modules/finance";
import HealthPage from "@/pages/modules/health";
import TutoringPage from "@/pages/modules/tutoring";
import VoicePage from "@/pages/modules/voice";
import DesignPage from "@/pages/modules/design";
import DevPage from "@/pages/modules/dev";
import MentalHealthPage from "@/pages/modules/mental-health";
import ExtensionsPage from "@/pages/modules/extensions";
import CreatePage from "@/pages/modules/create";
import MemoryPage from "@/pages/modules/memory";
import ProfilePage from "@/pages/profile";
import { useAuth } from "@/hooks/use-auth";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/chat" component={Chat} />
      <Route path="/create" component={CreatePage} />
      <Route path="/memory" component={MemoryPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/productivity" component={ProductivityPage} />
      <Route path="/finance" component={FinancePage} />
      <Route path="/health" component={HealthPage} />
      <Route path="/tutoring" component={TutoringPage} />
      <Route path="/voice" component={VoicePage} />
      <Route path="/design" component={DesignPage} />
      <Route path="/dev" component={DevPage} />
      <Route path="/mental-health" component={MentalHealthPage} />
      <Route path="/extensions" component={ExtensionsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function MainLayout() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen bg-background text-foreground">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
        <h1 className="text-6xl font-black font-display mb-4 tracking-tighter text-foreground">ONE AI</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">One intelligence. Many capabilities. Zero friction.</p>
        <a href="/api/login">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
            Get Started
          </button>
        </a>
      </div>
    );
  }

  const style = {
    "--sidebar-width": "18rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full bg-background overflow-hidden">
        <AppSidebar />
        <div className="flex flex-col flex-1 relative">
          <header className="flex items-center justify-between p-4 border-b border-border/50 bg-background/50 backdrop-blur sticky top-0 z-50">
            <div className="flex items-center gap-4">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <span className="font-display font-bold text-lg text-foreground">OneAI OS</span>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto custom-scrollbar">
            <Router />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MainLayout />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
