import { type Content } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { Youtube, FileText, Link as LinkIcon, File } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

const TYPE_CONFIG = {
  youtube: { icon: Youtube, color: "text-red-500", bg: "bg-red-500/10" },
  pdf: { icon: File, color: "text-orange-500", bg: "bg-orange-500/10" },
  text: { icon: FileText, color: "text-blue-500", bg: "bg-blue-500/10" },
  url: { icon: LinkIcon, color: "text-green-500", bg: "bg-green-500/10" },
};

export function ContentCard({ content }: { content: Content }) {
  const config = TYPE_CONFIG[content.type as keyof typeof TYPE_CONFIG] || TYPE_CONFIG.text;
  const Icon = config.icon;

  return (
    <Link href={`/content/${content.id}`} className="block group">
      <Card className="h-full bg-card/50 border-white/5 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 p-5 flex flex-col gap-4 group-hover:-translate-y-1">
        <div className="flex items-start justify-between">
          <div className={cn("p-2 rounded-lg", config.bg)}>
            <Icon className={cn("w-5 h-5", config.color)} />
          </div>
          {content.isProcessed ? (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Processed</Badge>
          ) : (
            <Badge variant="outline" className="text-muted-foreground">Processing</Badge>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {content.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {content.summary || content.textContent?.slice(0, 150) || "No preview available..."}
          </p>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{content.createdAt ? formatDistanceToNow(new Date(content.createdAt), { addSuffix: true }) : ''}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary font-medium">View Details →</span>
        </div>
      </Card>
    </Link>
  );
}
