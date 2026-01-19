import { useContent } from "@/hooks/use-content";
import { ContentCard } from "@/components/content-card";
import { Loader2 } from "lucide-react";

export default function Learn() {
  const { data: content, isLoading } = useContent();

  const processedContent = content?.filter(c => c.isProcessed) || [];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-display">Learning Center</h1>
          <p className="text-muted-foreground mt-2">
            Review your processed content and generate artifacts.
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
        </div>
      ) : processedContent.length === 0 ? (
        <div className="text-center py-20 bg-card/30 rounded-3xl border border-dashed border-white/10">
          <p className="text-xl font-medium mb-2">No learning content yet</p>
          <p className="text-muted-foreground">Process some content in the Dashboard first.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processedContent.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
      )}
    </div>
  );
}
