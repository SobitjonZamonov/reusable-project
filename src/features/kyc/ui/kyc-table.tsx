import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/ui/table";


import { KycStatusBadge } from "./kyc-status-badge";
import { KycActions } from "./kyc-actions";
import type { KycVerification } from "../model/kyc-schema";

interface Props {
    items: KycVerification[];
}

export const KycTable = ({
    items,
}: Props) => {
    return (
        <div className="rounded-xl border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            ID
                        </TableHead>

                        <TableHead>
                            User ID
                        </TableHead>

                        <TableHead>
                            Type
                        </TableHead>

                        <TableHead>
                            Code
                        </TableHead>

                        <TableHead>
                            Status
                        </TableHead>

                        <TableHead>
                            Created At
                        </TableHead>

                        <TableHead className="text-right">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>
                                {item.id}
                            </TableCell>

                            <TableCell>
                                {item.user_id}
                            </TableCell>

                            <TableCell>
                                {item.type}
                            </TableCell>

                            <TableCell>
                                {item.code}
                            </TableCell>

                            <TableCell>
                                <KycStatusBadge
                                    status={
                                        item.status
                                    }
                                />
                            </TableCell>

                            <TableCell>
                                {item.create_at}
                            </TableCell>

                            <TableCell className="text-right">
                                <KycActions
                                    id={item.id}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};