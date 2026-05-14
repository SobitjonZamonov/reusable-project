import { useNavigate } from "react-router-dom";

import {
    Card,
    CardContent,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";

import {
    CreditCard,
    Star,
} from "lucide-react";

import { ROUTES } from "@/app/router/route";
import type { BankCard } from "../model/cards.schema";


interface Props {
    card: BankCard;
}

export const CardItem = ({
    card,
}: Props) => {
    const navigate =
        useNavigate();

    return (
        <Card
            onClick={() =>
                navigate(
                    ROUTES.CARDS_DETAIL(
                        card.id
                    )
                )
            }
            className="group cursor-pointer overflow-hidden border-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
            <CardContent className="relative space-y-8 p-6">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/5 blur-3xl" />

                <div className="relative flex items-center justify-between">
                    <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                        <CreditCard className="size-6" />
                    </div>

                    <div className="flex items-center gap-2">
                        {card.is_main ===
                            1 && (
                            <Star className="size-4 fill-yellow-400 text-yellow-400" />
                        )}

                        <Badge variant="secondary">
                            {card.type}
                        </Badge>
                    </div>
                </div>

                <div className="relative space-y-2">
                    <p className="text-sm text-white/60">
                        Card Number
                    </p>

                    <h2 className="text-xl font-semibold tracking-[0.25em]">
                        {card.card_number}
                    </h2>
                </div>

                <div className="relative flex items-end justify-between">
                    <div>
                        <p className="text-xs uppercase text-white/60">
                            Bank
                        </p>

                        <p className="font-medium">
                            {card.bank ||
                                "Unknown"}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase text-white/60">
                            Expire
                        </p>

                        <p className="font-medium">
                            {card.expire}
                        </p>
                    </div>
                </div>

                <div className="relative flex items-center justify-between border-t border-white/10 pt-4">
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

                    <span className="text-sm text-white/60">
                        {card.currency}
                    </span>
                </div>
            </CardContent>
        </Card>
    );
};