import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGlobalLimit } from "../service/limits-service";

export const useCreateGlobalLimit = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createGlobalLimit,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["global-limits"] });
        },
    });
};
