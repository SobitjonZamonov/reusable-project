import { ROUTES } from "../route"
import { AppLayout } from "@/app/layout/app-layout"
import DashboardPage from "@/pages/dashboard"
import UsersPage from "@/pages/users"
import { ProtectedRoute } from "../protect-route"
import CardsPage from "@/pages/cards"
import { ProductsPage } from "@/pages/products"
import { KycPage } from "@/pages/kyc"
import LimitsPage from "@/pages/limits"
import WalletsPage from "@/pages/wallet"
import UserDetailPage from "@/pages/users/detail"
import CardDetailPage from "@/pages/cards/detail"
import TransferDetailPage from "@/pages/transfers/detail"
import { TransfersList } from "@/features/transfer"

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
            { path: "/users/:id", element: <UserDetailPage /> },
            { path: ROUTES.CARDS, element: <CardsPage /> },
            { path: "/cards/:id", element: <CardDetailPage /> },
            { path: ROUTES.PRODUCTS, element: <ProductsPage /> },
            { path: ROUTES.KYC, element: <KycPage /> },
            { path: ROUTES.LIMITS, element: <LimitsPage /> },
            { path: ROUTES.WALLETS, element: <WalletsPage /> },
            { path: ROUTES.TRANSFERS, element: <TransfersList /> },
            { path: "/cards/:id", element: <TransferDetailPage /> },
        ],
    },
])