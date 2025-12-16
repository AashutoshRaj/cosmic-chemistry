import { Button } from "@/components/ui/button";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Values {
  task_name: string;
  description: string;
  assigned_user: string;
  priority: string;
}

interface User {
  firstName: string;
  _id: string;
}

const EditTaskForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [editValues, setEditValues] = useState<Values | null>(null);

   const [editValues, setEditValues] = useState<{
    task_name?: string;
  description?: string;
  assigned_user?: string;
  priority?: string;
  }>({});

  const [editUserName, setUsers] = useState<User[]>([]);
  // const [isUpdateTask, setIsUpdateTask] = useState<User[]>([]);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const userIdUrl = `http://localhost:8000/api/task/task-list/${id}`;
        console.log("Fetching task:", userIdUrl);

        const res = await axios.get(userIdUrl);
        console.log("Task fetched:", res.data.task);

        setEditValues({
          task_name: res.data.task.task_name,
          description: res.data.task.description,
          assigned_user: res.data.task.assigned_user,
          priority: res.data.task.priority,
        });
      } catch (error) {
        console.log("Error fetching task", error);
      }
    };

    fetchTask();
  }, [id]);

  const handleUpdateUser = async (values:any) => {
    try {
       const token = localStorage.getItem("token");
      const getUpdateApi =
        "http://localhost:8000/api/task/task-list/update-task";
        const file = new FormData();
      file.append("task_name", values.task_name);
      file.append("description", values.description);
      file.append("assigned_user", values.assigned_user);
      file.append("priority", values.priority);
      
        console.log("getting file valuesssssssssssssssssssss", file);
      //  console.log("get updateeeeeeeeeeeeeee", getUpdateApi);
       const responseUpdateApi = await axios.post(getUpdateApi, file, {
        headers: {
          authorization: `Bearer ${token}`, // send token
          // "Content-Type": "multipart/form-data",
        },
      });
      console.log("object", responseUpdateApi)
 setTimeout(() => {
        navigate("/");
      }, 3000);
      // const response = await axios.post(getUpdateApi);
      // console.log("getting finaly dta", response);
      // setEditValues(editValues);
      // navigate("/dashboard/task_assign");
    } catch (error) {
      console.log("Not getting api ", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const apiUrlAllUsersName = "http://localhost:8000/api/admin/all_users";
        const token = localStorage.getItem("token");

        const response = await axios.get(apiUrlAllUsersName, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("All Users Response", response.data.users);

        setUsers(response.data.users);
      } catch (error) {
        console.log("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  if (!editValues) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <>
      <Formik
        initialValues={{

             task_name: editValues?.task_name || '',
             description: editValues?.description || '',
             priority: editValues?.priority || '',
             assigned_user: editValues?.assigned_user || '',

              // description?: string;
              // assigned_user?: string;
              // priority?: string;

          //  firstName: isUser?.firstName || " ",
          //       email: isUser?.email || " ",
              
          //       place: isUser?.place || " ",
        }}
        enableReinitialize={true} 
        onSubmit={(values) => {
          console.log("Updated tasks:", values);
        }}
      >
        <Form>
          <div className="max-w-md mx-auto mt-8">
            {/* Task Name */}
            <div className="mb-5 relative w-full">
              <label
                htmlFor="task_name"
                className="block text-sm mb-1 font-medium"
              >
                Task Name
              </label>
              <Field
                type="text"
                id="task_name"
                name="task_name"
                placeholder="Task Name"
                className="w-full border-0 border-b border-black h-[50px] outline-none"
              />
              <ErrorMessage
                name="task_name"
                component="div"
                className="text-red-500 text-sm mt-1 absolute"
              />
            </div>
            <div className="mb-5 relative">
              <label
                htmlFor="description"
                className="block text-sm mb-1 font-medium"
              >
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Enter description..."
                className="w-full border-0 border-b border-black outline-none h-[80px]"
              />
            </div>
            <div className="mb-5 relative">
              <label
                htmlFor="assigned_user"
                className="block text-sm mb-1 font-medium"
              >
                Assign User
              </label>

              <Field
                as="select"
                id="firstNamer"
                name="firstNamer"
                className="w-full border-0 border-b border-black h-[50px] outline-none"
              >
                <option value="">Select User</option>
                {editUserName.map((userList) => (
                  <option key={userList._id} value={userList._id}>
                    {userList.firstName}
                  </option>
                ))}
              </Field>

              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm mt-1 absolute"
              />
            </div>
            <div className="mb-5 relative">
              <label
                htmlFor="priority"
                className="block text-sm mb-1 font-medium"
              >
                Priority
              </label>

              <Field
                as="select"
                id="priority"
                name="priority"
                className="w-full border-0 border-b border-black h-[50px] outline-none"
              >
                <option value="">Select</option>
                <option value="High">High</option>
                <option value="Mid">Mid</option>
                <option value="Low">Low</option>
              </Field>

              <ErrorMessage
                name="priority"
                component="div"
                className="text-red-500 text-sm mt-1 absolute"
              />
            </div>

            {/* Save Button */}
            <Button onClick={handleUpdateUser} type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default EditTaskForm;
