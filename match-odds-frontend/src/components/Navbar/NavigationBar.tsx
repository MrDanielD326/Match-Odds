import { useState } from "react";
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/Themes/ThemeSwitch";
import { Link, useLocation } from "react-router-dom";
import { BrandLink, LogoutLink } from "@/components/Icons/iconLinks";

export const NavigationBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" shouldHideOnScroll isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <BrandLink navs={isHomePage} />
        </NavbarBrand>
        {!isHomePage && (
          <div className="hidden sm:flex gap-4 justify-start ml-2">
            {siteConfig.desktopNav.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  to={item.href}
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
          <ThemeSwitch />
          {!isHomePage && <LogoutLink />}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {!isHomePage && (
          <>
            <ThemeSwitch />
            <NavbarMenuToggle onClick={() => setIsMenuOpen((prev) => !prev)} />
          </>
        )}
      </NavbarContent>

      {!isHomePage && (
        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.mobileNav.map((item, index) => (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link to={item.href} color={index === siteConfig.mobileNav.length - 1 ? "danger" : "foreground"}>
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
