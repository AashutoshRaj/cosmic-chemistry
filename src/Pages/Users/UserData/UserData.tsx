import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import DashboardTopHead from "@/Pages/Dashboard/DashboardTopHead";
import messages from "@/utils/message";
import axios from "axios";
import { useEffect, useState } from "react";
import userProfile from "../../Dashboard/pngtree-user-profile-avatar-png-image_10211467.png"
// Define the Values type for the getAllUsers function
type Values = {
    email: string;
    firstName: string;
    key: number;
    place:string;
    profile:string;
    time:number;
};

const UserData = () => {
    const [users, setUsers] = useState<Values[]>([]);

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const apiUrlAllUsers = "http://localhost:8000/api/admin/all_users"
                const token = localStorage.getItem("token");
                console.log("tokennnnnnnnnnnnn Checkkkkkkkk", token);

                const response = await axios.get(apiUrlAllUsers,{
                        headers: {
                            Authorization: `Bearer ${token}`, // send token
                        },
                    }
                );
                console.log("all users Response", response);
                setUsers(response.data.users);
                // console.log("get user Details all ", getUserUpi.firstName);
            } catch (error) {
                console.log("Something went wrong in getting all users api", error);
            } finally {

            }
        };

        getAllUsers();
    }, []);

    return (
        <div>
            <DashboardTopHead tabName={messages.User} buttonName="" />

            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">User Id</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Time</TableHead>

                        <TableHead className="text-right">Place</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((items, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell
                                className="flex items-center gap-3"
                            >
                                <div className="w-[40px] h-[40px] rounded-full bg-[#f3f3f3] overflow-hidden">

                                 <img src={items.profile || userProfile}   alt="" className=" " />
                                </div>
                                {items.firstName}</TableCell>
                            <TableCell>{items.email}</TableCell>
                            <TableCell>{items.time}</TableCell>
                            <TableCell className="text-right">{items.place}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UserData;
