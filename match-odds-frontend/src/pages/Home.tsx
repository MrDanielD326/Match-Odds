import DefaultLayout from "@/layouts/default";
import { CheckIcon, ShowIcon, StartIcon } from "@/components/icons";
import { Link } from "@heroui/link";
import { button } from "@heroui/theme";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useRef } from "react";
import { ProjectInfo } from "@/config/info";
import Info from "@/components/Info/info";

export default function HomePage() {
    const iconRef = useRef<HTMLElement>(null);
    const mouse = (type: string) => iconRef.current?.dispatchEvent(new MouseEvent(type));
    const handleEnter = () => mouse('mouseenter');
    const handleLeave = () => mouse('mouseleave');

    return (
        <DefaultLayout>
            <div className="flex items-center justify-center">
                <Link href="/login" onMouseEnter={handleEnter} onMouseLeave={handleLeave}
                    className={button({ radius: "full", variant: "flat", color: "secondary" })}
                >
                    Get Started <StartIcon id="start-icon" ref={iconRef} />
                </Link>
            </div>
            <Accordion variant="light" >
                {ProjectInfo.map(({ title, subtitle, description }, index) => (
                    <AccordionItem
                        key={index} aria-label={title} title={title} subtitle={subtitle}
                        startContent={<ShowIcon />} indicator={<CheckIcon />}
                    >
                        <p className="text-center text-sm"> {description} </p>
                    </AccordionItem>
                ))}
            </Accordion>
            <Info />
        </DefaultLayout>
    );
};
