import { api } from "@/shared/api/axios";
import { LoginSchema } from "./auth.schema";


interface LoginDto {
    email: string;
    password: string;
}

export const login = async (
    body: LoginDto
) => {
    const response = await api.post(
        "/admin/auth/login",
        body
    );

    return LoginSchema.parse(response.data);
};