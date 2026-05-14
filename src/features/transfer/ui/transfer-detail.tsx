"use client";

import { useParams } from "react-router-dom";

import { useTransfer } from "../api/use-get-transfer";

import {
    Card,
    CardContent,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";

export const TransferDetail =
    () => {
        const { id } =
            useParams();

        const {
            data: transfer,
            isLoading,
        } = useTransfer(
            id || ""
        );

        if (isLoading) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        if (!transfer) {
            return (
                <div>
                    Transfer not found
                </div>
            );
        }

        return (
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">
                        Transfer Detail
                    </h1>

                    <p className="text-muted-foreground">
                        Detailed
                        transfer
                        information
                    </p>
                </div>

                <Card className="border-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
                    <CardContent className="space-y-6 p-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-white/60">
                                    UTID
                                </p>

                                <h2 className="text-2xl font-bold">
                                    {
                                        transfer.utid
                                    }
                                </h2>
                            </div>

                            <Badge>
                                {
                                    transfer.status
                                }
                            </Badge>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <p className="text-sm text-white/60">
                                    FROM
                                </p>

                                <p className="font-medium">
                                    {
                                        transfer.from
                                    }
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/60">
                                    TO
                                </p>

                                <p className="font-medium">
                                    {
                                        transfer.to
                                    }
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/60">
                                    AMOUNT
                                </p>

                                <p className="text-xl font-bold">
                                    {
                                        transfer.amount
                                    }
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/60">
                                    COMMISSION
                                </p>

                                <p className="font-medium">
                                    {
                                        transfer.commission
                                    }
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/60">
                                    DATE
                                </p>

                                <p className="font-medium">
                                    {
                                        transfer.date
                                    }
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-white/60">
                                    CURRENCY
                                </p>

                                <p className="font-medium">
                                    {
                                        transfer.currency
                                    }
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    };