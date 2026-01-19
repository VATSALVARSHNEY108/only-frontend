import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import type { GenerateArtifactRequest } from "@shared/schema";

export function useArtifact(id: number) {
  return useQuery({
    queryKey: [api.artifacts.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.artifacts.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch artifact");
      return api.artifacts.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}

export function useGenerateArtifact() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: GenerateArtifactRequest) => {
      const res = await fetch(api.artifacts.generate.path, {
        method: api.artifacts.generate.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to generate artifact");
      return api.artifacts.generate.responses[201].parse(await res.json());
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [api.content.get.path] });
      toast({ title: "Generated", description: `${data.type} generated successfully` });
    },
    onError: (error) => {
      toast({ 
        title: "Error", 
        description: error instanceof Error ? error.message : "Generation failed",
        variant: "destructive"
      });
    },
  });
}
