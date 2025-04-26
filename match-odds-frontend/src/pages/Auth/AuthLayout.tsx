import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { BrandIcon } from "@/components/icons";
import background from "../../assets/background.png";
import { ThemeSwitch } from "@/components/theme-switch";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    const location = useLocation();
    const isSignup = location.pathname === "/signup";

    return (
        <div className="flex">
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                        <BrandIcon />
                        <p className="font-bold text-inherit"> MATCH ODDS </p>
                    </div>
                    <ThemeSwitch />
                </div>
                <div
                    className={`lg:w-[${isSignup ? "100%" : "50%"}] h-3/4 md:h-full flex flex-col justify-center`}
                >
                    <h3 className='text-xl font-semibold'> Welcome to the Portal </h3>
                    <p className='text-xs mt-[5px] mb-6'> Please enter your details </p>
                    {children}
                </div>
            </div>
            <div
                className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-cover bg-no-repeat bg-center overflow-hidden p-8"
                style={{ backgroundImage: `url(${background})` }}
            />
        </div>
    );
};

export default AuthLayout;
