// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
import bgLogin from "../../assets/Images/image 82.png";
import pageBg from "../../assets/Images/featBg.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/ContextApi/AuthContext";

interface Values {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const {setIsAuthenticated} = useAuth();
// {isAuthenticated, setIsAuthenticated, login,logout

  const handleSubmit = async (data: Values) => {

    try {

      const payload= {
        email:data.email,
        password:data.password,

      }

      const loginAPI = "http://localhost:8000/api/user/login";
      const response = await axios.post(loginAPI,payload);

      console.log("Check Response login API", response);
      
      console.log("getingUserDetails", response.data.token)

      localStorage.setItem("token", response.data.token);

      setIsAuthenticated(true)
      navigate("/dashboard")
    } catch (error) {
      console.log("Not getting Response login API", error);
    } finally {
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
                Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Formik<Values>
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="mb-5 relative">
                    <label
                      htmlFor="firstName"
                      className="block text-sm mb-1 font-medium text-white"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      //  placeholder="First Name"
                      className="w-full border-0 border-b border-white rounded-none h-[50px] text-white shadow-none outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1 absolute"
                    />
                  </div>
                  <div className="mb-5 relative">
                    <label
                      htmlFor="firstName"
                      className="block text-sm mb-1 font-medium text-white"
                    >
                      Password
                    </label>
                    <Field
                    type="password"
                      id="password"
                      name="password"
                      //  placeholder="First Name"
                      className="w-full border-0 border-b border-white rounded-none h-[50px] text-white shadow-none outline-none"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1 absolute"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full m-auto bg-[#191970] h-[63px] rounded-full font-semibold text-[20px] leading-[100%] tracking-[0]"
                  >
                    Login
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

export default LoginForm;
