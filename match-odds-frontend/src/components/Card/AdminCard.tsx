import Photo from "../../assets/Images/Admin.png";
import { addToast, Card, CardBody, CardFooter, CardHeader, Image } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedInIcon, MailIcon } from "../Icons/icons";
import { useEffect, useState } from "react";
import { getGreetingAndDate } from "@/utils/utils";
import { iHover } from "@/types";

export const AdminCard = () => {
    const { email, links } = siteConfig;
    const [hovered, setHovered] = useState<iHover>(null);
    const { greeting } = getGreetingAndDate();
    const [navigateTo, setNavigateTo] = useState<string | null>(null);

    useEffect(() => {
        navigateTo ? setTimeout(() => window.open(navigateTo, "_blank"), 1500) : null;
    }, [navigateTo]);

    const infoText: Record<Exclude<iHover, null>, string> = {
        default: greeting,
        email: "Contact me through Mail!",
        github: "Check out my GitHub!",
        linkedin: "Check out my LinkedIn!"
    };

    const handleHover = (key: iHover) => () => setHovered(key);

    const delayedNavigate = (url: string) => () => {
        setHovered(url.includes("github") ? "github" : "linkedin");
        setNavigateTo(url);
    };

    const handleToast = () => {
        navigator.clipboard.writeText(email);
        setHovered("email");
        addToast({ title: "Email Copied Successfully!", color: "secondary" });
    };

    return (
        <Card isFooterBlurred isHoverable isBlurred isPressable>
            <CardHeader className="flex gap-3"> {infoText[hovered ?? "default"]} </CardHeader>
            <CardBody> <Image alt="Image" height={350} radius="sm" src={Photo} /> </CardBody>
            <CardFooter className="justify-between border-white/20 border-1 overflow-hidden py-1 absolute rounded-small bottom-3 w-[calc(100%_-_24px)] shadow-small ml-3 z-10">
                <button onMouseEnter={handleHover("email")} onMouseLeave={handleHover(null)} onClick={handleToast}>
                    <MailIcon />
                </button>
                <button onMouseEnter={delayedNavigate(links.github)} onMouseLeave={handleHover(null)}>
                    <GithubIcon />
                </button>
                <button onMouseEnter={delayedNavigate(links.linkedin)} onMouseLeave={handleHover(null)}>
                    <LinkedInIcon />
                </button>
            </CardFooter>
        </Card>
    );
};
