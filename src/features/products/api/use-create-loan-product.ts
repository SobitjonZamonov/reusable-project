import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLoanProduct } from "../service/products-service";

export const useCreateLoanProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createLoanProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["loan-products"] });
        },
    });
};
