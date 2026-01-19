import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Moon, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HealthPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-display">Health & Lifestyle</h1>
        <p className="text-muted-foreground">Monitor workouts, nutrition, sleep, and overall wellness.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-card/50 backdrop-blur border-border/50 hover-elevate">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Activity</CardTitle>
            <Activity className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,432</div>
            <p className="text-xs text-muted-foreground">Steps today</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50 hover-elevate">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
            <Heart className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72 bpm</div>
            <p className="text-xs text-muted-foreground">Resting</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50 hover-elevate">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sleep</CardTitle>
            <Moon className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7h 20m</div>
            <p className="text-xs text-muted-foreground">Quality: Good</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50 hover-elevate">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Nutrition</CardTitle>
            <Utensils className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,850</div>
            <p className="text-xs text-muted-foreground">Kcal consumed</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded bg-background/40">
              <div>
                <p className="font-medium">Morning Run</p>
                <p className="text-sm text-muted-foreground">5.2 km · 28 mins</p>
              </div>
              <Badge>Workout</Badge>
            </div>
            <div className="flex justify-between items-center p-3 rounded bg-background/40">
              <div>
                <p className="font-medium">Lunch - Salad & Chicken</p>
                <p className="text-sm text-muted-foreground">450 kcal</p>
              </div>
              <Badge variant="secondary">Nutrition</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
