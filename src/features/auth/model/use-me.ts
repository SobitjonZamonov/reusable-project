import { api } from "@/shared/api/axios";
import { MeSchema } from "./auth.schema";


export const getMe = async () => {
    const response = await api.get(
        "/admin/auth/me"
    );

    return MeSchema.parse(response.data);
};