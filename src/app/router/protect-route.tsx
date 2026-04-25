// app/router/protected-route.tsx
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }: any) => {
    const token = localStorage.getItem("accessToken")

    if (!token) {
        return <Navigate to="/login" />
    }

    return children
}