import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar, ListTodo, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductivityPage() {
  const tasks = [
    { id: 1, title: "Finalize Investor Pitch", priority: "High", status: "In Progress" },
    { id: 2, title: "Review Q1 Roadmap", priority: "Medium", status: "Pending" },
    { id: 3, title: "Team Sync - OneAI Launch", priority: "High", status: "Completed" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-display">Productivity</h1>
          <p className="text-muted-foreground">Manage your tasks and action items extracted by OneAI.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Task
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader className="flex flex-row items-center space-x-2">
            <ListTodo className="h-5 w-5 text-cyan-400" />
            <CardTitle>Total Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader className="flex flex-row items-center space-x-2">
            <Calendar className="h-5 w-5 text-purple-400" />
            <CardTitle>Due Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 backdrop-blur border-border/50">
        <CardHeader>
          <CardTitle>Task List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 rounded-lg bg-background/40 border border-border/50 hover-elevate">
                <div className="flex items-center space-x-4">
                  <Checkbox checked={task.status === "Completed"} />
                  <div>
                    <p className={`font-medium ${task.status === "Completed" ? "line-through text-muted-foreground" : ""}`}>{task.title}</p>
                    <div className="flex space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">{task.priority}</Badge>
                      <Badge variant="secondary" className="text-xs">{task.status}</Badge>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
