import { ThemeSwitcher } from "@/shared/components/theme-switcher";
import { useBreadcrumbs } from "@/shared/hooks/use-breadcrumbs";
import { Separator } from "@/shared/ui/separator"

interface HeaderLayoutProps {
    breadcrumbs?: React.ReactNode;
    collapse?: React.ReactNode;
    actions?: React.ReactNode;
}

export const HeaderLayout = ({ collapse, breadcrumbs }: HeaderLayoutProps) => {
    const title = useBreadcrumbs()
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
            <div className="flex justify-between w-full">
                <div className="flex justify-center items-center">
                    <div className="flex items-center gap-2 px-4">
                        {collapse}
                        {breadcrumbs && <Separator orientation="vertical" className="mr-2 h-4" />}
                        {breadcrumbs}
                    </div>
                    <Separator orientation="vertical" />
                    <div className="px-3">{title}</div>
                </div>
                <div className="flex px-4">
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
};