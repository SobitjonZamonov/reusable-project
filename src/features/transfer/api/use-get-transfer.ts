import { useQuery } from "@tanstack/react-query";
import { getTransfer } from "../service/transfer-service";


export const useTransfer = (
    id: string
) => {
    return useQuery({
        queryKey: [
            "transfer",
            id,
        ],

        queryFn: () =>
            getTransfer(id),

        enabled: !!id,
    });
};