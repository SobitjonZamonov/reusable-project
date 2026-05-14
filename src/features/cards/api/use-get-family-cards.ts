import { useQuery } from "@tanstack/react-query";
import { getFamilyCards } from "../service/cards-service";


export const useFamilyCards =
    (
        per_page = 20
    ) => {
        return useQuery({
            queryKey: [
                "family-cards",
                per_page,
            ],

            queryFn: () =>
                getFamilyCards(
                    per_page
                ),
        });
    };