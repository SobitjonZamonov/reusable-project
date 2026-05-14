import { useMutation } from "@tanstack/react-query";
import { clearAuthCookies } from "@/shared/lib/cookies";
import { logout } from "../api/use-loguot";

export const useLogout = () => {
    return useMutation({
        mutationFn: logout,

        onSuccess: () => {
            clearAuthCookies();

            window.location.href = "/login";
        },

        onError: () => {
            clearAuthCookies();

            window.location.href = "/login";
        },
    });
};