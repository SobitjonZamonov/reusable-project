import {
    Card,
    CardContent,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";

import {
    Wallet2,
} from "lucide-react";
import type { Wallet } from "../model/wallet.schema";


interface Props {
    wallet: Wallet;
}

export const WalletCard = ({
    wallet,
}: Props) => {
    return (
        <Card className="overflow-hidden border-border/50 bg-linear-to-br from-background to-muted/40 transition-all hover:shadow-lg">
            <CardContent className="space-y-6 p-6">
                <div className="flex items-start justify-between">
                    <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                            Wallet ID
                        </p>

                        <h3 className="font-semibold tracking-wide">
                            {wallet.wallet_id}
                        </h3>
                    </div>

                    <div className="rounded-xl bg-primary/10 p-3">
                        <Wallet2 className="size-5 text-primary" />
                    </div>
                </div>

                <div>
                    <p className="text-sm text-muted-foreground">
                        Balance
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight">
                        {Number(
                            wallet.balance
                        ).toLocaleString()}{" "}
                        {wallet.currency}
                    </h1>
                </div>

                <div className="space-y-3 text-sm">
                    <Info
                        label="Account"
                        value={
                            wallet.account
                        }
                    />

                    <Info
                        label="Customer"
                        value={
                            wallet.customer_number
                        }
                    />

                    <Info
                        label="MFO"
                        value={wallet.mfo}
                    />

                    <Info
                        label="BXM"
                        value={wallet.bxm}
                    />
                </div>

                <div className="flex items-center justify-between pt-2">
                    <Badge
                        variant={
                            wallet.in_use
                                ? "default"
                                : "secondary"
                        }
                    >
                        {wallet.in_use
                            ? "Active"
                            : "Inactive"}
                    </Badge>

                    {wallet.is_total ===
                        1 && (
                            <Badge variant="outline">
                                Total Wallet
                            </Badge>
                        )}
                </div>
            </CardContent>
        </Card>
    );
};

const Info = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => {
    return (
        <div className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">
                {label}
            </span>

            <span className="font-medium">
                {value}
            </span>
        </div>
    );
};