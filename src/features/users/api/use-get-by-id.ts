import { useQuery } from "@tanstack/react-query";
import { getUser } from "../service/users-serivce";


export const useUser = (
    id: string
) => {
    return useQuery({
        queryKey: ["user", id],

        queryFn: () => getUser(id),

        enabled: !!id,
    });
};
