import { memo, useMemo } from "react";
import { SidebarLayout } from "./ui/layout"
import { NavMain } from "./ui/nav-menu"
import { NavUser } from "./ui/nav-user"
import { ROUTES } from "@/app/router/route";
import { ArrowLeftRight, CandlestickChart, DollarSign, HomeIcon, ListMusic, Package, Users, Wallet } from "lucide-react";

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
        {
          title: 'Cards',
          url: ROUTES.CARDS,
          icon: DollarSign,
        },
        {
          title: 'Wallets',
          url: ROUTES.WALLETS,
          icon: Wallet,
        },
        {
          title: 'Products',
          url: ROUTES.PRODUCTS,
          icon: Package,
        },
        {
          title: 'Limits',
          url: ROUTES.LIMITS,
          icon: ListMusic,
        },
        {
          title: 'Transfers',
          url: ROUTES.TRANSFERS,
          icon: ArrowLeftRight
        },
        {
          title: 'KYC',
          url: ROUTES.KYC,
          icon: CandlestickChart,
        },
      ],
    }),
    [],
  );
  return <SidebarLayout nav={<NavMain items={columns.navMain} />} user={<NavUser />} />;
});
