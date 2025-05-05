import DefaultLayout from "@/layouts/default";
import { ShowIcon, StartIcon } from "@/components/icons";
import { Link } from "@heroui/link";
import { button } from "@heroui/theme";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useRef } from "react";
import { ProjectInfo } from "@/config/info";
import Info from "@/components/Info/Info";
import { hoverOff, hoverOn } from "@/utils/utils";

export default function HomePage() {
    const iconRef = useRef<HTMLElement>(null);
    return (
        <DefaultLayout>
            <div className="flex items-center justify-center">
                <Link href="/login"
                    onMouseEnter={() => hoverOn("start-icon")}
                    onMouseLeave={() => hoverOff("start-icon")}
                    className={button({ radius: "full", variant: "flat", color: "secondary" })}
                >
                    Get Started <StartIcon id="start-icon" ref={iconRef} />
                </Link>
            </div>
            <Accordion isCompact variant="light">
                {ProjectInfo.map(({ title, subtitle, description }, index) => (
                    <AccordionItem key={index} aria-label={title} title={title} subtitle={subtitle} startContent={<ShowIcon />}>
                        <p className="text-center text-sm"> {description} </p>
                    </AccordionItem>
                ))}
            </Accordion>
            <Info />
        </DefaultLayout>
    );
};
