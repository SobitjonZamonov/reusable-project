import { api } from "@/shared/api/axios";

import {
    TransferSchema,
    TransfersResponseSchema,
    EcommTransfersResponseSchema,
    P2PReceiversResponseSchema,
    P2PSettingsResponseSchema,
} from "../model/transfer.schema";

interface TransfersParams {
    date_from: string;

    date_to: string;

    user_id?: number;

    status?: string;

    per_page?: number;
}

export const getTransfers =
    async ({
        date_from,
        date_to,
        user_id,
        status,
        per_page = 1000,
    }: TransfersParams) => {
        const response =
            await api.get(
                "/admin/transfers",
                {
                    params: {
                        date_from,
                        date_to,
                        user_id,
                        status,
                        per_page,
                    },
                }
            );

        return TransfersResponseSchema.parse(
            response.data
        );
    };

export const getTransfer =
    async (
        id: string | number
    ) => {
        const response =
            await api.get(
                `/admin/transfers/${id}`
            );

        return TransferSchema.parse(
            response.data
        );
    };

export const getEcommTransfers =
    async (
        per_page = 1000
    ) => {
        const response =
            await api.get(
                "/admin/ecomm-transfers",
                {
                    params: {
                        per_page,
                    },
                }
            );

        return EcommTransfersResponseSchema.parse(
            response.data
        );
    };

export const getP2PReceivers =
    async (
        per_page = 1000
    ) => {
        const response =
            await api.get(
                "/admin/p2p/receivers",
                {
                    params: {
                        per_page,
                    },
                }
            );

        return P2PReceiversResponseSchema.parse(
            response.data
        );
    };

export const getP2PSettings =
    async (
        per_page = 20
    ) => {
        const response =
            await api.get(
                "/admin/p2p/settings",
                {
                    params: {
                        per_page,
                    },
                }
            );

        return P2PSettingsResponseSchema.parse(
            response.data
        );
    };