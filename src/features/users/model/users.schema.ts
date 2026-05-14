import { z } from "zod";

export const UserSchema = z.object({
    id: z.number(),
    fullname: z.string(),
    phone: z.string(),
    customer: z.string(),
    inn: z.string().nullable(),
    passport: z.string().nullable(),
    status: z.string(),
    user_type: z.string(),
    currency: z.string(),
    level: z.string(),
    registration_date: z.string(),
});

export const PaginationLinkSchema = z.object({
    url: z.string().nullable(),
    label: z.string(),
    active: z.boolean(),
    page: z.number().nullable().optional(),
});

export const UsersResponseSchema = z.object({
    current_page: z.number(),
    data: z.array(UserSchema),
    first_page_url: z.string(),
    from: z.number().nullable(),
    last_page: z.number(),
    last_page_url: z.string(),
    links: z.array(PaginationLinkSchema),
    next_page_url: z.string().nullable(),
    path: z.string(),
    per_page: z.number(),
    prev_page_url: z.string().nullable(),
    to: z.number().nullable(),
    total: z.number(),
});

export const UserDetailSchema = z.object({
    id: z.number(),
    fullname: z.string(),
    phone: z.string(),
    customer: z.string(),
    inn: z.string().nullable(),
    passport: z.string().nullable(),
    passport_expire: z.string().nullable(),
    status: z.string(),
    user_type: z.string(),
    currency: z.string(),
    level: z.string(),
    registration_date: z.string(),
    birthdate: z.string().nullable(),
    fiscal_phone: z.string().nullable(),
});

export type UserDetail = z.infer<
    typeof UserDetailSchema
>;

export type User = z.infer<typeof UserSchema>;

export type UsersResponse = z.infer<
    typeof UsersResponseSchema
>;