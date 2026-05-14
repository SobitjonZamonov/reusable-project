import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateKycStatus } from "../service/kyc-service";


export const useUpdateKycStatus =
    () => {
        const queryClient =
            useQueryClient();

        return useMutation({
            mutationFn:
                updateKycStatus,

            onSuccess: () => {
                queryClient.invalidateQueries(
                    {
                        queryKey: [
                            "kyc-verifications",
                        ],
                    }
                );
            },
        });
    };