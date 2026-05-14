import { Button } from "@/shared/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/shared/ui/dialog";
import { Loader2 } from "lucide-react";
import { type GlobalLimit } from "../model/limits.schema";
import { GlobalLimitForm } from "./global-limit-form";

interface GlobalLimitDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    limit: GlobalLimit | null;
    onLimitChange: (limit: GlobalLimit) => void;
    onSave: () => void;
    isPending: boolean;
    title: string;
    description: string;
}

export const GlobalLimitDialog = ({
    open,
    onOpenChange,
    limit,
    onLimitChange,
    onSave,
    isPending,
    title,
    description,
}: GlobalLimitDialogProps) => {
    if (!limit) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <GlobalLimitForm limit={limit} onChange={onLimitChange} />
                <DialogFooter>
                    <Button onClick={onSave} disabled={isPending}>
                        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
