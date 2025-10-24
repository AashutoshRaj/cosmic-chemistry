import bgLogin from "../../assets/Images/image 82.png";
import pageBg from "../../assets/Images/featBg.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Formik, Field, Form, type FormikHelpers, ErrorMessage } from "formik";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Values {
  firstName: string;
  email: string;
  password: string;
  confirm: string;
  // date: string;
  // ErrorMessage: any;
}

interface Error {
  ErrorMessage: string;
}

const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(13, "Max length should be 13")
    .required("This field is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("This field is required"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Must match password field value")
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  // date: Yup.string()
  //   .required("This field is required"),
});

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleSubmit = async (data: any) => {
    try {
      const payload = {
        firstName: data.firstName,
        email: data.email,
        password: data.password,
        confirm_password: data.confirm,
      };

      const apiURL = "http://localhost:8000/api/user/register";

      const response = await axios.post(apiURL, payload);
      console.log("Getting API response:", response);
      navigate("/login");
    } catch (error) {
      console.log("Register API not working", error);
    }
  };

  return (
    <div className=" bg-[#000000]">
      <div
        className=" min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${pageBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
          <Card className="bg-[rgb(10,6,29)] bg-opacity-80 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-center text-4xl text-white">
                Create Account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Formik
                initialValues={{
                  firstName: "",
                  email: "",
                  password: "",
                  confirm: "",
                  // date: "",
                }}
                initialErrors={{
                  error: "",
                }}
                validationSchema={signUpSchema}
                onSubmit={handleSubmit}
                // onSubmit={(
                //   values: Values,
                //   { setSubmitting }: FormikHelpers<Values>
                // ) => {
                //   setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                //   }, 500);
                // }}
              >
                <Form>
                  <div className="mb-5 relative">
                    <label
                      htmlFor="firstName"
                      className="block text-sm mb-1 font-medium text-white"
                    >
                      First Name
                    </label>
                    <Field
                      id="firstName"
                      name="firstName"
                      //  placeholder="First Name"
                      className="w-full border-0 border-b border-white rounded-none h-[50px] text-white shadow-none outline-none"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm mt-1 absolute"
                    />
                  </div>

                  <div className="mb-5 relative">
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-white"
                    >
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      // placeholder="Email"
                      type="email"
                      className="w-full border-0 border-b border-white rounded-none h-[50px] text-white shadow-none outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1 absolute"
                    />
                  </div>
                  <div className="mb-5 relative">
                  <div className="mb-5 relative">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-1 font-medium text-white"
                    >
                      Password
                    </label>
                    <div className="relative">

                    <Field
                      id="password"
                      name="password"
                      // placeholder="Email"
                      type={isShow ? "text" : "password"}
                      className="w-full border-0 border-b border-white rounded-none h-[50px] text-white shadow-none outline-none"
                    />
                       <button className="absolute top-0 right-0 text-white bg-transparent" type="button" onClick={() => setIsShow(prev => !prev)}>
                      {!isShow ? (<>Show</>) : (<>Hide</>)}
                    </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1 absolute"
                    />
                   
                  </div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-white"
                    >
                      Confirm Password
                    </label>
                    <Field
                      id="password"
                      name="confirm"
                      // placeholder="Email"
                      type="password"
                      className="w-full border-0 border-b border-white rounded-none h-[50px] text-white shadow-none outline-none"
                    />
                    <ErrorMessage
                      name="confirm"
                      component="div"
                      className="text-red-500 text-sm mt-1 absolute"
                    />
                  </div>
                  <div className="mb-5 relative">
                    <label
                      htmlFor="email"
                      className="block text-sm mb-1 font-medium text-white"
                    >
                      Date Of Birth
                    </label>
                    <DatePicker />
                    {/* <ErrorMessage
                      name="date"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    /> */}
                  </div>
                  <Button
                    type="submit"
                    className="w-full m-auto bg-[#191970] h-[63px] rounded-full font-semibold text-[20px] leading-[100%] tracking-[0]"
                  >
                    Sign Up
                  </Button>
                </Form>
              </Formik>
            </CardContent>
          </Card>
        </div>
        <div
          className="h-screen absolute max-w-[800px] w-full"
          style={{
            backgroundImage: `url(${bgLogin})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SignUp;
