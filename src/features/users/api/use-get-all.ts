import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../service/users-serivce";

type Props = {
    page?: number;
    per_page?: number;
};

export const useUsers = ({
    page = 1,
    per_page = 1000,
}: Props) => {
    return useQuery({
        queryKey: [
            "users",
            page,
            per_page,
        ],

        queryFn: () =>
            getUsers({
                page,
                per_page,
            }),
    });
};