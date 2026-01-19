import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image as ImageIcon, Type, Wand2, Download, Share2 } from "lucide-react";

export default function CreatePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-display">Create</h1>
          <p className="text-muted-foreground">Generate high-quality visual and textual intelligence assets.</p>
        </div>
      </div>

      <Tabs defaultValue="image" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-8 bg-background/50 border border-border/50">
          <TabsTrigger value="image" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" /> Image Gen
          </TabsTrigger>
          <TabsTrigger value="text" className="flex items-center gap-2">
            <Type className="h-4 w-4" /> Text Gen
          </TabsTrigger>
        </TabsList>

        <TabsContent value="image" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-1 bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Prompt</label>
                  <Textarea 
                    placeholder="Describe the image you want to create..."
                    className="min-h-[120px] bg-background/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Style Preset</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Photorealistic", "Cyberpunk", "Minimalist", "Oil Painting"].map(style => (
                      <Button key={style} variant="outline" size="sm" className="text-xs">{style}</Button>
                    ))}
                  </div>
                </div>
                <Button className="w-full mt-4">
                  <Wand2 className="mr-2 h-4 w-4" /> Generate
                </Button>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 bg-card/50 border-border/50 min-h-[400px] flex items-center justify-center relative overflow-hidden">
              <div className="text-center p-8 space-y-4 z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <ImageIcon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-muted-foreground">Generated image will appear here.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="text" className="space-y-6">
          <Card className="bg-card/50 border-border/50 p-6">
             <div className="space-y-4">
               <Input placeholder="Drafting title..." className="bg-background/40 font-bold text-xl border-none p-0 focus-visible:ring-0" />
               <Textarea 
                 placeholder="Start writing or use AI to generate content..."
                 className="min-h-[400px] bg-background/40 border-none p-0 focus-visible:ring-0 text-lg resize-none"
               />
               <div className="flex justify-between pt-4 border-t border-border/50">
                 <div className="flex gap-2">
                   <Button variant="ghost" size="sm"><Share2 className="h-4 w-4 mr-2" /> Share</Button>
                   <Button variant="ghost" size="sm"><Download className="h-4 w-4 mr-2" /> Export</Button>
                 </div>
                 <Button size="sm">Smart Expand</Button>
               </div>
             </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
