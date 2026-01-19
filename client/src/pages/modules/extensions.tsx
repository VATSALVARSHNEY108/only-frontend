import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Puzzle, Globe, Zap, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const extensions = [
  { id: "chrome", title: "Chrome Extension", description: "Capture clips and highlights directly from your browser.", icon: Globe, status: "Active" },
  { id: "notion", title: "Notion Sync", description: "Automatically export processed notes and artifacts to Notion.", icon: Puzzle, status: "Connected" },
  { id: "slack", title: "Slack Bot", description: "Query your OneAI memory and content from Slack channels.", icon: Zap, status: "Inactive" },
];

export default function ExtensionsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-display">Extensions & Connectors</h1>
          <p className="text-muted-foreground">Expand OneAI with browser extensions and third-party integrations.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Extension
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extensions.map((ext) => (
          <Card key={ext.id} className="bg-card/50 backdrop-blur border-border/50 hover-elevate group">
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <ext.icon className="h-6 w-6 text-primary" />
              </div>
              <Badge variant={ext.status === "Inactive" ? "outline" : "secondary"}>
                {ext.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <CardTitle className="text-xl mb-1">{ext.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{ext.description}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Switch checked={ext.status !== "Inactive"} />
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Enable</span>
                </div>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-border/50 p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold">Build Your Own</h3>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Access the OneAI API and SDK to build custom extensions and automations tailored to your workflow.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="default">View API Docs</Button>
          <Button variant="outline">Get Developer Key</Button>
        </div>
      </Card>
    </div>
  );
}
