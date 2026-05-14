import type { P2PReceiver } from "../model/transfer.schema";
import { P2PReceiverCard } from "./p2p-resiver-card";

interface Props {
    receivers: P2PReceiver[];
}

export const P2PReceiversGrid =
    ({
        receivers,
    }: Props) => {
        return (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {receivers.map(
                    (
                        receiver
                    ) => (
                        <P2PReceiverCard
                            key={
                                receiver.id
                            }
                            receiver={
                                receiver
                            }
                        />
                    )
                )}
            </div>
        );
    };