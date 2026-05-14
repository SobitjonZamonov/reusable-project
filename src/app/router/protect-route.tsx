import { Navigate } from "react-router-dom";

import { getAccessToken } from "@/shared/lib/cookies";

interface Props {
    children: React.ReactNode;
}

export const ProtectedRoute = ({
    children,
}: Props) => {
    const token = getAccessToken();

    if (!token) {
        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    return children;
};