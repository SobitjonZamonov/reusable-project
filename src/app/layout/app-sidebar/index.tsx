import { memo, useMemo } from "react";
import { SidebarLayout } from "./ui/layout"
import { NavMain } from "./ui/nav-menu"
import { NavUser } from "./ui/nav-user"
import { ROUTES } from "@/app/router/route";
import { HomeIcon, Users } from "lucide-react";


export const AppSidebar = memo(() => {
  const columns = useMemo(
    () => ({
      navMain: [
        {
          title: 'Dashboard',
          url: ROUTES.HOME,
          icon: HomeIcon,
        },
        {
          title: 'Users',
          url: ROUTES.USERS,
          icon: Users,
        },
      ],
    }),
    [],
  );
  return <SidebarLayout nav={<NavMain items={columns.navMain} />} user={<NavUser />} />;
});
