import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import type { IngestContentRequest } from "@shared/schema";

export function useContent() {
  return useQuery({
    queryKey: [api.content.list.path],
    queryFn: async () => {
      const res = await fetch(api.content.list.path, { credentials: "include" });
      if (res.status === 401) return null;
      if (!res.ok) throw new Error("Failed to fetch content");
      return api.content.list.responses[200].parse(await res.json());
    },
  });
}

export function useContentItem(id: number) {
  return useQuery({
    queryKey: [api.content.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.content.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (res.status === 401) return null;
      if (!res.ok) throw new Error("Failed to fetch content item");
      return api.content.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}

export function useIngestContent() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: IngestContentRequest) => {
      const res = await fetch(api.content.ingest.path, {
        method: api.content.ingest.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.content.ingest.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        if (res.status === 401) throw new Error("Unauthorized");
        throw new Error("Failed to ingest content");
      }
      return api.content.ingest.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.content.list.path] });
      toast({ title: "Success", description: "Content ingested successfully" });
    },
    onError: (error) => {
      toast({ 
        title: "Error", 
        description: error instanceof Error ? error.message : "Failed to ingest",
        variant: "destructive"
      });
    },
  });
}

export function useDeleteContent() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (id: number) => {
      const url = buildUrl(api.content.delete.path, { id });
      const res = await fetch(url, { 
        method: api.content.delete.method,
        credentials: "include" 
      });
      
      if (!res.ok) throw new Error("Failed to delete content");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.content.list.path] });
      toast({ title: "Deleted", description: "Content removed from library" });
    },
  });
}
