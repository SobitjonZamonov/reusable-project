import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/shared/ui/tabs";
import { useCards } from "./api/use-get-cards";
import { CardsGrid } from "./ui/cards-grid";
import { useFamilyCards } from "./api/use-get-family-cards";
import { FamilyCardsGrid} from "./ui/family-cards-grid";

export const CardsList = () => {
    const {
        data: cards,
        isLoading:
        cardsLoading,
    } = useCards({
        per_page: 20,
    });

    const {
        data: familyCards,
        isLoading:
        familyLoading,
    } = useFamilyCards();

    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight">
                    Cards
                </h1>

                <p className="text-muted-foreground">
                    Manage bank and family cards
                </p>
            </div>

            <Tabs
                defaultValue="cards"
                className="space-y-6"
            >
                <TabsList>
                    <TabsTrigger value="cards">
                        Cards
                    </TabsTrigger>

                    <TabsTrigger value="family">
                        Family Cards
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="cards">
                    {cardsLoading ? (
                        <div>
                            Loading...
                        </div>
                    ) : (
                        <CardsGrid
                            cards={
                                cards?.data ||
                                []
                            }
                        />
                    )}
                </TabsContent>

                <TabsContent value="family">
                    {familyLoading ? (
                        <div>
                            Loading...
                        </div>
                    ) : (
                        <FamilyCardsGrid
                            cards={
                                familyCards?.data ||
                                []
                            }
                        />
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
};

