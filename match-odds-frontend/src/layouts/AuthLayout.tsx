import { ThemeSwitch } from "@/components/Themes/ThemeSwitch";
import { iAuthLayout } from "@/interfaces/interfaces";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { useLocation, useNavigate } from "react-router-dom";
import bgImage from "../assets/Images/background.png";

const AuthLayout = ({ children }: iAuthLayout) => {
  const navigate = useNavigate();
  const { pathname: path } = useLocation();
  const background = { backgroundImage: `url(${bgImage})`, backgroundSize: "100% 100%" };
  const theme = () => (<ThemeSwitch className="absolute right-3" />);

  const options = [
    { loc: path === "/login", message: "Don't have an account? ", buttonText: "Sign up", nav: "/signup" },
    { loc: path === "/signup", message: "Already have an account? ", buttonText: "Login", nav: "/login" },
  ];

  return (
    <div className="fixed inset-0 w-full h-full bg-no-repeat bg-center bg-black/60 flex items-center justify-center px-4 sm:px-6" style={background}>
      <Card isBlurred shadow="none" className="w-full sm:max-w-2xl border-none bg-background/60 dark:bg-default-100/50">
        <CardHeader className="flex-1 flex flex-col items-start">
          <h3 className="text-xl font-semibold"> Welcome to the Portal </h3>
          {theme()}
          <p className="text-xs mt-[5px] mb-6"> Kindly provide your credentials to proceed </p>
        </CardHeader>
        <CardBody> {children} </CardBody>
        <CardFooter>
          {options.map(({ loc, message, buttonText, nav }) => loc && (
            <p key={nav} className="text-[15px]">
              {message}
              <button onClick={() => navigate(nav)} className="text-secondary font-bold"> {buttonText} </button>
            </p>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthLayout;
