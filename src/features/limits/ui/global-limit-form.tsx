import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { type GlobalLimit } from "../model/limits.schema";

interface GlobalLimitFormProps {
    limit: GlobalLimit;
    onChange: (limit: GlobalLimit) => void;
}

export const GlobalLimitForm = ({ limit, onChange }: GlobalLimitFormProps) => {
    const handleChange = <K extends keyof GlobalLimit>(key: K, value: GlobalLimit[K]) => {
        onChange({ ...limit, [key]: value });
    };

    return (
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="g-type" className="text-right">Type</Label>
                <Input
                    id="g-type"
                    value={limit.type ?? ""}
                    onChange={(e) => handleChange("type", e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="g-subtype" className="text-right">Subtype</Label>
                <Input
                    id="g-subtype"
                    value={limit.subtype ?? ""}
                    onChange={(e) => handleChange("subtype", e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="g-period" className="text-right">Period</Label>
                <Input
                    id="g-period"
                    value={limit.period ?? ""}
                    onChange={(e) => handleChange("period", e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="g-currency" className="text-right">Currency</Label>
                <Input
                    id="g-currency"
                    value={limit.currency ?? ""}
                    onChange={(e) => handleChange("currency", e.target.value)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="g-amount" className="text-right">Amount</Label>
                <Input
                    id="g-amount"
                    type="number"
                    value={limit.amount ?? ""}
                    onChange={(e) => handleChange("amount", Number(e.target.value) || 0)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="g-op-number" className="text-right">Op Number</Label>
                <Input
                    id="g-op-number"
                    type="number"
                    value={limit.op_number ?? ""}
                    onChange={(e) => handleChange("op_number", Number(e.target.value) || null)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="g-debitor" className="text-right">Debitor Type</Label>
                <Input
                    id="g-debitor"
                    value={limit.debitor_type ?? ""}
                    onChange={(e) => handleChange("debitor_type", e.target.value || null)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="g-creditor" className="text-right">Creditor Type</Label>
                <Input
                    id="g-creditor"
                    value={limit.creditor_type ?? ""}
                    onChange={(e) => handleChange("creditor_type", e.target.value || null)}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="g-limit-order" className="text-right">Limit Order</Label>
                <Input
                    id="g-limit-order"
                    type="number"
                    value={limit.limit_order ?? ""}
                    onChange={(e) => handleChange("limit_order", Number(e.target.value))}
                    className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="g-limit-type" className="text-right">Limit Type</Label>
                <Input
                    id="g-limit-type"
                    value={limit.limit_type ?? ""}
                    onChange={(e) => handleChange("limit_type", e.target.value)}
                    className="col-span-3"
                />
            </div>
        </div>
    );
};
