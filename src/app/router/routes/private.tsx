import { ROUTES } from "../route"
import { AppLayout } from "@/app/layout/app-layout"
import DashboardPage from "@/pages/dashboard"
import UsersPage from "@/pages/users"
import { ProtectedRoute } from "../protect-route"

export const privateRoutes = ([
    {
        element: (
            <ProtectedRoute>
                <AppLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: ROUTES.HOME, element: <DashboardPage /> },
            { path: ROUTES.USERS, element: <UsersPage /> },
        ],
    },
])