import {
    Card,
    CardContent,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";

import {
    Settings,
    Building2,
} from "lucide-react";
import type { P2PSetting } from "../model/transfer.schema";


interface Props {
    setting: P2PSetting;
}

export const P2PSettingCard =
    ({
        setting,
    }: Props) => {
        return (
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="space-y-5 p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-primary/10 p-3">
                                <Settings className="size-5 text-primary" />
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Bank
                                </p>

                                <h3 className="font-semibold">
                                    {
                                        setting.bank
                                    }
                                </h3>
                            </div>
                        </div>

                        <Badge
                            variant={
                                setting.active ===
                                    1
                                    ? "default"
                                    : "secondary"
                            }
                        >
                            {setting.active ===
                                1
                                ? "Active"
                                : "Inactive"}
                        </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Type
                            </p>

                            <p className="font-medium">
                                {
                                    setting.type
                                }
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Merchant
                            </p>

                            <p className="font-medium">
                                {
                                    setting.merchant
                                }
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 border-t pt-4">
                        <Building2 className="size-4 text-muted-foreground" />

                        <span className="text-sm text-muted-foreground">
                            {
                                setting.terminal
                            }
                        </span>
                    </div>
                </CardContent>
            </Card>
        );
    };