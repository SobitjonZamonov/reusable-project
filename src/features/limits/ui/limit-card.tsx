import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Loader2, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { useState } from "react";
import { type GlobalLimit, type UserLimit } from "../model/limits.schema";
import { useGetGlobalLimits } from "../api/use-get-global-limits";
import { useGetUserLimits } from "../api/use-get-user-limits";
import { useUpdateGlobalLimit } from "../api/use-update-global-limit";
import { useUpdateUserLimit } from "../api/use-update-user-limit";
import { useCreateGlobalLimit } from "../api/use-create-global-limit";
import { useCreateUserLimit } from "../api/use-create-user-limit";
import { GlobalLimitItem } from "./global-limit-item";
import { UserLimitItem } from "./user-limit-item";
import { GlobalLimitDialog } from "./global-limit-dialog";
import { UserLimitDialog } from "./user-limit-dialog";

const emptyGlobalLimit: GlobalLimit = {
    id: 0,
    period: "",
    type: "",
    subtype: "",
    currency: "",
    amount: 0,
    op_number: null,
    debitor_type: null,
    creditor_type: null,
    limit_order: 0,
    limit_type: "",
};
const emptyUserLimit: UserLimit = {
    id: 0,
    user_id: 0,
    period: "",
    type: "",
    subtype: "",
    currency: "",
    amount: 0,
    op_number: null,
    debitor_type: null,
    creditor_type: null,
};


export const LimitCard = () => {
    const { data: globalLimits, isLoading: isLoadingGlobal } = useGetGlobalLimits();
    const { data: userLimits, isLoading: isLoadingUser } = useGetUserLimits();
    const { mutateAsync: updateGlobalLimit, isPending: isUpdatingGlobal } = useUpdateGlobalLimit();
    const { mutateAsync: updateUserLimit, isPending: isUpdatingUser } = useUpdateUserLimit();
    const { mutateAsync: createGlobalLimit, isPending: isCreatingGlobal } = useCreateGlobalLimit();
    const { mutateAsync: createUserLimit, isPending: isCreatingUser } = useCreateUserLimit();

    // Edit state
    const [selectedGlobalLimit, setSelectedGlobalLimit] = useState<GlobalLimit | null>(null);
    const [selectedUserLimit, setSelectedUserLimit] = useState<UserLimit | null>(null);
    const [openEditGlobalDialog, setOpenEditGlobalDialog] = useState(false);
    const [openEditUserDialog, setOpenEditUserDialog] = useState(false);

    // Create state
    const [newGlobalLimit, setNewGlobalLimit] = useState<GlobalLimit>({ ...emptyGlobalLimit });
    const [newUserLimit, setNewUserLimit] = useState<UserLimit>({ ...emptyUserLimit });
    const [openCreateGlobalDialog, setOpenCreateGlobalDialog] = useState(false);
    const [openCreateUserDialog, setOpenCreateUserDialog] = useState(false);

    // Handlers
    const handleEditGlobalLimit = async () => {
        if (!selectedGlobalLimit) return;
        await updateGlobalLimit({ id: selectedGlobalLimit.id, data: selectedGlobalLimit });
        setOpenEditGlobalDialog(false);
        setSelectedGlobalLimit(null);
    };

    const handleEditUserLimit = async () => {
        if (!selectedUserLimit) return;
        await updateUserLimit({ id: selectedUserLimit.id, data: selectedUserLimit });
        setOpenEditUserDialog(false);
        setSelectedUserLimit(null);
    };

    const handleCreateGlobalLimit = async () => {
        await createGlobalLimit(newGlobalLimit);
        setNewGlobalLimit({ ...emptyGlobalLimit });
        setOpenCreateGlobalDialog(false);
    };

    const handleCreateUserLimit = async () => {
        await createUserLimit(newUserLimit);
        setNewUserLimit({ ...emptyUserLimit });
        setOpenCreateUserDialog(false);
    };

    if (isLoadingGlobal || isLoadingUser) {
        return (
            <Card className="w-full">
                <CardContent className="flex items-center justify-center p-8">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full">
            <CardContent>
                <Tabs defaultValue="global">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="global">Global Limits</TabsTrigger>
                        <TabsTrigger value="user">User Limits</TabsTrigger>
                    </TabsList>

                    {/* ==================== GLOBAL LIMITS TAB ==================== */}
                    <TabsContent value="global">
                        <div className="space-y-4">
                            <Button onClick={() => setOpenCreateGlobalDialog(true)}>
                                <Plus className="mr-2 h-4 w-4" />
                                Create Global Limit
                            </Button>

                            {globalLimits?.data.map((limit) => (
                                <GlobalLimitItem
                                    key={limit.id}
                                    limit={limit}
                                    onEdit={(limit) => {
                                        setSelectedGlobalLimit(limit);
                                        setOpenEditGlobalDialog(true);
                                    }}
                                />
                            ))}
                        </div>
                    </TabsContent>

                    {/* ==================== USER LIMITS TAB ==================== */}
                    <TabsContent value="user">
                        <div className="space-y-4">
                            <Button onClick={() => setOpenCreateUserDialog(true)}>
                                <Plus className="mr-2 h-4 w-4" />
                                Create User Limit
                            </Button>

                            {userLimits?.data.map((limit) => (
                                <UserLimitItem
                                    key={limit.id}
                                    limit={limit}
                                    onEdit={(limit) => {
                                        setSelectedUserLimit(limit);
                                        setOpenEditUserDialog(true);
                                    }}
                                />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>

            {/* ==================== DIALOGS ==================== */}
            <GlobalLimitDialog
                open={openEditGlobalDialog}
                onOpenChange={setOpenEditGlobalDialog}
                limit={selectedGlobalLimit}
                onLimitChange={setSelectedGlobalLimit}
                onSave={handleEditGlobalLimit}
                isPending={isUpdatingGlobal}
                title="Edit Global Limit"
                description="Update the global limit settings below."
            />

            <GlobalLimitDialog
                open={openCreateGlobalDialog}
                onOpenChange={setOpenCreateGlobalDialog}
                limit={newGlobalLimit}
                onLimitChange={setNewGlobalLimit}
                onSave={handleCreateGlobalLimit}
                isPending={isCreatingGlobal}
                title="Create Global Limit"
                description="Fill in the details to create a new global limit."
            />

            <UserLimitDialog
                open={openEditUserDialog}
                onOpenChange={setOpenEditUserDialog}
                limit={selectedUserLimit}
                onLimitChange={setSelectedUserLimit}
                onSave={handleEditUserLimit}
                isPending={isUpdatingUser}
                title="Edit User Limit"
                description="Update the user limit settings below."
            />

            <UserLimitDialog
                open={openCreateUserDialog}
                onOpenChange={setOpenCreateUserDialog}
                limit={newUserLimit}
                onLimitChange={setNewUserLimit}
                onSave={handleCreateUserLimit}
                isPending={isCreatingUser}
                title="Create User Limit"
                description="Fill in the details to create a new user limit."
            />
        </Card>
    );
};
