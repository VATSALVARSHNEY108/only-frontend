import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Volume2, Settings2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function VoicePage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-display">Voice & Audio</h1>
        <p className="text-muted-foreground">Generate high-quality speech, clone voices, and enhance audio.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              Text to Speech
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder="Enter text to convert to high-quality audio..."
              className="min-h-[150px] bg-background/40"
            />
            <div className="flex justify-between items-center">
              <Button variant="outline" size="sm">
                <Settings2 className="mr-2 h-4 w-4" /> Voice Settings
              </Button>
              <Button>
                <Volume2 className="mr-2 h-4 w-4" /> Generate Audio
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="h-5 w-5 text-cyan-400" />
              Voice Cloning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border/50 rounded-lg p-12 text-center text-muted-foreground">
              <p>Drag and drop an audio sample (30s minimum) to clone a voice.</p>
              <Button variant="secondary" className="mt-4">Upload Sample</Button>
            </div>
            <p className="text-xs text-muted-foreground italic text-center">
              Note: OneAI requires ethical verification for voice cloning features.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
