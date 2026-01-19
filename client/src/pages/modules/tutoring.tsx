import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TutoringPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-display">Tutoring & Education</h1>
        <p className="text-muted-foreground">Personalized learning with AI tutors for your ingested content.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/50 backdrop-blur border-border/50 hover-elevate cursor-pointer">
          <CardHeader>
            <GraduationCap className="h-8 w-8 text-cyan-400 mb-2" />
            <CardTitle>Course Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Ask questions about your courses, lectures, and textbooks.</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50 hover-elevate cursor-pointer">
          <CardHeader>
            <BrainCircuit className="h-8 w-8 text-purple-400 mb-2" />
            <CardTitle>Exam Prep</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Generate practice tests and flashcards from your notes.</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50 hover-elevate cursor-pointer">
          <CardHeader>
            <BookOpen className="h-8 w-8 text-orange-400 mb-2" />
            <CardTitle>Summarizer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Instantly simplify complex topics and long articles.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 backdrop-blur border-border/50">
        <CardHeader>
          <CardTitle>Active Learning Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center p-12 text-muted-foreground">
            <p>No active sessions. Start by selecting a content source from the dashboard.</p>
            <Button variant="outline" className="mt-4">Go to Dashboard</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
