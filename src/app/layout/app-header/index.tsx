import { SidebarTrigger } from '@/shared/ui/sidebar';
import { HeaderLayout } from './ui/layout';

export const AppHeader = () => {
    return (
        <HeaderLayout
            collapse={<SidebarTrigger />}
            actions={<div className="flex items-center space-x-2"></div>}
        />
    );
};
