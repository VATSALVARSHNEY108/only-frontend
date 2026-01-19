import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6">
        <AlertTriangle className="w-8 h-8 text-destructive" />
      </div>
      <h1 className="text-4xl font-display font-bold mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved to another dimension.
      </p>
      <Link href="/">
        <Button size="lg" className="rounded-full">Return Home</Button>
      </Link>
    </div>
  );
}
