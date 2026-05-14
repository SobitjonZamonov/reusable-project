import { api } from "@/shared/api/axios";
import { CardSchema, CardsResponseSchema, FamilyCardsResponseSchema } from "../model/cards.schema";


interface CardsParams {
    user_id?: number;

    status?: number;

    per_page?: number;
}

export const getCards =
    async ({
        user_id,
        status,
        per_page = 20,
    }: CardsParams) => {
        const response =
            await api.get(
                "/admin/cards",
                {
                    params: {
                        user_id,
                        status,
                        per_page,
                    },
                }
            );

        return CardsResponseSchema.parse(
            response.data
        );
    };

export const getCard =
    async (
        id: string | number
    ) => {
        const response =
            await api.get(
                `/admin/cards/${id}`
            );

        return CardSchema.parse(
            response.data
        );
    };

export const getFamilyCards =
    async (
        per_page = 20
    ) => {
        const response =
            await api.get(
                "/admin/family-cards",
                {
                    params: {
                        per_page,
                    },
                }
            );

        return FamilyCardsResponseSchema.parse(
            response.data
        );
    };