import { api } from "@/shared/api/axios";
import { KycVerificationsResponseSchema } from "../model/kyc-schema";

interface Params {
    status?: number;
    per_page?: number;
}

interface UpdateKycStatusDto {
    id: number;
    status: number;
    additional?: string;
}

export const getKycVerifications =
    async ({
        status,
        per_page = 20,
    }: Params) => {
        const response =
            await api.get(
                "/admin/kyc/verifications",
                {
                    params: {
                        status,
                        per_page,
                    },
                }
            );

        return KycVerificationsResponseSchema.parse(
            response.data
        );
    };


export const updateKycStatus =
    async ({
        id,
        status,
        additional,
    }: UpdateKycStatusDto) => {
        const response =
            await api.patch(
                `/admin/kyc/verifications/${id}/status`,
                {
                    status,
                    additional,
                }
            );

        return response.data;
    };