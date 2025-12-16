import messages from "@/utils/message";
import DashboardTopHead from "../Dashboard/DashboardTopHead";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const AssignedList = () => {
  // const { id } = useParams<{ id: string }>();
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const [isUserData, setIsUserData] = useState<any[]>([]);

  const handleSubmit = () => {
    setIsPopUp(true); // Always open when clicking a card
  };

  const closePopup = () => {
    setIsPopUp(false);
  };

useEffect(() => {

  const taskDetails = async () => {
    try {
      const taskApiAll = 'http://localhost:8000/api/task/user-tasks'
      const token = localStorage.getItem("token");

      const response = await axios.get(taskApiAll,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Tasks Response:", response.data.tasks);
      
      // store only tasks
      setIsUserData(response.data.tasks);

    } catch (error) {    
      console.log("User Tasks API error:", error);
    }
  };

  taskDetails();
}, []);


  return (
    <div>
      <DashboardTopHead tabName={messages.AssignedTasks} buttonName="Edit" />

      <div className="flex gap-[15px] items-baseline p-5">
        {isUserData.map((item, index)=>(
           <div
          className="p-3 shadow flex gap-[15px] items-baseline cursor-pointer"
          onClick={handleSubmit} key={index}
        >
          <div className="rounded-full overflow-hidden bg-[#f3f3f3]">
            <img src="" alt="" className="w-[30px] h-[30px] border-0" />
          </div>
          <div>
            <p>{item.task_name}</p>            
            <p>{item.assigned_user}</p>
          </div>
        </div>
        ))

        }
       

       
      </div>

      {/* Popup */}
      {isPopUp && (
        <div
          className="fixed top-0 left-0 w-full h-screen z-[999] bg-[#0000004f] flex justify-center items-center"
          onClick={closePopup} // Close when clicking outside
        >
          <div
            className="bg-white p-5 rounded-md shadow"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside popup
          >
            popup content
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignedList;
