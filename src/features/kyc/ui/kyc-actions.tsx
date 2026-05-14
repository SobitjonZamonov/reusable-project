import { Button } from "@/shared/ui/button";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/shared/ui/alert-dialog";
import { useUpdateKycStatus } from "../api/use-verify";


interface Props {
    id: number;
}

export const KycActions = ({
    id,
}: Props) => {
    const { mutate, isPending } =
        useUpdateKycStatus();

    return (
        <div className="flex items-center gap-2">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button size="sm">
                        Approve
                    </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Approve KYC
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                            Are you sure you want to approve this verification?
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                            disabled={isPending}
                            onClick={() =>
                                mutate({
                                    id,
                                    status: 1,
                                })
                            }
                        >
                            Confirm
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        size="sm"
                        variant="destructive"
                    >
                        Reject
                    </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Reject KYC
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                            Are you sure you want to reject this verification?
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                            disabled={isPending}
                            onClick={() =>
                                mutate({
                                    id,
                                    status: 2,
                                })
                            }
                        >
                            Reject
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};