import {
    Card,
    CardContent,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";

import {
    ShoppingCart,
    Receipt,
} from "lucide-react";

import type { EcommTransfer } from "../model/transfer.schema";

interface Props {
    transfer: EcommTransfer;
}

export const EcommTransferCard =
    ({
        transfer,
    }: Props) => {
        return (
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="space-y-5 p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-primary/10 p-3">
                                <ShoppingCart className="size-5 text-primary" />
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Order ID
                                </p>

                                <h3 className="font-semibold">
                                    {
                                        transfer.order_id
                                    }
                                </h3>
                            </div>
                        </div>

                        <Badge>
                            {
                                transfer.status
                            }
                        </Badge>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Request ID
                        </p>

                        <p className="font-medium">
                            {
                                transfer.request_id
                            }
                        </p>
                    </div>

                    <div className="flex items-center gap-2 border-t pt-4">
                        <Receipt className="size-4 text-muted-foreground" />

                        <span className="text-sm text-muted-foreground">
                            {
                                transfer.utid
                            }
                        </span>
                    </div>
                </CardContent>
            </Card>
        );
    };