import { api } from "@/shared/api/axios"


export const loginApi = async (data: {
    email: string
    password: string
}) => {
    const res = await api.post("/admin/auth/login", data)
    return res.data
}