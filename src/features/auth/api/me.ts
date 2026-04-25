import { api } from "@/shared/api/axios"

export const getMe = async () => {
  const res = await api.get("/admin/auth/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
  return res.data
}