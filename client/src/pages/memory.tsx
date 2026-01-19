import { useMemories } from "@/hooks/use-memories";
import { Loader2, Brain, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Memory() {
  const { data: memories, isLoading } = useMemories();

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold font-display">Memory Graph</h1>
        <p className="text-muted-foreground mt-2">
          Your second brain. All extracted facts and concepts live here.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Graph Area Placeholder */}
        <div className="lg:col-span-2 h-[500px] bg-card/30 rounded-3xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
          <div className="relative z-10 text-center space-y-4">
             <Network className="w-16 h-16 text-primary/50 mx-auto" />
             <div>
               <h3 className="text-xl font-medium">Visualization Disabled</h3>
               <p className="text-muted-foreground text-sm max-w-xs mx-auto mt-2">
                 Graph visualization requires WebGL enabled. Showing list view instead.
               </p>
             </div>
          </div>
        </div>

        {/* List View */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Brain className="w-5 h-5 text-secondary" />
            Recent Memories
          </h3>
          
          <div className="space-y-3 h-[500px] overflow-y-auto pr-2">
            {isLoading ? (
              <Loader2 className="w-8 h-8 animate-spin mx-auto mt-10" />
            ) : memories?.length === 0 ? (
              <div className="text-center text-muted-foreground py-10">No memories extracted yet.</div>
            ) : (
              memories?.map((memory) => (
                <Card key={memory.id} className="p-4 bg-card/50 border-white/5 hover:border-secondary/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-[10px] uppercase tracking-wider bg-white/5 text-muted-foreground hover:bg-white/10">
                      {memory.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground/50">{memory.confidence}%</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                    {memory.description}
                  </p>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
