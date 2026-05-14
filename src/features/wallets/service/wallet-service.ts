import { api } from "@/shared/api/axios";

import {
    WalletsResponseSchema,
} from "../model/wallet.schema";

interface Params {
    user_id?: number;

    per_page?: number;
}

export const getWallets =
    async ({
        user_id,
        per_page = 20,
    }: Params) => {
        const response =
            await api.get(
                "/admin/wallets",
                {
                    params: {
                        user_id,
                        per_page,
                    },
                }
            );

        return WalletsResponseSchema.parse(
            response.data
        );
    };