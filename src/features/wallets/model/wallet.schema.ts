import { z } from "zod";

export const WalletSchema =
    z.object({
        id: z.number(),

        user_id: z.number(),

        customer_number:
            z.string(),

        wallet_id: z.string(),

        account: z.string(),

        mfo: z.string(),

        bxm: z.string(),

        balance: z.string(),

        currency: z.string(),

        in_use: z.number(),

        update_at: z.string(),

        settings:
            z.any().nullable(),

        is_total: z.number(),
    });

export const WalletsResponseSchema =
    z.object({
        current_page:
            z.number(),

        data: z.array(
            WalletSchema
        ),

        last_page:
            z.number(),

        per_page:
            z.number(),

        total: z.number(),
    });

export type Wallet = z.infer<
    typeof WalletSchema
>;