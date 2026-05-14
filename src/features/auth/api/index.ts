import axios from "axios";

import {
    clearAuthCookies,
    getAccessToken,
    getRefreshToken,
    setAccessToken,
    setRefreshToken,
} from "@/shared/lib/cookies";
import { refresh } from "../model/refresh";


export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
    const token = getAccessToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const refreshToken =
                    getRefreshToken();

                if (!refreshToken) {
                    clearAuthCookies();

                    window.location.href =
                        "/login";

                    return Promise.reject(error);
                }

                const data = await refresh(
                    refreshToken
                );

                setAccessToken(
                    data.access_token
                );

                setRefreshToken(
                    data.refresh_token
                );

                originalRequest.headers.Authorization =
                    `Bearer ${data.access_token}`;

                return api(originalRequest);
            } catch {
                clearAuthCookies();

                window.location.href =
                    "/login";
            }
        }

        return Promise.reject(error);
    }
);