export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  creator: "Daniel D",
  name: "Match Odds",
  description: "Real-time betting platform featuring live cricket updates, secure bet placement, and personalized notifications for seamless transactions.",
  navItems: [
    { label: "Docs", href: "/docs" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" }
  ],
  navMenuItems: [
    { label: "Profile", href: "/profile" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Calendar", href: "/calendar" },
    { label: "Settings", href: "/settings" },
    { label: "Help & Feedback", href: "/help-feedback" },
    { label: "Logout", href: "/logout" }
  ],
  links: {
    github: "https://github.com/MrDanielD326/",
    linkedin: "https://www.linkedin.com/in/daniel-d-b1440b23b/"
  }
};
