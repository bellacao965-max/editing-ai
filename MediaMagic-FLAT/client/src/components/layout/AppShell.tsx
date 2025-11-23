import { useState } from "react";
import { useLocation, Link } from "wouter";
import { 
  Home, 
  Image as ImageIcon, 
  Video, 
  Settings, 
  Sparkles, 
  Layers, 
  Command,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AssistantPanel from "@/components/ai/AssistantPanel";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [location] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [assistantOpen, setAssistantOpen] = useState(false);

  // Don't show shell on landing page
  if (location === "/") return <>{children}</>;

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: ImageIcon, label: "Photo Editor", path: "/editor/photo" },
    { icon: Video, label: "Video Editor", path: "/editor/video" },
    { icon: Layers, label: "Assets", path: "/assets" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-foreground">
      {/* Mobile Sidebar Toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button 
          size="icon" 
          variant="outline" 
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-sidebar transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center px-6 border-b border-border/50">
            <Sparkles className="mr-2 h-6 w-6 text-primary animate-pulse" />
            <span className="text-lg font-bold font-heading tracking-tight">AI Studio</span>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div 
                  className={cn(
                    "flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors cursor-pointer group",
                    location.startsWith(item.path) 
                      ? "bg-sidebar-accent text-primary" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-white"
                  )}
                >
                  <item.icon 
                    className={cn(
                      "mr-3 h-5 w-5 transition-colors",
                      location.startsWith(item.path) ? "text-primary" : "text-muted-foreground group-hover:text-white"
                    )} 
                  />
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>

          <div className="border-t border-border/50 p-4">
            <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
              <h4 className="text-xs font-semibold text-primary mb-1">Pro Plan</h4>
              <p className="text-xs text-muted-foreground mb-3">1,200 credits remaining</p>
              <Button size="sm" className="w-full text-xs h-7 bg-primary text-primary-foreground hover:bg-primary/90">
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-16 border-b border-border/50 bg-background/80 backdrop-blur-md flex items-center justify-between px-6 z-10">
          <div className="flex items-center text-sm text-muted-foreground">
            {location === "/dashboard" ? "Dashboard" : 
             location.includes("photo") ? "Project / Portrait Edit 01" : 
             location.includes("video") ? "Project / Cyberpunk City" : "Page"}
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex gap-2 ai-gradient-border border-transparent bg-background hover:bg-accent/10"
              onClick={() => setAssistantOpen(!assistantOpen)}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">
                Ask AI Assistant
              </span>
            </Button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-background" />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden relative">
          {children}
        </div>

        {/* AI Assistant Panel (Overlay) */}
        <AssistantPanel open={assistantOpen} onClose={() => setAssistantOpen(false)} />
      </main>
    </div>
  );
}
