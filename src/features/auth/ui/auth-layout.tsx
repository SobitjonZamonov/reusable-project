
import { ThemeSwitcher } from '@/shared/components/theme-switcher';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { ToggleLeftIcon } from 'lucide-react';
import { type ReactNode } from 'react';

type AuthLayoutProps = {
    children?: ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <main className="w-full h-lvh lg:grid lg:grid-cols-2 xl:min-h-[800px]text-accent bg-primary dark:bg-black">
            <div className="hidden lg:flex items-center justify-center">
                <ToggleLeftIcon />
            </div>
            <div className="relative py-6 mx-5">
                <Card className="h-full">
                    <CardHeader className="flex justify-end">
                        <ThemeSwitcher />
                    </CardHeader>
                    <CardContent className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-sm">{children}</div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
