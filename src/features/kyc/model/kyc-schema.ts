import { z } from "zod";

export const KycVerificationSchema =
    z.object({
        id: z.number(),
        user_id: z.number(),
        type: z.string(),
        status: z.number(),
        code: z.string(),
        additional: z.string(),
        update_at: z.string(),
        create_at: z.string(),
    });

export const KycVerificationsResponseSchema =
    z.object({
        current_page: z.number(),
        data: z.array(
            KycVerificationSchema
        ),
        last_page: z.number(),
        per_page: z.number(),
        total: z.number(),
    });

export type KycVerification = z.infer<
    typeof KycVerificationSchema
>;

export type KycVerificationsResponse = z.infer<typeof KycVerificationsResponseSchema>;