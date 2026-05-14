import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLoanProduct } from "../service/products-service";

export const useDeleteLoanProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteLoanProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["loan-products"] });
        },
    });
};
