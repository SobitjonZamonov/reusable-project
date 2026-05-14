import axios from "axios";
import { getAccessToken, setAccessToken, getRefreshToken, setRefreshToken, clearAuthCookies } from "@/shared/lib/cookies";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Request interceptor - attach access token
api.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor - handle 401 and auto-refresh
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = getRefreshToken();
                if (!refreshToken) {
                    clearAuthCookies();
                    window.location.href = "/login";
                    return Promise.reject(error);
                }

                const response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/admin/auth/refresh`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${refreshToken}`,
                        },
                    }
                );

                const { access_token, refresh_token } = response.data;
                setAccessToken(access_token);
                if (refresh_token) {
                    setRefreshToken(refresh_token);
                }

                originalRequest.headers.Authorization = `Bearer ${access_token}`;
                return api(originalRequest);
            } catch (refreshError) {
                clearAuthCookies();
                window.location.href = "/login";
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);
