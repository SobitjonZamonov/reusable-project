import { useQuery } from "@tanstack/react-query";
import { getCard } from "../service/cards-service";


export const useCard = (
    id: string
) => {
    return useQuery({
        queryKey: ["card", id],

        queryFn: () =>
            getCard(id),

        enabled: !!id,
    });
};


