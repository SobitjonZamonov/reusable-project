import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { type UserLimit } from "../model/limits.schema";

interface UserLimitFormProps {
    limit: UserLimit;
    onChange: (limit: UserLimit) => void;
}

export const UserLimitForm = ({ limit, onChange }: UserLimitFormProps) => {
    const handleChange = <K extends keyof UserLimit>(key: K, value: UserLimit[K]) => {
        onChange({ ...limit, [key]: value });
    };

    return (
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="u-user-id" className="text-right">User ID</Label>
                <Input
                    id="u-user-id"
                    type="number"
                    value={limit.user_id ?? ""}
                    onChange={(e) => handleChange("user_id", Number(e.target.value))}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="u-type" className="text-right">Type</Label>
                <Input
                    id="u-type"
                    value={limit.type ?? ""}
                    onChange={(e) => handleChange("type", e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="u-subtype" className="text-right">Subtype</Label>
                <Input
                    id="u-subtype"
                    value={limit.subtype ?? ""}
                    onChange={(e) => handleChange("subtype", e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="u-period" className="text-right">Period</Label>
                <Input
                    id="u-period"
                    value={limit.period ?? ""}
                    onChange={(e) => handleChange("period", e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="u-currency" className="text-right">Currency</Label>
                <Input
                    id="u-currency"
                    value={limit.currency ?? ""}
                    onChange={(e) => handleChange("currency", e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="u-amount" className="text-right">Amount</Label>
                <Input
                    id="u-amount"
                    type="number"
                    value={limit.amount ?? ""}
                    onChange={(e) => handleChange("amount", Number(e.target.value) || 0)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="u-op-number" className="text-right">Op Number</Label>
                <Input
                    id="u-op-number"
                    type="number"
                    value={limit.op_number ?? ""}
                    onChange={(e) => handleChange("op_number", Number(e.target.value) || null)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="u-debitor" className="text-right">Debitor Type</Label>
                <Input
                    id="u-debitor"
                    value={limit.debitor_type ?? ""}
                    onChange={(e) => handleChange("debitor_type", e.target.value || null)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="u-creditor" className="text-right">Creditor Type</Label>
                <Input
                    id="u-creditor"
                    value={limit.creditor_type ?? ""}
                    onChange={(e) => handleChange("creditor_type", e.target.value || null)}
                    className="col-span-3"
                />
            </div>
        </div>
    );
};
