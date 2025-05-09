import { GithubIcon, LinkedInIcon } from "@/components/Icons/icons";
import { NavigationBar } from "@/components/Navbar/NavigationBar";
import { siteConfig } from "@/config/site";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

export default function AppLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isPath = location.pathname === '/' || location.pathname === '/about';
  const { notice, links: { github, linkedin } } = siteConfig;

  return (
    <div className="relative flex flex-col h-screen">
      <NavigationBar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-4"> {children} </main>
      <footer className="w-full flex items-center justify-center py-3">
        {isPath ? <p className="text-center text-md text-[#900C3F] font-bold"> {notice} </p> : (
          <div className="flex gap-2">
            <Link to={github}> <GithubIcon /> </Link>
            <Link to={linkedin}> <LinkedInIcon /> </Link>
          </div>
        )}
      </footer>
    </div>
  );
}
