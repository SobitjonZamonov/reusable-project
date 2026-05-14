"use client";

import {
    Users,
    CreditCard,
    Wallet,
    ShieldCheck,
    ArrowLeftRight,
    Landmark,
    BadgeDollarSign,
    Activity,
    TrendingUp,
    CircleDollarSign,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";

import { Progress } from "@/shared/ui/progress";
import { useUsers } from "@/features/users/api/use-get-all";
import { useCards } from "@/features/cards/api/use-get-cards";
import { useFamilyCards } from "@/features/cards/api/use-get-family-cards";
import { useGetKycVerifications } from "@/features/kyc/api/use-get-kyc";
import { useGetGlobalLimits } from "@/features/limits/api/use-get-global-limits";
import { useGetUserLimits } from "@/features/limits/api/use-get-user-limits";
import { useGetCardProducts, useGetLoanProducts } from "@/features/products/api/use-get-products";
import { useEcommTransfers } from "@/features/transfer/api/ecom-transfers";
import { useWallets } from "@/features/wallets/api/use-get-all.wallets";


const DashboardPage = () => {
    const {
        data: users,
    } = useUsers({
        per_page: 1000,
    });

    const {
        data: cards,
    } = useCards({
        per_page: 1000,
    });

    const {
        data: familyCards,
    } =
        useFamilyCards(
            1000
        );

    const {
        data: kyc,
    } =
        useGetKycVerifications(
            {
                per_page:
                    1000,
            }
        );

    const {
        data: globalLimits,
    } =
        useGetGlobalLimits();

    const {
        data: userLimits,
    } =
        useGetUserLimits();

    const {
        data: loanProducts,
    } =
        useGetLoanProducts();

    const {
        data: cardProducts,
    } =
        useGetCardProducts();

    const {
        data: ecommTransfers,
    } =
        useEcommTransfers();

    const {
        data: wallets,
    } = useWallets({
        per_page: 1000,
    });

    const activeCards =
        cards?.data.filter(
            (
                card
            ) =>
                card.status ===
                1
        ).length || 0;

    const blockedCards =
        cards?.data.filter(
            (
                card
            ) =>
                card.status !==
                1
        ).length || 0;

    const verifiedKyc =
        kyc?.data.filter(
            (item) =>
                item.status ===
                1
        ).length || 0;

    const totalWalletsBalance =
        wallets?.data.reduce(
            (
                acc,
                wallet
            ) =>
                acc +
                Number(
                    wallet.balance ||
                        0
                ),
            0
        ) || 0;

    return (
        <div className="space-y-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight">
                        Dashboard
                    </h1>

                    <p className="mt-1 text-muted-foreground">
                        Financial
                        analytics &
                        system overview
                    </p>
                </div>

                <Badge className="w-fit px-4 py-2 text-sm">
                    <Activity className="mr-2 size-4" />
                    System Active
                </Badge>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <Card className="border-0 shadow-md">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total
                                Users
                            </p>

                            <h2 className="mt-2 text-4xl font-bold">
                                {
                                    users?.total ||
                                    0
                                }
                            </h2>

                            <div className="mt-2 flex items-center gap-1 text-sm text-emerald-500">
                                <TrendingUp className="size-4" />
                                +12%
                            </div>
                        </div>

                        <div className="rounded-3xl bg-blue-500/10 p-4">
                            <Users className="size-8 text-blue-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Bank
                                Cards
                            </p>

                            <h2 className="mt-2 text-4xl font-bold">
                                {
                                    cards?.total ||
                                    0
                                }
                            </h2>

                            <div className="mt-2 flex items-center gap-2">
                                <Badge variant="secondary">
                                    Active:
                                    {" "}
                                    {
                                        activeCards
                                    }
                                </Badge>

                                <Badge variant="destructive">
                                    {
                                        blockedCards
                                    }
                                </Badge>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-violet-500/10 p-4">
                            <CreditCard className="size-8 text-violet-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Wallet
                                Balance
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {totalWalletsBalance.toLocaleString()}
                            </h2>

                            <p className="mt-2 text-sm text-muted-foreground">
                                UZS
                            </p>
                        </div>

                        <div className="rounded-3xl bg-emerald-500/10 p-4">
                            <Wallet className="size-8 text-emerald-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                KYC
                                Verified
                            </p>

                            <h2 className="mt-2 text-4xl font-bold">
                                {
                                    verifiedKyc
                                }
                            </h2>

                            <div className="mt-3">
                                <Progress
                                    value={
                                        (verifiedKyc /
                                            (kyc?.total ||
                                                1)) *
                                        100
                                    }
                                />
                            </div>
                        </div>

                        <div className="rounded-3xl bg-orange-500/10 p-4">
                            <ShieldCheck className="size-8 text-orange-500" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
                <Card className="border-0 shadow-md xl:col-span-2">
                    <CardHeader>
                        <CardTitle>
                            Platform
                            Statistics
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-2xl border p-5">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-sm text-muted-foreground">
                                    Family
                                    Cards
                                </p>

                                <Landmark className="size-5 text-muted-foreground" />
                            </div>

                            <h2 className="text-3xl font-bold">
                                {
                                    familyCards?.total ||
                                    0
                                }
                            </h2>
                        </div>

                        <div className="rounded-2xl border p-5">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-sm text-muted-foreground">
                                    Ecomm
                                    Transfers
                                </p>

                                <ArrowLeftRight className="size-5 text-muted-foreground" />
                            </div>

                            <h2 className="text-3xl font-bold">
                                {
                                    ecommTransfers?.total ||
                                    0
                                }
                            </h2>
                        </div>

                        <div className="rounded-2xl border p-5">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-sm text-muted-foreground">
                                    Loan
                                    Products
                                </p>

                                <BadgeDollarSign className="size-5 text-muted-foreground" />
                            </div>

                            <h2 className="text-3xl font-bold">
                                {
                                    loanProducts?.data.length ||
                                    0
                                }
                            </h2>
                        </div>

                        <div className="rounded-2xl border p-5">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-sm text-muted-foreground">
                                    Card
                                    Products
                                </p>

                                <CreditCard className="size-5 text-muted-foreground" />
                            </div>

                            <h2 className="text-3xl font-bold">
                                {
                                    cardProducts?.data.length ||
                                    0
                                }
                            </h2>
                        </div>

                        <div className="rounded-2xl border p-5">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-sm text-muted-foreground">
                                    User
                                    Limits
                                </p>

                                <CircleDollarSign className="size-5 text-muted-foreground" />
                            </div>

                            <h2 className="text-3xl font-bold">
                                {
                                    userLimits?.total ||
                                    0
                                }
                            </h2>
                        </div>

                        <div className="rounded-2xl border p-5">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-sm text-muted-foreground">
                                    Global
                                    Limits
                                </p>

                                <CircleDollarSign className="size-5 text-muted-foreground" />
                            </div>

                            <h2 className="text-3xl font-bold">
                                {
                                    globalLimits?.total ||
                                    0
                                }
                            </h2>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                    <CardHeader>
                        <CardTitle>
                            System Health
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm">
                                    API
                                    Status
                                </span>

                                <span className="text-sm font-medium text-emerald-500">
                                    98%
                                </span>
                            </div>

                            <Progress value={98} />
                        </div>

                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm">
                                    Database
                                </span>

                                <span className="text-sm font-medium text-blue-500">
                                    91%
                                </span>
                            </div>

                            <Progress value={91} />
                        </div>

                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm">
                                    Transactions
                                </span>

                                <span className="text-sm font-medium text-orange-500">
                                    87%
                                </span>
                            </div>

                            <Progress value={87} />
                        </div>

                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm">
                                    Security
                                </span>

                                <span className="text-sm font-medium text-emerald-500">
                                    99%
                                </span>
                            </div>

                            <Progress value={99} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DashboardPage;