import { Button } from "@/shared/ui/button";
import { Pencil } from "lucide-react";
import { type GlobalLimit } from "../model/limits.schema";

interface GlobalLimitItemProps {
    limit: GlobalLimit;
    onEdit: (limit: GlobalLimit) => void;
}

export const GlobalLimitItem = ({ limit, onEdit }: GlobalLimitItemProps) => {
    return (
        <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
                <p className="text-sm font-medium">
                    {limit.type} - {limit.subtype}
                </p>
                <p className="text-sm text-muted-foreground">
                    Period: {limit.period} | Currency: {limit.currency} | Order: {limit.limit_order}
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
