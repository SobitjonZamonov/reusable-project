import { api } from "@/shared/api/axios";
import { UserDetailSchema, UsersResponseSchema } from "../model/users.schema";

type Params = {
    page?: number;
    per_page?: number;
    phone?: string;
    inn?: string;
    passport?: string;
    status?: string;
    level?: string;
};

export const getUsers = async (
    params?: Params
) => {
    const response = await api.get(
        "/admin/users",
        {
            params,
        }
    );

    return UsersResponseSchema.parse(
        response.data
    );
};


export const getUser = async (
    id: string | number
) => {
    const response = await api.get(
        `/admin/users/${id}`
    );

    return UserDetailSchema.parse(
        response.data
    );
};