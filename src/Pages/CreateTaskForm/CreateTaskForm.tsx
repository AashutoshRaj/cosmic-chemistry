import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Values {
  description: string;
  task_name: string;
  assigned_user: string;
  priority: string;
  firstName: string;
}

interface User {
  firstName: string;
  _id: string;
}

const CreateTaskForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: Values) => {
    try {
      const payload = {
        task_name: data.task_name,
        description: data.description,
        assigned_user: data.assigned_user,
        priority: data.priority,
      };

      const apiUrlCreateTask = "http://localhost:8000/api/task/create";

      const response = await axios.post(apiUrlCreateTask, payload);
      console.log("Create Task API response:", response);

      setTimeout(() => {
        navigate("/dashboard/task_assign");
      }, 3000);
    } catch (error) {
      console.log("Error in creating task", error);
    }
  };

  const [usersName, setUsersName] = useState<User[]>([]);

  useEffect(() => {
    const getAllUserName = async () => {
      try {
        const apiUrlAllUsersName = "http://localhost:8000/api/admin/all_users";
        const token = localStorage.getItem("token");

        const response = await axios.get(apiUrlAllUsersName, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("All Users Response", response.data.users);

        setUsersName(response.data.users);
      } catch (error) {
        console.log("Error fetching users", error);
      }
    };

    getAllUserName();
  }, []);

  return (
    <div>
      <Formik
        initialValues={{
          description: "",
          task_name: "",
          assigned_user: "",
          priority: "",
          firstName: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2 className="text-foreground text-4xl font-bold text-center">
            Create Task Form
          </h2>

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

            {/* Description */}
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
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm mt-1 absolute"
              />
            </div>

            {/* Assign User */}
            <div className="mb-5 relative">
              <label
                htmlFor="assigned_user"
                className="block text-sm mb-1 font-medium"
              >
                Assign User
              </label>

              <Field
                as="select"
                id="assigned_user"
                name="assigned_user"
                className="w-full border-0 border-b border-black h-[50px] outline-none"
              >
                <option value="">Select User</option>

                {usersName.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.firstName}
                  </option>
                ))}
              </Field>

              <ErrorMessage
                name="assigned_user"
                component="div"
                className="text-red-500 text-sm mt-1 absolute"
              />
            </div>

            {/* Priority */}
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

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Create Task
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateTaskForm;
