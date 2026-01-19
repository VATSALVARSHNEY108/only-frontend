import { useState } from "react";
import { useContent, useIngestContent } from "@/hooks/use-content";
import { ContentCard } from "@/components/content-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { user } = useAuth();
  const { data: content, isLoading } = useContent();
  const ingestMutation = useIngestContent();
  const [inputValue, setInputValue] = useState("");

  const handleIngest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Simple heuristic to determine type
    let type: "url" | "text" | "youtube" = "text";
    if (inputValue.includes("youtube.com") || inputValue.includes("youtu.be")) {
      type = "youtube";
    } else if (inputValue.startsWith("http")) {
      type = "url";
    }

    await ingestMutation.mutateAsync({
      type,
      [type === "text" ? "text" : "url"]: inputValue,
      title: type === "text" ? "Quick Note" : undefined, 
    });
    setInputValue("");
  };

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{user?.firstName || 'User'}</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            What would you like to capture or learn today?
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleIngest}
          className="w-full max-w-2xl relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex gap-2 p-2 bg-card border border-white/10 rounded-2xl shadow-2xl focus-within:border-primary/50 transition-colors">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Paste a YouTube link, URL, or just type a note..."
              className="flex-1 border-0 bg-transparent text-lg h-14 px-4 focus-visible:ring-0 placeholder:text-muted-foreground/50"
            />
            <Button 
              type="submit" 
              size="lg" 
              disabled={ingestMutation.isPending}
              className="h-14 px-8 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base shadow-lg shadow-primary/20"
            >
              {ingestMutation.isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Plus className="w-5 h-5 mr-2" />
                  Capture
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </div>

      {/* Content Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-display">Recent Content</h2>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Search className="w-4 h-4 mr-2" />
            Search Library
          </Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-card/30 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : content?.length === 0 ? (
          <div className="text-center py-12 bg-card/30 rounded-3xl border border-dashed border-white/10">
            <p className="text-muted-foreground">No content yet. Start by capturing something above!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content?.map((item) => (
              <ContentCard key={item.id} content={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
