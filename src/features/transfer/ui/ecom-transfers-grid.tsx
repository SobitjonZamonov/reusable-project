import type { EcommTransfer } from "../model/transfer.schema";
import { EcommTransferCard } from "./ecom-transfer-card";


interface Props {
    transfers: EcommTransfer[];
}

export const EcommTransfersGrid =
    ({
        transfers,
    }: Props) => {
        return (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {transfers.map(
                    (
                        transfer
                    ) => (
                        <EcommTransferCard
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