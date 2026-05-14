import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateGlobalLimit } from "../service/limits-service";

export const useUpdateGlobalLimit = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: Parameters<typeof updateGlobalLimit>[1] }) =>
            updateGlobalLimit(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["global-limits"] });
        },
    });
};
