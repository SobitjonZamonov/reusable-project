import { useNavigate } from "react-router-dom";

import {
    ArrowUpRight,
    CreditCard,
    Calendar,
    CircleDollarSign,
} from "lucide-react";

import {
    Card,
    CardContent,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";

import type { Transfer } from "../model/transfer.schema";

import { ROUTES } from "@/app/router/route";

interface Props {
    transfer: Transfer;
}

export const TransferCard = ({
    transfer,
}: Props) => {
    const navigate =
        useNavigate();

    return (
        <Card
            onClick={() =>
                navigate(
                    ROUTES.TRANSFERS_DETAIL(
                        transfer.id
                    )
                )
            }
            className="group cursor-pointer border-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
            <CardContent className="space-y-6 p-6">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-white/10 p-3">
                            <CreditCard className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm text-white/60">
                                Transfer
                            </p>

                            <h2 className="font-semibold">
                                {
                                    transfer.utid
                                }
                            </h2>
                        </div>
                    </div>

                    <Badge
                        className={
                            transfer.status ===
                                "success"
                                ? "bg-emerald-500/20 text-emerald-300"
                                : "bg-red-500/20 text-red-300"
                        }
                    >
                        {
                            transfer.status
                        }
                    </Badge>
                </div>

                <div className="space-y-3">
                    <div>
                        <p className="text-xs text-white/50">
                            FROM
                        </p>

                        <p className="font-medium">
                            {
                                transfer.from
                            }
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-white/50">
                            TO
                        </p>

                        <p className="font-medium">
                            {transfer.to}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <CircleDollarSign className="size-4 text-white/60" />

                            <span className="text-sm text-white/60">
                                Amount
                            </span>
                        </div>

                        <h3 className="text-xl font-bold">
                            {
                                transfer.amount
                            }
                        </h3>
                    </div>

                    <div className="text-right">
                        <div className="flex items-center justify-end gap-2">
                            <Calendar className="size-4 text-white/60" />

                            <span className="text-sm text-white/60">
                                Date
                            </span>
                        </div>

                        <p className="text-sm">
                            {
                                transfer.date
                            }
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-2 text-sm text-white/50 transition-all duration-300 group-hover:text-white">
                    Details

                    <ArrowUpRight className="size-4" />
                </div>
            </CardContent>
        </Card>
    );
};