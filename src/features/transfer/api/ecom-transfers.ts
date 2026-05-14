import { useQuery } from "@tanstack/react-query";
import { getEcommTransfers } from "../service/transfer-service";


export const useEcommTransfers =
    (
        per_page = 1000
    ) => {
        return useQuery({
            queryKey: [
                "ecomm-transfers",
                per_page,
            ],

            queryFn: () =>
                getEcommTransfers(
                    per_page
                ),
        });
    };