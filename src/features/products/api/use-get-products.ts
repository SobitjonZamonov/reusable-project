import { useQuery } from "@tanstack/react-query";
import { getLoanProducts, getCardProducts } from "../service/products-service";

export const useGetLoanProducts = (per_page = 1000) => {
    return useQuery({
        queryKey: ["loan-products", per_page],
        queryFn: () => getLoanProducts(per_page),
    });
};

export const useGetCardProducts = (per_page = 1000) => {
    return useQuery({
        queryKey: ["card-products", per_page],
        queryFn: () => getCardProducts(per_page),
    });
};
