import { z } from "zod";

// ==================== Loan Product ====================

export const LoanProductSchema = z.object({
    id: z.number(),
    title_ru: z.string().nullable(),
    title_uz: z.string().nullable(),
    title_en: z.string().nullable(),
    max_amount: z.number(),
    lifetime: z.string().nullable(),
    grace_period: z.string().nullable(),
    percent: z.string(),
    bpm_method: z.string().nullable(),
    status: z.number(),
    code: z.string(),
    type: z.string(),
    icon: z.string().nullable(),
    group_key: z.string().nullable(),
    description_uz: z.string().nullable(),
    description_ru: z.string().nullable(),
    description_en: z.string().nullable(),
    orderno: z.string().nullable(),
    parent_id: z.string().nullable(),
});

export const LoanProductsResponseSchema = z.object({
    data: z.array(LoanProductSchema),
});

// ==================== Card Product ====================

export const CardProductSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    price: z.string(),
    delivery_price: z.string(),
    currency_code: z.string(),
    category: z.string(),
    active: z.string(),
    description_uz: z.string().nullable(),
    description_en: z.string().nullable(),
});

export const CardProductsResponseSchema = z.object({
    data: z.array(CardProductSchema),
});

// ==================== Types ====================

export type LoanProduct = z.infer<typeof LoanProductSchema>;
export type LoanProductsResponse = z.infer<typeof LoanProductsResponseSchema>;

export type CardProduct = z.infer<typeof CardProductSchema>;
export type CardProductsResponse = z.infer<typeof CardProductsResponseSchema>;

// ==================== Create/Update Schemas ====================

export const CreateLoanProductSchema = z.object({
    title_ru: z.string(),
    title_uz: z.string(),
    title_en: z.string(),
    max_amount: z.number(),
    percent: z.number(),
    lifetime: z.number().nullable(),
    grace_period: z.number().nullable(),
});

export const UpdateLoanProductSchema = CreateLoanProductSchema.partial();

export type CreateLoanProduct = z.infer<typeof CreateLoanProductSchema>;
export type UpdateLoanProduct = z.infer<typeof UpdateLoanProductSchema>;
