import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLoanProduct } from "../service/products-service";

export const useUpdateLoanProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, data }: { id: number; data: Parameters<typeof updateLoanProduct>[1] }) =>
            updateLoanProduct(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["loan-products"] });
        },
    });
};
