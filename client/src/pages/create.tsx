import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hammer, Sparkles, FileText, Share2 } from "lucide-react";

export default function Create() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
       <div>
          <h1 className="text-3xl font-bold font-display">Creator Studio</h1>
          <p className="text-muted-foreground mt-2">
            Synthesize your knowledge into new content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Tool Cards */}
          <Card className="p-8 bg-card/50 border-white/5 hover:border-primary/50 transition-all cursor-pointer group space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold">AI Draft</h3>
            <p className="text-muted-foreground">Generate a blog post or summary from your memories and content library.</p>
            <Button variant="outline" className="w-full mt-4">Start Drafting</Button>
          </Card>

          <Card className="p-8 bg-card/50 border-white/5 hover:border-primary/50 transition-all cursor-pointer group space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold">Manual Editor</h3>
            <p className="text-muted-foreground">Rich text editor for creating notes and documents manually.</p>
            <Button variant="outline" className="w-full mt-4">Open Editor</Button>
          </Card>
        </div>

        <div className="p-12 text-center rounded-3xl bg-gradient-to-br from-card to-background border border-white/5">
          <Hammer className="w-12 h-12 mx-auto text-muted-foreground mb-4 opacity-50" />
          <h3 className="text-lg font-medium">More tools coming soon</h3>
          <p className="text-muted-foreground">We're building more ways for you to create.</p>
        </div>
    </div>
  );
}
