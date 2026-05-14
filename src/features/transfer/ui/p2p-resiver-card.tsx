import {
    Card,
    CardContent,
} from "@/shared/ui/card";

import {
    User,
    CreditCard,
} from "lucide-react";
import type { P2PReceiver } from "../model/transfer.schema";


interface Props {
    receiver: P2PReceiver;
}

export const P2PReceiverCard =
    ({
        receiver,
    }: Props) => {
        return (
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="space-y-5 p-6">
                    <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-primary/10 p-3">
                            <User className="size-5 text-primary" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Holder
                            </p>

                            <h3 className="font-semibold">
                                {
                                    receiver.holder
                                }
                            </h3>
                        </div>
                    </div>

                    <div className="rounded-xl bg-muted/50 p-4">
                        <div className="mb-2 flex items-center gap-2">
                            <CreditCard className="size-4 text-muted-foreground" />

                            <span className="text-sm text-muted-foreground">
                                PAN
                            </span>
                        </div>

                        <p className="font-mono tracking-widest">
                            {
                                receiver.pan
                            }
                        </p>
                    </div>
                </CardContent>
            </Card>
        );
    };