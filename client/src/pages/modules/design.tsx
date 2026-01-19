import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Layout, Box, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DesignPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-display">Design & UI</h1>
        <p className="text-muted-foreground">Generative design tools for UI, logos, and color systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/50 backdrop-blur border-border/50 hover-elevate cursor-pointer">
          <CardHeader>
            <Layout className="h-8 w-8 text-cyan-400 mb-2" />
            <CardTitle>Text to UI</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Describe your interface and get a high-fidelity React component mockup.</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50 hover-elevate cursor-pointer">
          <CardHeader>
            <PenTool className="h-8 w-8 text-purple-400 mb-2" />
            <CardTitle>Logo Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Generate professional vector logos based on your brand description.</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50 hover-elevate cursor-pointer">
          <CardHeader>
            <Palette className="h-8 w-8 text-pink-400 mb-2" />
            <CardTitle>Color Palettes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">AI-driven color systems optimized for accessibility and brand mood.</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50 hover-elevate cursor-pointer">
          <CardHeader>
            <Box className="h-8 w-8 text-orange-400 mb-2" />
            <CardTitle>3D Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Generate 3D shapes and patterns for modern web design.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
