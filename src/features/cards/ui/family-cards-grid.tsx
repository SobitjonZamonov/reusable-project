
import type { FamilyCard } from "../model/cards.schema";
import { FamilyCardItem } from "./family-card";

interface Props {
    cards: FamilyCard[];
}

export const FamilyCardsGrid = ({
    cards,
}: Props) => {
    if (!cards.length) {
        return (
            <div className="flex h-40 items-center justify-center rounded-xl border border-dashed">
                <p className="text-muted-foreground">
                    No family cards found
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
                <FamilyCardItem
                    key={card.id}
                    card={card}
                />
            ))}
        </div>
    );
};