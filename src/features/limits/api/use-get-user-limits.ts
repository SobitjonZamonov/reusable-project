import { useQuery } from "@tanstack/react-query";
import { getUserLimits } from "../service/limits-service";

export const useGetUserLimits = (per_page = 1000) => {
    return useQuery({
        queryKey: ["user-limits", per_page],
        queryFn: () => getUserLimits(per_page),
    });
};
