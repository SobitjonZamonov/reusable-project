import { Button } from "@/shared/ui/button";
import { Pencil } from "lucide-react";
import { type UserLimit } from "../model/limits.schema";

interface UserLimitItemProps {
    limit: UserLimit;
    onEdit: (limit: UserLimit) => void;
}

export const UserLimitItem = ({ limit, onEdit }: UserLimitItemProps) => {
    return (
        <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
                <p className="text-sm font-medium">
                    {limit.type} - {limit.subtype}
                </p>
                <p className="text-sm text-muted-foreground">
                    Period: {limit.period} | Currency: {limit.currency} | User ID: {limit.user_id}
                </p>
                <p className="text-lg font-bold">{limit.amount}</p>
            </div>
            <Button
                variant="outline"
                size="icon"
                onClick={() => onEdit(limit)}
            >
                <Pencil className="h-4 w-4" />
            </Button>
        </div>
    );
};
