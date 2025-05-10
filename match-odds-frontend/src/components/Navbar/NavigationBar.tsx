import { siteConfig } from "@/config/site";
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrandLink, LogoutLink } from "../Icons/iconLinks";
import { ThemeSwitch } from "../Themes/ThemeSwitch";

export const NavigationBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopMenuItems = () => !isHomePage && siteConfig.desktopNav.map((item) => {
    const { label, href } = item;
    return (
      <ul className="hidden sm:flex gap-4 justify-start ml-2">
        <NavbarItem key={href} as="li">
          <Link to={href} color="foreground"> {label} </Link>
        </NavbarItem>
      </ul>
    )
  });

  const mobileMenuItems = () => !isHomePage && siteConfig.mobileNav.map((item, index) => {
    const { label, href } = item;
    return (
      <NavbarMenu>
        <ul className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem key={`${label}-${index}`} as="li">
            <Link to={href} color={index === siteConfig.mobileNav.length - 1 ? "danger" : "foreground"}>
              {label}
            </Link>
          </NavbarMenuItem>
        </ul>
      </NavbarMenu>
    )
  });

  return (
    <Nav maxWidth="xl" position="sticky" shouldHideOnScroll isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit"> <BrandLink navs={isHomePage} /> </NavbarBrand>
        {desktopMenuItems()}
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

      {mobileMenuItems()}
    </Nav>
  );
};
