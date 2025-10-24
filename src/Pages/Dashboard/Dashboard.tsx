import { AppSidebar } from "@/components/app-sidebar";
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
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

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
  }>({});

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

        console.log("profile Response", profileResponse.data.user);
        setUserData(profileResponse.data.user);
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
      console.log("get responseUpdateApi data", responseUpdateApi);
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
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb className="w-full">
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block"></BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="flex items-center justify-between w-full">
                <BreadcrumbPage className="text-4xl font-bold">
                  Profile
                </BreadcrumbPage>
                <div className="flex gap-2">
                  {/* <Button>Save</Button> */}
                  <Button onClick={() => setIsEdit(!isEdit)}>Edit</Button>
                </div>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="">
            <Formik
              enableReinitialize
              initialValues={{
                firstName: isUser?.firstName || " ",
                email: isUser?.email || " ",
                // date_of_birth: isUser?.date_of_birth || " ",
                place: isUser?.place || " ",
                time: "",
                profile: isUser?.profile || images1,
              }}
              initialErrors={{
                error: "",
              }}
              validationSchema={updateProfileSchema}
              onSubmit={handleSubmits}
            >
              {({ setFieldValue, }) => (
                <Form className="grid auto-rows-min gap-4 md:grid-cols-6 h-full items-start w-full max-w-[992px] mx-auto">
                  <div className=" w-full bg-muted/50  rounded-xl rounded-[30px] overflow-hidden col-span-2 row-start-1 row-end-10 relative">
                    {images1 ? (
                      <img src={images1} alt="" />
                    ) : (
                      <>
                        <img src={userProfile} alt="Profile Image" />
                      </>
                    )}

                    {isEdit && (
                      <div className="w-full h-full absolute top-[0px] cursor-pointer ">
                        <Input
                          id="profile"
                          type="file"
                          className="indent-[120%] p-0 border-0 h-full "
                          onChange={handleImageChange}
                          accept="image/png, image/jpg, image/jpeg"
                          name="profile"
                        />
                        <div className="absolute top-[15px] right-[15px] z-10  w-[40px] h-[40px] cursor-pointer rounded-full overflow-hidden pointer-events-none  bg-white">
                          <Edit2Icon className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  w-[40px0] h-[40px] " />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="bg-muted/50  rounded-xl p-6  col-span-2">
                    <Label className="font-bold mb-2">Name</Label>
                    {!isEdit ? (
                      <>{isUser.firstName}</>
                    ) : (
                      <>
                        <Field
                          type="text"
                          id="firstName"
                          name="firstName"
                          className={`${
                            isEdit
                              ? "px-5 w-full border-0 border-b border-white rounded-none h-[50px] text-black shadow-none outline-none bg-white "
                              : " px-5 w-full border-0 border-b border-white rounded-none h-[50px] text-black shadow-none outline-none pointer-events-none text-black "
                          }`}
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-red-500 text-sm mt-1 absolute"
                        />
                      </>
                    )}

                    <p></p>
                  </div>
                  <div className="bg-muted/50  rounded-xl p-6  col-span-2">
                    <Label className="font-bold mb-2">Email</Label>
                    {!isEdit ? (
                      <>{isUser.email}</>
                    ) : (
                      <>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className={`${
                            isEdit
                              ? "px-5 w-full border-0 border-b border-white rounded-none h-[50px] text-black shadow-none outline-none bg-white "
                              : " px-5 w-full border-0 border-b border-white rounded-none h-[50px] text-black shadow-none outline-none pointer-events-none text-black "
                          }`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm mt-1 absolute"
                        />
                      </>
                    )}
                  </div>
                  <div className="bg-muted/50  rounded-xl p-6  col-span-2">
                    <Label className="font-bold mb-2">Place</Label>
                    {!isEdit ? (
                      <>{isUser.place}</>
                    ) : (
                      <>
                        <Select
                          name="place"
                          onValueChange={(value) =>
                            setFieldValue("place", value)
                          }
                          // value={values.place}
                        >
                          <SelectTrigger
                            className={`${
                              isEdit
                                ? "w-full border-0 shadow-none !px-0 "
                                : "w-full border-0 shadow-none !px-0 pointer-events-none"
                            }`}
                          >
                            <SelectValue placeholder={isUser.place} />
                          </SelectTrigger>
                          <SelectContent>
                            {places.map((item, index) => {
                              return (
                                <SelectItem key={index} value={item.name}>
                                  {!isEdit ? (
                                    <>{isUser.place}</>
                                  ) : (
                                    <>{item.name}</>
                                  )}
                                </SelectItem>
                              );
                            })}
                            :
                          </SelectContent>
                          <ErrorMessage
                            name="place"
                            component="div"
                            className="text-red-500 text-sm mt-1 absolute"
                          />
                        </Select>
                      </>
                    )}

                    <ErrorMessage
                      name="place"
                      component="div"
                      className="text-red-500 text-sm mt-1 absolute"
                    />
                  </div>
                  <div className="bg-muted/50  rounded-xl p-6  col-span-2 ">
                    <Label className="font-bold mb-2">Date Of Birth</Label>
                    <div
                      className={`${
                        isEdit ? "bg-[#ddd]" : " bg-[#ddd] pointer-events-none"
                      }`}
                    >
                      <DatePicker
                        type="date"
                        name="date_of_birth"
                        // value={values.date_of_birth}
                        onChange={(e: any) =>
                          setFieldValue("date_of_birth", e.target.value)
                        }
                        className="datePickerClass !bg-[#ddd]"
                      />

                      <ErrorMessage
                        name="date_of_birth"
                        component="div"
                        className="text-red-500 text-sm mt-1 absolute"
                      />
                    </div>
                  </div>
                  <div className="bg-muted/50  rounded-xl p-6  col-span-2">
                    <Label className="font-bold mb-2">Time</Label>
                    {!isEdit ? (
                      <>{isUser.time}</>
                    ) : (
                      <>
                        <Field
                          type="time"
                          name="time"
                          // value={values.time}
                          onChange={(e: any) =>
                            setFieldValue("time", e.target.value)
                          }
                          id="time"
                          className={`${
                            isEdit
                              ? "px-5 w-full border-0 border-b border-white rounded-none   h-[50px] text-black shadow-none outline-none bg-white "
                              : " px-5 w-full border-0 border-b border-white rounded-none bg-[#ddd] h-[50px] text-black shadow-none outline-none pointer-events-none text-black "
                          }`}
                        />
                        <ErrorMessage
                          name="time"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </>
                    )}
                  </div>
                  {isEdit && (
                    <div className="col-span-4 text-right ">
                      <Button type="submit">Save</Button>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
