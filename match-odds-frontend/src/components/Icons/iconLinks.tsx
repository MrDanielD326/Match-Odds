import { BrandIcon, EyeCloseIcon, EyeOpenIcon, LogoutIcon } from "@/components/Icons/icons";
import { useRef, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { iIconHover } from "@/types";
import { siteConfig } from "@/config/site";
import { useNavigate } from "react-router-dom";

const hoverIcon = (target: iIconHover, isHovering: boolean) => (
    (typeof target === "string" ? document.getElementById(target) : target)
        ?.dispatchEvent(new MouseEvent(isHovering ? "mouseenter" : "mouseleave"))
);

export const hoverOn = (target: iIconHover) => hoverIcon(target, true);
export const hoverOff = (target: iIconHover) => hoverIcon(target, false);

export const BrandName = () => {
    const iconRef = useRef(null);
    return (
        <Fragment>
            <BrandIcon id="brand-icon" ref={iconRef} />
            <p className="font-bold text-inherit"> {siteConfig.brandName.toUpperCase()} </p>
        </Fragment>
    )
};

export const BrandLink = ({ navs }: { navs: boolean }) => {
    const common = {
        className: "flex justify-start items-center gap-1",
        onMouseEnter: () => hoverOn("brand-icon"),
        onMouseLeave: () => hoverOff("brand-icon")
    };
    return navs ? <div {...common}> <BrandName /> </div> : <Link color="foreground" to="/home" {...common}> <BrandName /> </Link>;
};

export default function usePasswordVisibility() {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => setIsVisible((prev) => !prev);

    const VisibilityToggle = (
        <button aria-label="toggle password visibility" className="focus:outline-none" type="button" onClick={handleToggle}>
            {isVisible ? <EyeCloseIcon /> : <EyeOpenIcon />}
        </button>
    );

    return { isVisible, VisibilityToggle };
};

export const LogoutLink = () => {
    const navigation = useNavigate();
    const handleLogout = () => navigation('/login');
    return <button onClick={handleLogout}> <LogoutIcon /> </button>
};
