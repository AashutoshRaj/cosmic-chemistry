import * as Yup from "yup";
import {
  Breadcrumb,
  BreadcrumbItem,
  // BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";

import userProfile from "./pngtree-user-profile-avatar-png-image_10211467.png";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { DatePicker } from "@/components/ui/date-picker";
import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Edit2Icon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import messages from "@/utils/message";
import { Outlet, useNavigate } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const updateProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(13, "Max length should be 13")
    .required("This field is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),

  time: Yup.string()
    .matches(
      /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      "Enter a valid time (HH:MM format)"
    )
    .required("Time is required"),

  place: Yup.string().required("This field is required"),

  // date_of_birth: Yup.date()
  //     .transform((value, originalValue) =>
  //       originalValue === "" ? null : value
  //     )
  //     .max(new Date(), "Date of birth cannot be in the future")
  //     .required("Date of birth is required"),
});

export default function Page() {
  // const handleSubmit = () => {};

  const [isEdit, setIsEdit] = useState(false);

  const [isUser, setUserData] = useState<{
    firstName?: string;
    email?: string;
    date_of_birth?: string;
    time?: string;
    place?: string;
    profile?: string;
    role_id?: string;
  }>({});

  const editHandleSubmit = () => {
    setIsEdit(true);
  };

  const places = [
    {
      name: "Solan",
    },
    {
      name: "Mohali",
    },
    {
      name: "Chandigarh",
    },
  ];

  const navigate = useNavigate();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        const profileApiUrl = "http://localhost:8000/api/user/profile";

        console.log("check Profile response", profileApiUrl);

        const profileResponse = await axios.get(profileApiUrl, {
          headers: {
            Authorization: `Bearer ${token}`, // send token
          },
        });

        // console.log("profile Response", profileResponse.data.user);

        localStorage.setItem("user", JSON.stringify(profileResponse.data.user));

        console.log(
          "savedDataaaaaaaaaaaaaa",
          JSON.parse(localStorage.getItem("user") as string).profile
        );

        setUserData(profileResponse.data.user);
        setImages1(profileResponse.data.user.profile);
        // console.log(isUser, "sdddsdsd");
        // console.log(setUserData(profileResponse.data.user))
      } catch (error) {
        console.log("Profile data is not getting", error);
      } finally {
      }
    };

    // const updateDetails = async() => {

    // }

    getUserData();
    // updateDetails();
  }, []);

  const handleSubmits = async (values: any) => {
    try {
      const token = localStorage.getItem("token");
      const updateAPi = "http://localhost:8000/api/user/update_user";
      // console.log("update APi Outputa", updateAPi);

      const file = new FormData();
      file.append("firstName", values.firstName);
      file.append("email", values.email);
      file.append("time", values.time);
      file.append("place", values.place);
      file.append("profile", images);
      // if (profileImage) formData.append("profile", profileImage);

      console.log("getting file values", file);
      const responseUpdateApi = await axios.post(updateAPi, file, {
        headers: {
          authorization: `Bearer ${token}`, // send token
          // "Content-Type": "multipart/form-data",
        },
      });

      // ✅ Show success toast
      toast.success(`Data Updated Successfully`, {
        position: "top-right",
        autoClose: 3000,
      });

      console.log("get responseUpdateApi data", responseUpdateApi);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log("Not getting responseUpdateApi data", error);
    } finally {
    }
  };

  const [images, setImages] = useState<string>("");
  const [images1, setImages1] = useState<string>("");

  const handleImageChange = (e: any) => {
    console.log(e.target.files[0]);
    const selectedFile = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    console.log("hello");

    // check the file is of correct type
    if (!allowedTypes.includes(selectedFile.type)) {
      return;
    }
    console.log("hello");
    // check the file size is correct
    const fileSize = selectedFile.size; // Size in bytes
    const maxSize = 5 * 1024 * 1024;

    console.log("hello");

    if (fileSize > maxSize) {
      return;
    }
    console.log("hello");
    // to generate src to show image
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const src = e.target.result;
      console.log(e.target);
      setImages1(src);
    };

    reader.readAsDataURL(selectedFile);
    console.log("hello");
    setImages(selectedFile);
  };

  return (
    <>
      <SidebarProvider>
        {/* <ToastContainer /> */}

        {/* <Outlet /> */}
        <div className="dashboardData  flex w-full items-baseline">
          {/* <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4 max-w-[340px]"
            
          /> */}
          <Sidebar style={{ zIndex: 100 }}>
            <AppSidebar />
          </Sidebar>
          <SidebarInset className=" w-full">
            <div className="">
              <Outlet />

              <div className="adminPanel"></div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
