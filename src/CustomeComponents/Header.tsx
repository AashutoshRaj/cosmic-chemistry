import { Link, useNavigate } from "react-router-dom";
import loginIcon from "../assets/Images/login.png";
import signUpIcon from "../assets/Images/signup.png";
import { useAuth } from "@/ContextApi/AuthContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const logoutFun = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-[#210226] py-[24px] px-[133px] flex flex-row  justify-between items-center ">
      <Link
        to="/"
        className="!text-white text-left flex items-center justify-start gap-2 font-bold block capitalize text-white text-4xl font-bold m-0"
      >
        cosmic chemistry
      </Link>
      <ul className="flex flex-wrap justify-end gap-8 flex-1 items-center">
        <li>
          <Link
            to="/"
            className="!text-white text-center flex items-center justify-center gap-2"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className="!text-white text-center flex items-center justify-center gap-2"
          >
            Get Started
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="!text-white text-center flex items-center justify-center gap-2"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="/matches"
            className="!text-white text-center flex items-center justify-center gap-2"
          >
            Matches
          </Link>
        </li>



        {isAuthenticated ? (
          <>
              <li>
              <Link
                to="/dashboard"
                className="!text-white text-center flex items-center justify-center gap-2"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Button
                onClick={logoutFun}
                className=" !text-white border-[1px] border-solid border-[#ffffff] w-[150px] bg-transparent hover:bg-[#191970] block h-[63px] rounded-full font-semibold text-[20px] leading-[100%] tracking-[0] flex items-center justify-center"
              >
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className=" !text-white border-[1px] border-solid border-[#ffffff] w-[150px] bg-transparent hover:bg-[#191970] block h-[63px] rounded-full font-semibold text-[20px] leading-[100%] tracking-[0] flex items-center justify-center"
              >
                <img src={loginIcon} alt="loginIcon" className="mr-2" /> Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="!text-white border-[1px] border-solid border-[#ffffff] w-[150px] bg-transparent hover:bg-[#191970] block h-[63px] rounded-full font-semibold text-[20px] leading-[100%] tracking-[0] flex items-center justify-center"
              >
                <img src={signUpIcon} alt="loginIcon" className="mr-2" />{" "}
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
