import { BrandIcon, EyeCloseIcon, EyeOpenIcon } from "@/components/icons";
import { useRef, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import backgroundDark from "../assets/backgroundDark.png";
import backgroundLight from "../assets/backgroundLight.png";

type tHover = string | HTMLElement | null;

const hoverIcon = (target: tHover, isHovering: boolean) => (
    (typeof target === "string" ? document.getElementById(target) : target)
        ?.dispatchEvent(new MouseEvent(isHovering ? "mouseenter" : "mouseleave"))
);

export const hoverOn = (target: tHover) => hoverIcon(target, true);
export const hoverOff = (target: tHover) => hoverIcon(target, false);

export const BrandName = () => {
    const iconRef = useRef(null);
    return (
        <Fragment>
            <BrandIcon id="brand-icon" ref={iconRef} />
            <p className="font-bold text-inherit"> MATCH ODDS </p>
        </Fragment>
    )
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

export const BackgroundImage = ({ theme }: { theme: string }) => {
    const image = {
        backgroundImage: `url(${theme === "dark" ? backgroundDark : backgroundLight})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "opacity 0.5s ease-in-out"
    };
    return (
        <div
            key={theme}
            style={image}
            className={`md:flex w-[40vw] h-screen justify-center bg-cover overflow-hidden p-8`}
        />
    );
};

