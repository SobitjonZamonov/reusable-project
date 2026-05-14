import { z } from "zod";

// ================== Global Limit ==================

export const GlobalLimitSchema = z.object({
    id: z.number(),
    period: z.string(),
    type: z.string(),
    subtype: z.string(),
    currency: z.string(),
    amount: z.coerce.number(),
    op_number: z.coerce.number().nullable(),
    debitor_type: z.string().nullable(),
    creditor_type: z.string().nullable(),
    limit_order: z.coerce.number(),
    limit_type: z.string(),
});

export const GlobalLimitsResponseSchema = z.object({
    data: z.array(GlobalLimitSchema),
    current_page: z.number().optional(),
    last_page: z.number().optional(),
    per_page: z.number().optional(),
    total: z.number().optional(),
});

export type GlobalLimit = z.infer<typeof GlobalLimitSchema>;
export type GlobalLimitsResponse = z.infer<typeof GlobalLimitsResponseSchema>;

// ================== User Limit ==================

export const UserLimitSchema = z.object({
    id: z.number(),
    user_id: z.number(),
    period: z.string(),
    type: z.string(),
    subtype: z.string(),
    currency: z.string(),
    amount: z.coerce.number(),
    op_number: z.coerce.number().nullable(),
    debitor_type: z.string().nullable(),
    creditor_type: z.string().nullable(),
});

export const UserLimitsResponseSchema = z.object({
    data: z.array(UserLimitSchema),
    current_page: z.number().optional(),
    last_page: z.number().optional(),
    per_page: z.number().optional(),
    total: z.number().optional(),
});

export type UserLimit = z.infer<typeof UserLimitSchema>;
export type UserLimitsResponse = z.infer<typeof UserLimitsResponseSchema>;

// ================== Update Types ==================

export const UpdateGlobalLimitSchema = GlobalLimitSchema.partial().omit({ id: true });
export type UpdateGlobalLimit = z.infer<typeof UpdateGlobalLimitSchema>;

export const UpdateUserLimitSchema = UserLimitSchema.partial().omit({ id: true, user_id: true });
export type UpdateUserLimit = z.infer<typeof UpdateUserLimitSchema>;

// ================== Create Types ==================

export const CreateGlobalLimitSchema = z.object({
    period: z.string(),
    type: z.string(),
    subtype: z.string(),
    currency: z.string(),
    amount: z.coerce.number(),
    op_number: z.coerce.number().nullable(),
    debitor_type: z.string().nullable(),
    creditor_type: z.string().nullable(),
    limit_order: z.coerce.number(),
    limit_type: z.string(),
});
export type CreateGlobalLimit = z.infer<typeof CreateGlobalLimitSchema>;

export const CreateUserLimitSchema = z.object({
    user_id: z.coerce.number(),
    period: z.string(),
    type: z.string(),
    subtype: z.string(),
    currency: z.string(),
    amount: z.coerce.number(),
    op_number: z.coerce.number().nullable(),
    debitor_type: z.string().nullable(),
    creditor_type: z.string().nullable(),
});
export type CreateUserLimit = z.infer<typeof CreateUserLimitSchema>;
