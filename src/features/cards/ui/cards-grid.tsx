

import { CardItem } from "./card-item";
import type { BankCard } from "../model/cards.schema";

interface Props {
    cards: BankCard[];
}

export const CardsGrid = ({
    cards,
}: Props) => {
    if (!cards.length) {
        return (
            <div className="flex h-40 items-center justify-center rounded-xl border border-dashed">
                <p className="text-muted-foreground">
                    No cards found
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
                <CardItem
                    key={card.id}
                    card={card}
                />
            ))}
        </div>
    );
};