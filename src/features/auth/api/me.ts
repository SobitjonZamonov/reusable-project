import { useQuery } from "@tanstack/react-query";
import { getMe } from "../model/use-me";

export const useMe = () => {
    return useQuery({
        queryKey: ["me"],
        queryFn: getMe,
        retry: false,
    });
};