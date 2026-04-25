import { AppSidebar } from "./app-sidebar"
import { SidebarProvider } from "@/shared/ui/sidebar"
import { Outlet } from "react-router-dom"
import { TooltipProvider } from "@/shared/ui/tooltip"
import { AppHeader } from "./app-header"

export const AppLayout = () => {
    return (
        <TooltipProvider delayDuration={0}>
            <SidebarProvider>
                <div className="flex min-h-svh w-full">
                    <AppSidebar />

                    <div className="flex flex-1 flex-col">
                        <AppHeader />

                        <main className="flex-1 p-4">
                            <Outlet />
                        </main>
                    </div>
                </div>
            </SidebarProvider>
        </TooltipProvider>
    )
}