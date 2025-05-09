import { SwitchProps } from "@heroui/switch";
import { MotionProps } from "framer-motion";
import { ReactNode } from "react";

export interface iAuthLayout {
    children: ReactNode;
}

export interface iSmooth extends MotionProps {
    children: ReactNode;
}

export interface iThemes {
    className?: string;
    classNames?: SwitchProps["classNames"];
}

export interface iProfilePic {
    image: File | null;
    setImage: (image: File | null) => void;
}

export interface iGreetingAndDate {
    greeting: string;
    formattedDate: string;
}