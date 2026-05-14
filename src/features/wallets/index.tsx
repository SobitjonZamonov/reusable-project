import { useWallets } from "./api/use-get-all.wallets";
import { WalletGrid } from "./ui/wallet-grid";


export const WalletList = () => {
    const {
        data,
        isLoading,
        isError,
    } = useWallets({
        per_page: 20,
    });

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div>
                Something went wrong
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">
                    Wallets
                </h1>

                <p className="text-muted-foreground">
                    Total wallets:{" "}
                    {data.total}
                </p>
            </div>

            <WalletGrid
                wallets={data.data}
            />
        </div>
    );
};