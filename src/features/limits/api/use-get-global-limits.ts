import { useQuery } from "@tanstack/react-query";
import { getGlobalLimits } from "../service/limits-service";

export const useGetGlobalLimits = (per_page = 1000) => {
    return useQuery({
        queryKey: ["global-limits", per_page],
        queryFn: () => getGlobalLimits(per_page),
    });
};
