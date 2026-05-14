"use client";

import { useUsers } from "./api/use-get-all";
import { UsersTable } from "./ui/user-table";


export const UsersList = () => {
    const {
        data,
        isLoading,
        isError,
    } = useUsers({
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
        <div className="space-y-4">
            <div>
                <h1 className="text-2xl font-bold">
                    Users
                </h1>

                <p className="text-muted-foreground">
                    Total users: {data.total}
                </p>
            </div>

            <UsersTable users={data.data} />
        </div>
    );
};