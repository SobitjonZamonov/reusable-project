"use client";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/shared/ui/tabs";

import { useTransfers } from "./api/use-get-transfers";
import { useEcommTransfers } from "./api/ecom-transfers";
import { useP2PReceivers } from "./api/p2p-resivers";
import { useP2PSettings } from "./api/p2p-settings";
import { TransfersGrid } from "./ui/transfers-grid";
import { P2PReceiversGrid } from "./ui/resivers-grid";
import { P2PSettingsGrid } from "./ui/settings-grid";
import { EcommTransfersGrid } from "./ui/ecom-transfers-grid";

export const TransfersList =
    () => {
        const {
            data: transfers,
            isLoading:
            transfersLoading,
        } = useTransfers({
            date_from:
                "2026-03-01",

            date_to:
                "2026-06-06",

            per_page: 20,
        });

        const {
            data: ecommTransfers,
            isLoading:
            ecommLoading,
        } =
            useEcommTransfers(
                20
            );

        const {
            data: receivers,
            isLoading:
            receiversLoading,
        } =
            useP2PReceivers(
                20
            );

        const {
            data: settings,
            isLoading:
            settingsLoading,
        } =
            useP2PSettings(
                20
            );

        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Transfers
                        </h1>

                        <p className="text-muted-foreground">
                            Manage
                            transfers,
                            e-commerce,
                            receivers
                            and p2p
                            settings
                        </p>
                    </div>
                </div>

                <Tabs
                    defaultValue="transfers"
                    className="space-y-6"
                >
                    <TabsList className="flex flex-wrap">
                        <TabsTrigger value="transfers">
                            Transfers
                        </TabsTrigger>

                        <TabsTrigger value="ecomm">
                            Ecomm
                        </TabsTrigger>

                        <TabsTrigger value="receivers">
                            Receivers
                        </TabsTrigger>

                        <TabsTrigger value="settings">
                            P2P
                            Settings
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="transfers">
                        {transfersLoading ? (
                            <div>
                                Loading...
                            </div>
                        ) : (
                            <TransfersGrid
                                transfers={
                                    transfers?.data ||
                                    []
                                }
                            />
                        )}
                    </TabsContent>

                    <TabsContent value="ecomm">
                        {ecommLoading ? (
                            <div>
                                Loading...
                            </div>
                        ) : (
                            <EcommTransfersGrid
                                transfers={
                                    ecommTransfers?.data ||
                                    []
                                }
                            />
                        )}
                    </TabsContent>

                    <TabsContent value="receivers">
                        {receiversLoading ? (
                            <div>
                                Loading...
                            </div>
                        ) : (
                            <P2PReceiversGrid
                                receivers={
                                    receivers?.data ||
                                    []
                                }
                            />
                        )}
                    </TabsContent>

                    <TabsContent value="settings">
                        {settingsLoading ? (
                            <div>
                                Loading...
                            </div>
                        ) : (
                            <P2PSettingsGrid
                                settings={
                                    settings?.data ||
                                    []
                                }
                            />
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        );
    };