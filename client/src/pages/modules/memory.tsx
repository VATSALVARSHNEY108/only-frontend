import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Network, ZoomIn, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MemoryPage() {
  const memories = [
    { id: 1, label: "User Preference: Dark Mode", type: "Preference", linked: 12 },
    { id: 2, label: "Concept: Neural Orchestration", type: "Concept", linked: 45 },
    { id: 3, label: "Project: OneAI OS Launch", type: "Project", linked: 8 },
    { id: 4, label: "Fact: Replit Agent Release", type: "Fact", linked: 3 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-display">Memory & Graph</h1>
          <p className="text-muted-foreground">Explore the persistent knowledge graph built from your interactions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><ZoomIn className="mr-2 h-4 w-4" /> Focus View</Button>
          <Button variant="outline" size="sm"><Share2 className="mr-2 h-4 w-4" /> Export Graph</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-3 bg-card/50 border-border/50 min-h-[500px] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
             {/* Visualizing a mockup graph pattern */}
             <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-primary/40 animate-pulse" />
             <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full border border-purple-500/40 animate-pulse" style={{ animationDelay: '1s' }} />
             <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full" />
             <div className="absolute top-1/2 left-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45" />
             <div className="absolute top-1/2 left-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45" />
          </div>
          <div className="z-10 text-center space-y-2">
            <Network className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold">Knowledge Graph View</h3>
            <p className="text-muted-foreground max-w-sm">342 interconnected nodes active. Graph expands automatically as you add content.</p>
          </div>
        </Card>

        <Card className="lg:col-span-1 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Recent Memories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {memories.map(m => (
              <div key={m.id} className="p-3 rounded-lg bg-background/40 border border-border/50 hover-elevate group">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-primary">{m.type}</span>
                  <Button variant="ghost" size="icon" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Info className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-sm font-medium leading-tight">{m.label}</p>
                <p className="text-[10px] text-muted-foreground mt-2">{m.linked} related nodes</p>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-xs mt-2">View All Memory</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
