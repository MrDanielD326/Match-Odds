import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { useTheme } from "@heroui/use-theme";
import { BackgroundImage, BrandName, hoverOff, hoverOn } from "@/utils/utils";
import { iAuthLayout } from "@/interfaces/interfaces";

const AuthLayout = ({ children }: iAuthLayout) => {
  const location = useLocation();
  const { pathname: path } = location;
  const loginPage = path === "/login";
  const signupPage = path === "/signup";
  const { theme } = useTheme();

  const authNavigate = () => {
    const authPages = [
      { page: loginPage, text: "Don't have an account ?", linkText: "Sign up", href: "/signup" },
      { page: signupPage, text: "Already have an account ?", linkText: "Login", href: "/login" }
    ];
    return authPages.filter(item => item.page).map(({ text, linkText, href }, index) => (
      <p key={index} className="text-[13px] mt-3">
        {text} &nbsp; <Link color="secondary" className="font-medium" href={href}> {linkText} </Link>
      </p>
    ))
  };

  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2" onMouseEnter={() => hoverOn("brand-icon")} onMouseLeave={() => hoverOff("brand-icon")}>
            <BrandName />
          </div>
          <ThemeSwitch />
        </div>
        <div className={`lg:w-[${signupPage ? "100%" : "50%"}] h-3/4 md:h-full flex flex-col justify-center`}>
          <Card shadow="none">
            <CardHeader className="flex-1 flex flex-col items-start">
              <h3 className="text-xl font-semibold"> Welcome to the Portal </h3>
              <p className="text-xs mt-[5px] mb-6"> Kindly provide your credentials to proceed </p>
            </CardHeader>
            <CardBody> {children} </CardBody>
            <CardFooter> {authNavigate()} </CardFooter>
          </Card>
        </div>
      </div>
      <BackgroundImage theme={theme} />
    </div>
  );
};

export default AuthLayout;
