import { api } from "@/shared/api/axios";
import { GlobalLimitsResponseSchema, UserLimitsResponseSchema, type CreateGlobalLimit, type CreateUserLimit, type UpdateGlobalLimit, type UpdateUserLimit } from "../model/limits.schema";

export const getGlobalLimits = async (per_page = 20) => {
    const { data } = await api.get("/admin/limits/global", {
        params: { per_page },
    });
    console.log("Global Limits Raw Response:", data);
    const parsed = GlobalLimitsResponseSchema.safeParse(data);
    if (!parsed.success) {
        console.error("Global Limits Parse Error:", parsed.error);
        throw new Error("Failed to parse global limits response");
    }
    return parsed.data;
};

export const getUserLimits = async (per_page = 20) => {
    const { data } = await api.get("/admin/limits/users", {
        params: { per_page },
    });
    console.log("User Limits Raw Response:", data);
    const parsed = UserLimitsResponseSchema.safeParse(data);
    if (!parsed.success) {
        console.error("User Limits Parse Error:", parsed.error);
        throw new Error("Failed to parse user limits response");
    }
    return parsed.data;
};

export const updateGlobalLimit = async (id: number, data: UpdateGlobalLimit) => {
    const response = await api.patch(`/admin/limits/global/${id}`, data);
    return response.data;
};

export const updateUserLimit = async (id: number, data: UpdateUserLimit) => {
    const response = await api.patch(`/admin/limits/users/${id}`, data);
    return response.data;
};

export const createGlobalLimit = async (data: CreateGlobalLimit) => {
    const response = await api.post("/admin/limits/global", data);
    return response.data;
};

export const createUserLimit = async (data: CreateUserLimit) => {
    const response = await api.post("/admin/limits/users", data);
    return response.data;
};
