import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import {
  LayoutDashboard,
  MessageSquare,
  GraduationCap,
  Hammer,
  Brain,
  LogOut,
  User,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NAVIGATION = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Chat", href: "/chat", icon: MessageSquare },
  { name: "Learn", href: "/learn", icon: GraduationCap },
  { name: "Create", href: "/create", icon: Hammer },
  { name: "Memory", href: "/memory", icon: Brain },
];

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-card/30 backdrop-blur-xl sticky top-0 h-screen z-40">
        <div className="p-6">
          <Link href="/dashboard" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-4 h-4 rounded-sm bg-primary neon-glow" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">
              One<span className="text-primary">AI</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {NAVIGATION.map((item) => {
            const isActive = location === item.href || location.startsWith(`${item.href}/`);
            return (
              <Link key={item.name} href={item.href} className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}>
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )} />
                {item.name}
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary neon-glow" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border mt-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start px-2 py-6 hover:bg-white/5 rounded-xl">
                <div className="flex items-center gap-3 w-full">
                  <Avatar className="w-9 h-9 border border-white/10">
                    <AvatarImage src={user?.profileImageUrl || undefined} />
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {user?.firstName?.charAt(0) || <User className="w-4 h-4" />}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {user?.firstName ? `${user.firstName} ${user.lastName || ''}` : user?.email}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">Free Plan</p>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border">
              <DropdownMenuItem onClick={() => logout()} className="text-destructive focus:text-destructive cursor-pointer">
                <LogOut className="w-4 h-4 mr-2" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
           <Link href="/dashboard" className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center">
               <div className="w-3 h-3 rounded-sm bg-primary neon-glow" />
             </div>
             <span className="font-display font-bold text-xl">OneAI</span>
           </Link>
           <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </Button>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-lg p-4 flex flex-col gap-2 animate-in slide-in-from-top-4">
            {NAVIGATION.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex items-center gap-3 px-4 py-4 rounded-xl text-lg font-medium hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="w-6 h-6 text-primary" />
                {item.name}
              </Link>
            ))}
            <div className="mt-auto border-t border-border pt-4">
               <Button variant="destructive" className="w-full justify-start" onClick={() => logout()}>
                 <LogOut className="w-4 h-4 mr-2" />
                 Log out
               </Button>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12 animate-in fade-in duration-500">
             {children}
          </div>
        </div>
      </main>
    </div>
  );
}
