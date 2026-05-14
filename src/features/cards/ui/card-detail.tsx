"use client";

import { useParams } from "react-router-dom";

import {
    CreditCard,
    Building2,
    Calendar,
    Wallet,
    ShieldCheck,
    Star,
    User,
    Hash,
} from "lucide-react";


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";

import { Skeleton } from "@/shared/ui/skeleton";
import { useCard } from "../api/use-get-by-id";

export const CardDetail = () => {
    const { id } = useParams();

    const {
        data: card,
        isLoading,
    } = useCard(id || "");

    if (isLoading) {
        return (
            <div className="space-y-6">
                <Skeleton className="h-60 w-full rounded-3xl" />

                <div className="grid gap-6 md:grid-cols-2">
                    <Skeleton className="h-40 rounded-2xl" />
                    <Skeleton className="h-40 rounded-2xl" />
                </div>
            </div>
        );
    }

    if (!card) {
        return (
            <div className="flex h-[50vh] items-center justify-center">
                <p className="text-muted-foreground">
                    Card not found
                </p>
            </div>
        );
    }

    const last4 =
        card.card_number.slice(-4);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Card Details
                </h1>

                <p className="text-muted-foreground">
                    Detailed information about this bank card
                </p>
            </div>

            <Card className="overflow-hidden border-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white shadow-2xl">
                <CardContent className="relative space-y-10 p-8">
                    <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative flex items-start justify-between">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                                    <CreditCard className="size-8" />
                                </div>

                                <div>
                                    <p className="text-sm text-white/60">
                                        Card Type
                                    </p>

                                    <h2 className="text-2xl font-bold">
                                        {card.type}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            {card.is_main ===
                                1 && (
                                    <Badge className="gap-1 bg-yellow-500 text-black hover:bg-yellow-500">
                                        <Star className="size-3 fill-black" />
                                        Main
                                    </Badge>
                                )}

                            <Badge
                                variant={
                                    card.status ===
                                        1
                                        ? "default"
                                        : "destructive"
                                }
                            >
                                {card.status ===
                                    1
                                    ? "Active"
                                    : "Blocked"}
                            </Badge>
                        </div>
                    </div>

                    <div className="relative space-y-3">
                        <p className="text-sm uppercase tracking-widest text-white/60">
                            Card Number
                        </p>

                        <h1 className="text-3xl font-semibold tracking-[0.35em] md:text-4xl">
                            •••• •••• ••••{" "}
                            {last4}
                        </h1>
                    </div>

                    <div className="relative flex items-end justify-between">
                        <div>
                            <p className="text-xs uppercase text-white/60">
                                Bank
                            </p>

                            <p className="text-lg font-medium">
                                {card.bank ||
                                    "Unknown"}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase text-white/60">
                                Expire
                            </p>

                            <p className="text-lg font-medium">
                                {card.expire}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card className="border-0 shadow-md">
                    <CardHeader>
                        <CardTitle>
                            General Information
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <User className="size-4 text-muted-foreground" />

                                <span className="text-muted-foreground">
                                    User ID
                                </span>
                            </div>

                            <span className="font-medium">
                                {card.user_id}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Wallet className="size-4 text-muted-foreground" />

                                <span className="text-muted-foreground">
                                    Currency
                                </span>
                            </div>

                            <span className="font-medium">
                                {card.currency}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Building2 className="size-4 text-muted-foreground" />

                                <span className="text-muted-foreground">
                                    Branch
                                </span>
                            </div>

                            <span className="font-medium">
                                {card.branch ||
                                    "N/A"}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Hash className="size-4 text-muted-foreground" />

                                <span className="text-muted-foreground">
                                    Card ID
                                </span>
                            </div>

                            <span className="font-medium">
                                #{card.id}
                            </span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                    <CardHeader>
                        <CardTitle>
                            Security & Service
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="size-4 text-muted-foreground" />

                                <span className="text-muted-foreground">
                                    OTP Verify
                                </span>
                            </div>

                            <Badge
                                variant={
                                    card.otp_verify ===
                                        1
                                        ? "default"
                                        : "secondary"
                                }
                            >
                                {card.otp_verify ===
                                    1
                                    ? "Enabled"
                                    : "Disabled"}
                            </Badge>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Calendar className="size-4 text-muted-foreground" />

                                <span className="text-muted-foreground">
                                    Added Date
                                </span>
                            </div>

                            <span className="font-medium">
                                {
                                    card.adding_date
                                }
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Calendar className="size-4 text-muted-foreground" />

                                <span className="text-muted-foreground">
                                    Service Till
                                </span>
                            </div>

                            <span className="font-medium">
                                {
                                    card.service_till_date
                                }
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="size-4 text-muted-foreground" />

                                <span className="text-muted-foreground">
                                    Pin Resets
                                </span>
                            </div>

                            <span className="font-medium">
                                {
                                    card.pin_resets
                                }
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};