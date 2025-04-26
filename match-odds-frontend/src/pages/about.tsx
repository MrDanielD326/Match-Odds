import { Link } from "@heroui/link";
import { button } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import Info from "@/components/Info/info";

export default function DocsPage() {
  const buttonData = [
    { href: siteConfig.links.linkedin, text: "LinkedIn", icon: <LinkedInIcon /> },
    { href: siteConfig.links.github, text: "GitHub", icon: <GithubIcon /> }
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}> {siteConfig.name} - </span>
          <span className={title({ color: "primary" })}> {siteConfig.creator} </span>
          <br />
          <div className={subtitle({ class: "mt-4" })}> {siteConfig.description} </div>
        </div>
        <div className="flex gap-3">
          {buttonData.map((link, index) => (
            <Link key={index} isExternal className={button({ radius: "full", variant: "bordered" })} href={link.href}>
              {link.icon} {link.text}
            </Link>
          ))}
        </div>
      </section>
      <Info />
    </DefaultLayout>
  );
}
