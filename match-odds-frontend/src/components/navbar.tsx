import { Link } from "@heroui/link";
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { useLocation } from "react-router-dom";
import { BrandLink } from "@/utils/utils";

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" shouldHideOnScroll>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <BrandLink navs={isHomePage} />
        </NavbarBrand>
        {!isHomePage && (
          <div className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium")}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </div>
        )}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          {!isHomePage && (
            <>
              <Link isExternal href={siteConfig.links.linkedin}>
                <LinkedInIcon />
              </Link>
              <Link isExternal href={siteConfig.links.github}>
                <GithubIcon />
              </Link>
            </>
          )}
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {!isHomePage && (
          <Link isExternal href={siteConfig.links.linkedin}>
            <LinkedInIcon />
          </Link>
        )}
        <ThemeSwitch />
        {!isHomePage && <NavbarMenuToggle />}
      </NavbarContent>

      {!isHomePage && (
        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  href="#"
                  size="lg"
                  color={index === 2 ? "primary" : index === siteConfig.navMenuItems.length - 1 ? "danger" : "foreground"}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      )}
    </HeroUINavbar>
  );
};
