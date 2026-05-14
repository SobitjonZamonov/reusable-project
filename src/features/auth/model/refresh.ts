import axios from "axios";

export const refresh = async (
    refresh_token: string
) => {
    const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/auth/refresh`,
        {
            refresh_token,
        }
    );

    return response.data;
};