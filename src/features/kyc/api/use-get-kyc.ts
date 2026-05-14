import { useQuery } from "@tanstack/react-query";
import { getKycVerifications } from "../service/kyc-service";

interface Params {
    status?: number;
    per_page?: number;
}

export const useGetKycVerifications =
    ({
        status,
        per_page = 20,
    }: Params) => {
        return useQuery({
            queryKey: [
                "kyc-verifications",
                status,
                per_page,
            ],

            queryFn: () =>
                getKycVerifications({
                    status,
                    per_page,
                }),
        });
    };