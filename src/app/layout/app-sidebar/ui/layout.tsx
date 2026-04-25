import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/shared/ui/sidebar"
import type { FC, ReactNode } from "react"

interface SidebarLayoutProps {
    nav?: ReactNode,
    logo?: ReactNode,
    user?: ReactNode
}

export const SidebarLayout: FC<SidebarLayoutProps> = ({ logo, nav, user, ...props }) => {
    return (
        <Sidebar collapsible="icon" variant="sidebar" {...props}>
            <SidebarHeader>{logo}</SidebarHeader>
            <SidebarContent>{nav}</SidebarContent>
            <SidebarFooter>{user}</SidebarFooter>
        </Sidebar>
    );
};