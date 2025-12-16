import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardTopHead from "../Dashboard/DashboardTopHead";
import messages from "@/utils/message";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import EditTaskForm from "../CreateTaskForm/EditTaskForm";

const TaskAssignList: React.FC = () => {
  const [taskList, setTaskList] = useState<any[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
const navigate = useNavigate();
  useEffect(() => {
    const getTaskList = async (data: Partial<any> = {}) => {
      try {
        const getTaskListApi = "http://localhost:8000/api/task/task-list";
        const token = localStorage.getItem("token");
        console.log("get Task List", getTaskListApi);

        const responseApi = await axios.get(getTaskListApi, {
          headers: {
            Authorization: `Bearer ${token}`, // send token
          },
        });

        console.log("list show", responseApi.data.tasks);
        setTaskList(responseApi.data.tasks);
      } catch (error) {
        console.log("Something went wrong in getting all task list api", error);
      } finally {
      }
    };
    getTaskList();
  }, []);




  return (
    <>
      <div>
        <DashboardTopHead
          tabName={!isEdit ? messages.Tasks : "Edit Tasks"}
          buttonName="+ Create Task"
          isLink={true}
        />
        {!isEdit ? (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">User Id</TableHead>
                  
                  <TableHead>Name</TableHead>
                  {/* <TableHead>Due Date</TableHead> */}
                  <TableHead>Priority</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {taskList.map((task, index) => (
                  <TableRow key={task?.id ?? index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>

                    <TableCell className="flex items-center gap-3">
                      {task?.assigned_user ?? "Name"}
                    </TableCell>

                    {/* <TableCell>{task?.dueDate ?? "Due Date"}</TableCell> */}
                    <TableCell>{task?.priority ?? "Priority"}</TableCell>
                    <TableCell>{task?.description ?? "Description"}</TableCell>

                    <TableCell className="text-center">
                      {task?.status ?? "--"}
                    </TableCell>
                    <TableCell className="text-center flex items-center justify-center gap-2">
                      <Button
                        className="deleteBtn order-1"
                        style={{
                          background: "red",
                          fontSize: "20px",
                          padding: "0 9px",
                        }}
                      >
                        {" "}
                        🗑
                      </Button>
                      {/* <Button
                 onClick={() => handleEditable(task?.id)}
                className="editBtn ml-2 "
                > <svg xmlns="www.w3.org" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                > <svg xmlns="www.w3.org" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.5 12 2.5 14.5 5zM11.5 5.5L13 6.5 14.5 5 13 3.5 11.5 5zM10.5 2.5L12 3.5 13.5 2 12 0.5 10.5 2zM10.5 10.5L12 11.5 13.5 10 12 8.5 10.5 10z"/>
              </svg></Button>  */}
                      {/* <Link to={`/dashboard/edit_task/${task._id}`}> */}
                        <Button onClick={()=>navigate(`/dashboard/edit_task/${task._id}`)}>edit</Button>
                      {/* </Link> */}
                      {/* <Button
                  onClick={() => handleEditable(task?.id)}
                  className="editBtn ml-2 "
                  >
                    edit
                  </Button> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        ) : (
          <>
          <h1>asdfasd</h1>
            {/* <EditTaskForm /> */}
          </>
        )}
      </div>
    </>
  );
};

export default TaskAssignList;
