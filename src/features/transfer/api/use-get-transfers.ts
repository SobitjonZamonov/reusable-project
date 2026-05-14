import { useQuery } from "@tanstack/react-query";
import { getTransfers } from "../service/transfer-service";


interface Params {
    date_from: string;

    date_to: string;

    user_id?: number;

    status?: string;

    per_page?: number;
}

export const useTransfers = ({
    date_from,
    date_to,
    user_id,
    status,
    per_page = 20,
}: Params) => {
    return useQuery({
        queryKey: [
            "transfers",
            date_from,
            date_to,
            user_id,
            status,
            per_page,
        ],

        queryFn: () =>
            getTransfers({
                date_from,
                date_to,
                user_id,
                status,
                per_page,
            }),

        enabled:
            !!date_from &&
            !!date_to,
    });
};