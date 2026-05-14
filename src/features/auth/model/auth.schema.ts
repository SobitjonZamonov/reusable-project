import { z } from "zod";

export const LoginSchema = z.object({
    access_token: z.string(),
    refresh_token: z.string(),
});

export const MeSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    roles: z.array(z.string()),
    permissions: z.array(z.string()),
});

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    email_verified_at: z.string().nullable(),
    created_at: z.string(),
    updated_at: z.string(),
});

export const AuthResponseSchema = z.object({
    access_token: z.string(),
    token_type: z.string(),
    expires_in: z.number(),
});

export type LoginInput = z.infer<typeof LoginSchema>;
export type User = z.infer<typeof UserSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
