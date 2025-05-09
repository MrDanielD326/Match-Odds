import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type iconHover = string | HTMLElement | null;

export type iHover = "default" | "email" | "github" | "linkedin" | null;
