import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserLimit } from "../service/limits-service";

export const useCreateUserLimit = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createUserLimit,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user-limits"] });
        },
    });
};
