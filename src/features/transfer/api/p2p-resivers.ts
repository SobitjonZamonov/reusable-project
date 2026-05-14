import { useQuery } from "@tanstack/react-query";
import { getP2PReceivers } from "../service/transfer-service";


export const useP2PReceivers =
    (
        per_page = 1000
    ) => {
        return useQuery({
            queryKey: [
                "p2p-receivers",
                per_page,
            ],

            queryFn: () =>
                getP2PReceivers(
                    per_page
                ),
        });
    };