import { z } from "zod";

export const CardSchema =
    z.object({
        id: z.number(),
        user_id: z.number(),
        owner: z.number(),
        card_number: z.string(),
        expire: z.number(),
        currency: z.number(),
        status: z.number(),
        eopc_id: z.string().nullable(),
        token: z.string().nullable(),
        pinfl: z.string().nullable(),
        is_main: z.number(),
        mt_allow: z.number(),
        type: z.string(),
        bank_code: z.string().nullable(),
        bank: z.string().nullable(),
        adding_date: z.string(),
        settings: z.any().nullable(),
        service_till_date: z.string(),
        pin_resets: z.number(),
        send_email: z.number(),
        is_total: z.number(),
        otp_verify: z.number(),
        branch: z.string().nullable(),
        order: z.string().nullable(),
        is_salary: z.any().nullable(),
    });

export const CardsResponseSchema =
    z.object({
        current_page: z.number(),
        data: z.array(CardSchema),
        last_page: z.number(),
        per_page: z.number(),
        total: z.number(),
    });

export const FamilyCardSchema =
    z.object({
        id: z.number(),
        card_number: z.string(),
        design_id: z.any().nullable(),
        expire: z.string(),
        app_id: z.any().nullable(),
        currency: z.string(),
        status: z.string(),
        token: z.any().nullable(),
        type: z.string(),
        branch: z.any().nullable(),
        created_at: z.string(),
        updated_at: z.string(),
        user_id: z.string(),
        holder_name: z.string(),
        parent_card_id: z.string(),
        pin_resets: z.number(),
    });

export const FamilyCardsResponseSchema =
    z.object({
        current_page: z.number(),
        data: z.array(FamilyCardSchema),
        last_page: z.number(),
        per_page: z.number(),
        total: z.number(),
    });

export type FamilyCard =
    z.infer<
        typeof FamilyCardSchema
    >;

export type BankCard  = z.infer<
    typeof CardSchema
>;

export type CardsResponse =
    z.infer<
        typeof CardsResponseSchema
    >;