import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { useTheme } from "@heroui/use-theme";
import backgroundDark from "../../assets/backgroundDark.png";
import backgroundLight from "../../assets/backgroundLight.png";
import { BrandName, hoverOff, hoverOn } from "@/utils/utils";
import { iAuthLayout } from "@/interfaces/interfaces";

const AuthLayout = ({ children }: iAuthLayout) => {
  const location = useLocation();
  const { pathname: path } = location;
  const isLogin = path === "/login";
  const isSignup = path === "/signup";
  const { theme } = useTheme();

  const backgroundStyle = {
    backgroundImage: `url(${theme === "dark" ? backgroundDark : backgroundLight})`
  };

  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2" onMouseEnter={() => hoverOn('brand-icon')} onMouseLeave={() => hoverOff('brand-icon')}>
            <BrandName />
          </div>
          <ThemeSwitch />
        </div>
        <div className={`lg:w-[${isSignup ? "100%" : "50%"}] h-3/4 md:h-full flex flex-col justify-center`}>
          <Card shadow="none">
            <CardHeader className="flex-1 flex flex-col items-start">
              <h3 className="text-xl font-semibold"> Welcome to the Portal </h3>
              <p className="text-xs mt-[5px] mb-6"> Kindly provide your credentials to proceed </p>
            </CardHeader>
            <CardBody> {children} </CardBody>
            <CardFooter>
              {isLogin && (
                <p className="text-[13px] mt-3">
                  Don't have an account ? &nbsp;
                  <Link color="secondary" className="font-medium" href="/signup">
                    Sign up
                  </Link>
                </p>
              )}
              {isSignup && (
                <p className="text-[13px] mt-3">
                  Already have an account ? &nbsp;
                  <Link color="secondary" className="font-medium" href="/login">
                    Login
                  </Link>
                </p>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="md:flex w-[40vw] h-screen justify-center bg-cover overflow-hidden p-8" style={backgroundStyle} />
    </div>
  );
};

export default AuthLayout;
