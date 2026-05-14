import {
    Card,
    CardContent,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";

import {
    Users,
    CreditCard,
} from "lucide-react";
import type { FamilyCard } from "../model/cards.schema";


interface Props {
    card: FamilyCard;
}

export const FamilyCardItem = ({
    card,
}: Props) => {
    return (
        <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="space-y-5 p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-primary/10 p-2">
                            <Users className="size-5 text-primary" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Family Card
                            </p>

                            <h3 className="font-semibold">
                                {card.type}
                            </h3>
                        </div>
                    </div>

                    <Badge
                        variant={
                            card.status ===
                                "1"
                                ? "default"
                                : "secondary"
                        }
                    >
                        {card.status ===
                            "1"
                            ? "Active"
                            : "Inactive"}
                    </Badge>
                </div>

                <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                        Holder
                    </p>

                    <h2 className="text-lg font-semibold">
                        {
                            card.holder_name
                        }
                    </h2>
                </div>

                <div className="rounded-xl bg-muted/50 p-4">
                    <div className="mb-2 flex items-center gap-2">
                        <CreditCard className="size-4 text-muted-foreground" />

                        <span className="text-sm text-muted-foreground">
                            Card Number
                        </span>
                    </div>

                    <p className="font-mono text-lg tracking-widest">
                        •••• •••• ••••{" "}
                        {card.card_number.slice(
                            -4
                        )}
                    </p>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                    <div>
                        <p className="text-xs text-muted-foreground">
                            EXPIRE
                        </p>

                        <p className="font-medium">
                            {card.expire}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-muted-foreground">
                            CURRENCY
                        </p>

                        <p className="font-medium">
                            {
                                card.currency
                            }
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};