import { useQuery } from "@tanstack/react-query";
import { getCards } from "../service/cards-service";


interface Params {
    user_id?: number;

    status?: number;

    per_page?: number;
}

export const useCards = ({
    user_id,
    status,
    per_page = 20,
}: Params) => {
    return useQuery({
        queryKey: [
            "cards",
            user_id,
            status,
            per_page,
        ],

        queryFn: () =>
            getCards({
                user_id,
                status,
                per_page,
            }),
    });
};


