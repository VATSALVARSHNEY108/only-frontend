import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  MessageSquare, 
  ListTodo, 
  Wallet, 
  Activity, 
  GraduationCap, 
  Mic, 
  Palette, 
  Code2, 
  Smile, 
  LogOut,
  User,
  Puzzle,
  Network
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";

const modules = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Chat", url: "/chat", icon: MessageSquare },
  { title: "Create", url: "/create", icon: Palette },
  { title: "Memory", url: "/memory", icon: Network },
  { title: "Productivity", url: "/productivity", icon: ListTodo },
  { title: "Finance", url: "/finance", icon: Wallet },
  { title: "Health", url: "/health", icon: Activity },
  { title: "Tutoring", url: "/tutoring", icon: GraduationCap },
  { title: "Voice", url: "/voice", icon: Mic },
  { title: "Design", url: "/design", icon: Palette },
  { title: "Developer", url: "/dev", icon: Code2 },
  { title: "Mental Health", url: "/mental-health", icon: Smile },
  { title: "Extensions", url: "/extensions", icon: Puzzle },
];

export function AppSidebar() {
  const [location] = useLocation();
  const { user, logout } = useAuth();

  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground">1</div>
          <span className="font-display font-black text-xl tracking-tighter">OneAI</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Intelligence Layer</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {modules.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url} className="hover-elevate">
                    <Link href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className={`h-4 w-4 ${location === item.url ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={location === item.url ? 'font-bold' : ''}>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/profile" className="flex items-center gap-3 px-3 py-2 mb-2 hover:bg-accent rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <User className="h-4 w-4" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-medium truncate text-foreground">{user?.firstName || 'User'}</span>
                <span className="text-xs text-muted-foreground truncate">{user?.email}</span>
              </div>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => logout()} className="text-red-400 hover:text-red-300 hover:bg-red-950/20">
              <LogOut className="h-4 w-4 mr-2" />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
