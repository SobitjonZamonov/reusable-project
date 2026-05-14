import { useQuery } from "@tanstack/react-query";
import { getP2PSettings } from "../service/transfer-service";

export const useP2PSettings =
    (
        per_page = 1000
    ) => {
        return useQuery({
            queryKey: [
                "p2p-settings",
                per_page,
            ],

            queryFn: () =>
                getP2PSettings(
                    per_page
                ),
        });
    };