import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, Mail, Shield, Zap, CreditCard, ChevronRight } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
          {user?.firstName?.[0] || user?.email?.[0]?.toUpperCase() || "U"}
        </div>
        <div>
          <h1 className="text-3xl font-black font-display tracking-tight">{user?.firstName} {user?.lastName}</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <Mail className="h-4 w-4" /> {user?.email}
          </p>
          <div className="flex gap-2 mt-3">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/20">Pro Member</Badge>
            <Badge variant="outline" className="border-border/50">Early Adopter</Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50 overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-border/50">
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400" /> Subscription & Usage
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">AI Intelligence Tokens</span>
                <span className="font-bold">8,420 / 10,000</span>
              </div>
              <Progress value={84} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Memory Storage</span>
                <span className="font-bold">1.2 GB / 5 GB</span>
              </div>
              <Progress value={24} className="h-2" />
            </div>
            <Button variant="outline" className="w-full hover-elevate">
              Manage Billing <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-cyan-400" /> Account Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-background/40 border border-border/50">
              <div className="flex items-center gap-3">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Two-Factor Authentication</span>
              </div>
              <Badge variant="outline">Enabled</Badge>
            </div>
            <Button variant="secondary" className="w-full">Update Security Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
