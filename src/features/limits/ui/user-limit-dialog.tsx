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
import { type UserLimit } from "../model/limits.schema";
import { UserLimitForm } from "./user-limit-form";

interface UserLimitDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    limit: UserLimit | null;
    onLimitChange: (limit: UserLimit) => void;
    onSave: () => void;
    isPending: boolean;
    title: string;
    description: string;
}

export const UserLimitDialog = ({
    open,
    onOpenChange,
    limit,
    onLimitChange,
    onSave,
    isPending,
    title,
    description,
}: UserLimitDialogProps) => {
    if (!limit) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <UserLimitForm limit={limit} onChange={onLimitChange} />
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
