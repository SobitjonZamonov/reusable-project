import { useQuery } from "@tanstack/react-query";
import { getWallets } from "../service/wallet-service";


interface Params {
    user_id?: number;

    per_page?: number;
}

export const useWallets = ({
    user_id,
    per_page = 1000,
}: Params) => {
    return useQuery({
        queryKey: [
            "wallets",
            user_id,
            per_page,
        ],

        queryFn: () =>
            getWallets({
                user_id,
                per_page,
            }),
    });
};