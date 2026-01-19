import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Bug, Terminal, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DevPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-display">Developer Tools</h1>
        <p className="text-muted-foreground">Advanced coding assistant, debugging tools, and repo analysis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/50 backdrop-blur border-border/50 border-l-4 border-l-cyan-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-cyan-400" />
              Code Generator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Generate optimized, production-ready code in any framework.</p>
            <Button variant="secondary" className="w-full">Open Editor</Button>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50 border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bug className="h-5 w-5 text-red-400" />
              Debug Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Paste error logs or stack traces to find root causes instantly.</p>
            <Button variant="secondary" className="w-full">Scan Codebase</Button>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50 border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-purple-400" />
              CLI Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Natural language interface for your terminal and cloud ops.</p>
            <Button variant="secondary" className="w-full">Manage CLI</Button>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50 border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-yellow-400" />
              Hardware Integration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Connect and debug edge devices and IoT sensors.</p>
            <Button variant="secondary" className="w-full">Connect Device</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
