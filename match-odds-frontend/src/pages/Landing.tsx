import { hoverOff, hoverOn } from "@/components/Icons/iconLinks";
import { IntroIcon, StartIcon } from "@/components/Icons/icons";
import { ProjectInfo } from "@/config/info";
import AppLayout from "@/layouts/AppLayout";
import { Button } from "@heroui/button";
import { Accordion, AccordionItem } from "@heroui/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const iconRef = useRef<HTMLElement>(null);
    const [showIntroIcon, setShowIntroIcon] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        setShowIntroIcon(true);
        setTimeout(() => {
            setShowIntroIcon(false);
            navigate('/login');
        }, 1650);
    };

    const icon = () => (<div className="flex items-center justify-center"> <IntroIcon /> </div>);

    const landingPageData = () => (
        <>
            <div className="flex items-center justify-center flex-col">
                <p className="text-center text-lg mb-6">
                    Dive into the world of real-time cricket betting with our cutting-edge API.
                    Build your strategy, place bets, and track live odds seamlessly.
                </p>
                <Button
                    color="secondary"
                    radius="full"
                    variant="flat"
                    endContent={<StartIcon id="start-icon" ref={iconRef} />}
                    onPress={handleNavigate}
                    onMouseEnter={() => hoverOn("start-icon")}
                    onMouseLeave={() => hoverOff("start-icon")}
                    className="shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                    Get Started
                </Button>
            </div>
            <br />
            <Accordion isCompact variant="light">
                {ProjectInfo.map(({ title, subtitle, description, icon }, index) => (
                    <AccordionItem key={index} aria-label={title} title={title} subtitle={subtitle} startContent={icon}>
                        <p className="text-center text-sm"> {description} </p>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );

    return <AppLayout> {showIntroIcon ? icon() : landingPageData()} </AppLayout>;
};
