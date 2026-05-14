"use client";

import { useState } from "react";


import { Button } from "@/shared/ui/button";
import { useGetKycVerifications } from "./api/use-get-kyc";
import { KycTable } from "./ui/kyc-table";

export const KycList = () => {
    const [status, setStatus] =
        useState<number | undefined>();

    const {
        data,
        isLoading,
        isError,
    } = useGetKycVerifications({
        status,
        per_page: 20,
    });

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div>
                Something went wrong
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">
                        KYC Verifications
                    </h1>

                    <p className="text-muted-foreground">
                        Total: {data.total}
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant={
                            status === undefined
                                ? "default"
                                : "outline"
                        }
                        onClick={() =>
                            setStatus(
                                undefined
                            )
                        }
                    >
                        All
                    </Button>

                    <Button
                        variant={
                            status === 0
                                ? "default"
                                : "outline"
                        }
                        onClick={() =>
                            setStatus(0)
                        }
                    >
                        Pending
                    </Button>

                    <Button
                        variant={
                            status === 1
                                ? "default"
                                : "outline"
                        }
                        onClick={() =>
                            setStatus(1)
                        }
                    >
                        Approved
                    </Button>

                    <Button
                        variant={
                            status === 2
                                ? "default"
                                : "outline"
                        }
                        onClick={() =>
                            setStatus(2)
                        }
                    >
                        Rejected
                    </Button>
                </div>
            </div>

            <KycTable items={data.data} />
        </div>
    );
};