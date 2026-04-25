import { useLocation } from "react-router-dom"
import { ROUTES } from "@/app/router/route"

export const useBreadcrumbs = () => {
    const { pathname } = useLocation()

    switch (pathname) {
        case ROUTES.HOME:
            return "Dashboard"

        case ROUTES.USERS:
            return "Users"

        default:
            return "Page"
    }
}