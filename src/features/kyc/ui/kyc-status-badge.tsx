import { Badge } from "@/shared/ui/badge";

interface Props {
    status: number;
}

const statusMap = {
    0: {
        label: "Pending",
        className:
            "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    },

    1: {
        label: "Approved",
        className:
            "bg-green-500/10 text-green-500 border-green-500/20",
    },

    2: {
        label: "Rejected",
        className:
            "bg-red-500/10 text-red-500 border-red-500/20",
    },
};

export const KycStatusBadge = ({
    status,
}: Props) => {
    const config =
        statusMap[
        status as keyof typeof statusMap
        ];

    if (!config) {
        return (
            <Badge variant="outline">
                Unknown
            </Badge>
        );
    }

    return (
        <Badge
            variant="outline"
            className={config.className}
        >
            {config.label}
        </Badge>
    );
};