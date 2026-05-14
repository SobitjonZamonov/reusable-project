import { api } from "@/shared/api/axios";

export const logout = async () => {
    return api.post("/admin/auth/logout");
};