import type { P2PSetting } from "../model/transfer.schema";
import { P2PSettingCard } from "./p2p-setting-card";


interface Props {
    settings: P2PSetting[];
}

export const P2PSettingsGrid =
    ({
        settings,
    }: Props) => {
        return (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {settings.map(
                    (
                        setting
                    ) => (
                        <P2PSettingCard
                            key={
                                setting.id
                            }
                            setting={
                                setting
                            }
                        />
                    )
                )}
            </div>
        );
    };