import { FC, useState, useEffect, useCallback } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useSwitch } from "@heroui/switch";
import clsx from "clsx";
import { useTheme } from "@heroui/use-theme";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import { useLocation } from "react-router-dom";
import { iThemes } from "@/interfaces/interfaces";

export const ThemeSwitch: FC<iThemes> = ({ className, classNames }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    localStorage.getItem('theme') === null && localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    (location.pathname === "/login" || location.pathname === "/signup") &&
      window.location.reload();
  }, [theme, setTheme, location.pathname]);

  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch({
    isSelected: theme === "light",
    onChange: toggleTheme
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { e.key.toLowerCase() === "~" && toggleTheme() };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTheme]);

  const appTheme = () => (
    <Component
      aria-label={isSelected ? "Switch to dark mode" : "Switch to light mode"}
      {...getBaseProps({
        className: clsx(className, classNames?.base, "px-px transition-opacity hover:opacity-80 cursor-pointer")
      })}
    >
      <VisuallyHidden> <input {...getInputProps()} /> </VisuallyHidden>
      <div {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(classNames?.wrapper, [
            "w-auto h-auto",
            "bg-transparent",
            "rounded-lg",
            "flex items-center justify-center",
            "group-data-[selected=true]:bg-transparent",
            "!text-default-500",
            "pt-px",
            "px-0",
            "mx-0"
          ],
)
        })}
      >
        {isSelected ? <MoonFilledIcon /> : <SunFilledIcon />}
      </div>
    </Component>
  );

  return isMounted ? appTheme() : <div className="w-6 h-6" />;
};
