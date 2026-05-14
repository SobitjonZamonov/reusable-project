import type { Wallet } from "../model/wallet.schema";
import { WalletCard } from "./wallet-card";

interface Props {
    wallets: Wallet[];
}

export const WalletGrid = ({
    wallets,
}: Props) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {wallets.map((wallet) => (
                <WalletCard
                    key={wallet.id}
                    wallet={wallet}
                />
            ))}
        </div>
    );
};