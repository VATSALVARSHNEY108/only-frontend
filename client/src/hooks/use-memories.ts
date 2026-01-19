import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import type { InsertMemory } from "@shared/schema";

export function useMemories() {
  return useQuery({
    queryKey: [api.memories.list.path],
    queryFn: async () => {
      const res = await fetch(api.memories.list.path, { credentials: "include" });
      if (res.status === 401) return null;
      if (!res.ok) throw new Error("Failed to fetch memories");
      return api.memories.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateMemory() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMemory) => {
      const res = await fetch(api.memories.create.path, {
        method: api.memories.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to create memory");
      return api.memories.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.memories.list.path] });
      toast({ title: "Success", description: "Memory added successfully" });
    },
  });
}

export function useDeleteMemory() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (id: number) => {
      const url = buildUrl(api.memories.delete.path, { id });
      const res = await fetch(url, { 
        method: api.memories.delete.method,
        credentials: "include" 
      });
      
      if (!res.ok) throw new Error("Failed to delete memory");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.memories.list.path] });
      toast({ title: "Deleted", description: "Memory removed" });
    },
  });
}
