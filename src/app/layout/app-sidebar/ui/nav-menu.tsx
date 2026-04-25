import { Link, useLocation } from "react-router-dom"
import {
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroup,
    SidebarHeader,
} from "@/shared/ui/sidebar"
import { LoaderCircle, type LucideIcon } from "lucide-react"
import { memo } from "react"

export const NavMain = memo(
    ({
        items,
    }: {
        items: {
            title: string;
            url: string;
            icon?: LucideIcon;
            isActive?: boolean;
            items?: {
                title: string;
                url: string;
            }[];
        }[];
    }) => {
        const { pathname } = useLocation();

        return (
            <SidebarGroup>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5">
                                <a href="#">
                                    <LoaderCircle className="size-5" />
                                    <span className="text-base font-semibold">Test</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarMenu>
                    {items.map((item) => {
                        const isActive = item.url.split('/')[1] === pathname.split('/')[1];
                        return (
                            <SidebarMenuItem key={item.url}>
                                <SidebarMenuButton
                                    size="md"
                                    className="data-[active=true]:bg-sidebar-accent"
                                    variant="default"
                                    isActive={isActive}
                                    tooltip={item.title}
                                    asChild
                                >
                                    <Link to={item.url}>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroup>
        );
    },
);