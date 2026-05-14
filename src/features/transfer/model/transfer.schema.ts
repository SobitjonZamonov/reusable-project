import { z } from "zod";

export const TransferSchema =
    z.object({
        id: z.number(),
        user_id: z.number(),
        from: z.string(),
        from_mfo: z.string().nullable(),
        to: z.string(),
        tag_id: z.any().nullable(),
        to_mfo: z.string().nullable(),
        receiver_name: z.string().nullable(),
        sender_name: z.string().nullable(),
        amount: z.string(),
        nominal: z.string(),
        commission: z.string(),
        real_commission: z.string(),
        currency: z.string(),
        desc: z.string().nullable(),
        date: z.string(),
        utid: z.string(),
        status: z.string(),
        aditional: z.any().nullable(),
        app_type: z.any().nullable(),
        error_text: z.string().nullable(),
        cashback_amount: z.number(),
        op_type: z.string(),
    });

export const TransfersResponseSchema =
    z.object({
        current_page: z.number(),
        data: z.array(
            TransferSchema
        ),
        last_page: z.number(),
        per_page: z.number(),
        total: z.number(),
    });

export const EcommTransferSchema =
    z.object({
        id: z.number(),
        utid: z.string(),
        order_id: z.string(),
        request_id: z.string(),
        token: z.string().nullable(),
        create_at: z.string(),
        status: z.string(),
        refund_url:
            z.string().nullable(),
    });

export const EcommTransfersResponseSchema =
    z.object({
        current_page: z.number(),
        data: z.array(
            EcommTransferSchema
        ),
        last_page: z.number(),
        per_page: z.number(),
        total: z.number(),
    });

export const P2PReceiverSchema =
    z.object({
        id: z.number(),
        user_id: z.number(),
        pan: z.string(),
        holder: z.string(),
        key: z.string(),
        currency: z.string(),
        rating: z.number(),
        created_at: z.string(),
        updated_at: z.string(),
    });

export const P2PReceiversResponseSchema =
    z.object({
        current_page: z.number(),
        data: z.array(
            P2PReceiverSchema
        ),
        last_page: z.number(),
        per_page: z.number(),
        total: z.number(),
    });

export const P2PSettingSchema =
    z.object({
        id: z.number(),
        bank: z.string(),
        receiver_code: z.string(),
        type: z.string(),
        sender: z.string(),
        merchant: z.string(),
        terminal: z.string(),
        port: z.string(),
        commission_code:
            z.string(),
        active: z.number(),
        add_date: z.string(),
    });

export const P2PSettingsResponseSchema =
    z.object({
        current_page: z.number(),
        data: z.array(
            P2PSettingSchema
        ),
        last_page: z.number(),
        per_page: z.number(),
        total: z.number(),
    });

export type Transfer = z.infer<
    typeof TransferSchema
>;

export type EcommTransfer =
    z.infer<
        typeof EcommTransferSchema
    >;

export type P2PReceiver =
    z.infer<
        typeof P2PReceiverSchema
    >;

export type P2PSetting =
    z.infer<
        typeof P2PSettingSchema
    >;