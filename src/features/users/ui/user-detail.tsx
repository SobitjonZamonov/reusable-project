import { useParams } from "react-router-dom";


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/shared/ui/card";
import { useUser } from "../api/use-get-by-id";

export const UserDetail = () => {
    const { id } = useParams();

    const {
        data,
        isLoading,
        isError,
    } = useUser(id || "");

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !data) {
        return (
            <div>
                User not found
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    {data.fullname}
                </h1>

                <p className="text-muted-foreground">
                    User detail page
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Basic Info
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Info
                            label="ID"
                            value={data.id}
                        />

                        <Info
                            label="Phone"
                            value={data.phone}
                        />

                        <Info
                            label="Passport"
                            value={
                                data.passport
                            }
                        />

                        <Info
                            label="INN"
                            value={data.inn}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Account
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Info
                            label="Status"
                            value={
                                data.status
                            }
                        />

                        <Info
                            label="Level"
                            value={
                                data.level
                            }
                        />

                        <Info
                            label="Type"
                            value={
                                data.user_type
                            }
                        />

                        <Info
                            label="Currency"
                            value={
                                data.currency
                            }
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Dates
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Info
                            label="Registration"
                            value={
                                data.registration_date
                            }
                        />

                        <Info
                            label="Birthdate"
                            value={
                                data.birthdate
                            }
                        />

                        <Info
                            label="Passport Expire"
                            value={
                                data.passport_expire
                            }
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

const Info = ({
    label,
    value,
}: {
    label: string;
    value?: string | number | null;
}) => {
    return (
        <div className="flex items-center justify-between gap-4 border-b pb-2">
            <span className="text-sm text-muted-foreground">
                {label}
            </span>

            <span className="font-medium">
                {value || "-"}
            </span>
        </div>
    );
};