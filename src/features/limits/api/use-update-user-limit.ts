import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserLimit } from "../service/limits-service";

export const useUpdateUserLimit = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: Parameters<typeof updateUserLimit>[1] }) =>
            updateUserLimit(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user-limits"] });
        },
    });
};
