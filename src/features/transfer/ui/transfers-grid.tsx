import type { Transfer } from "../model/transfer.schema";
import { TransferCard } from "./transfers-card";


interface Props {
    transfers: Transfer[];
}

export const TransfersGrid = ({
    transfers,
}: Props) => {
    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {transfers.map(
                (transfer) => (
                    <TransferCard
                        key={
                            transfer.id
                        }
                        transfer={
                            transfer
                        }
                    />
                )
            )}
        </div>
    );
};