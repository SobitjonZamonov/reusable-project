import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/ui/table";
import type { User } from "../model/users.schema";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/route";


type Props = {
    users: User[];
};

export const UsersTable = ({
    users,
}: Props) => {

    const navigate = useNavigate();
    return (
        <div className="rounded-xl border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>

                        <TableHead>
                            Fullname
                        </TableHead>

                        <TableHead>
                            Phone
                        </TableHead>

                        <TableHead>
                            Passport
                        </TableHead>

                        <TableHead>
                            Status
                        </TableHead>

                        <TableHead>
                            Level
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            onClick={() =>
                                navigate(
                                    ROUTES.USERS_DETAIL(user.id)
                                )
                            }
                        >
                            <TableCell>
                                {user.id}
                            </TableCell>

                            <TableCell>
                                {user.fullname}
                            </TableCell>

                            <TableCell>
                                {user.phone}
                            </TableCell>

                            <TableCell>
                                {user.passport}
                            </TableCell>

                            <TableCell>
                                {user.status}
                            </TableCell>

                            <TableCell>
                                {user.level}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};