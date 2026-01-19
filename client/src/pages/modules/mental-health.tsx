import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Brain, BookHeart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MentalHealthPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-display">Mental Health & Coaching</h1>
        <p className="text-muted-foreground">Private, supportive AI coaching and journaling tools.</p>
      </div>

      <Card className="bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border-border/50 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">How are you feeling today?</h2>
            <p className="text-muted-foreground">Take a moment to reflect and track your mood.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="h-12 w-12 rounded-full p-0">😞</Button>
            <Button variant="outline" className="h-12 w-12 rounded-full p-0">😐</Button>
            <Button variant="outline" className="h-12 w-12 rounded-full p-0">🙂</Button>
            <Button variant="outline" className="h-12 w-12 rounded-full p-0">😊</Button>
            <Button variant="outline" className="h-12 w-12 rounded-full p-0">🤩</Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-400" />
              CBT Coach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Work through cognitive distortions with guided conversations.</p>
            <Button className="w-full">Start Session</Button>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookHeart className="h-5 w-5 text-pink-400" />
              Safe Journal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">End-to-end encrypted journaling with emotional insights.</p>
            <Button variant="outline" className="w-full">New Entry</Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-background/40 border border-border/50 p-4 rounded-lg flex items-center gap-3">
        <ShieldCheck className="h-5 w-5 text-green-400" />
        <p className="text-xs text-muted-foreground">
          Privacy Notice: Your mental health data is strictly sandboxed and never mixed with other modules.
        </p>
      </div>
    </div>
  );
}
