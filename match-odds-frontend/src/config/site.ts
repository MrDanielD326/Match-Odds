export type SiteConfig = typeof siteConfig;

const navList = [
    { label: "Docs", href: "/docs" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" }
];

export const siteConfig = {
    creator: 'Daniel\u00A0D',
    email: "daniel.elohi326@gmail.com",
    brandName: "Match Odds",
    description: "Real-time betting platform featuring live cricket updates, secure bet placement, and personalized notifications for seamless transactions.",
    notice: "Notice: This application is a demonstration prototype and is not intended for public deployment or use.",
    desktopNav: navList,
    mobileNav: [...navList, { label: "Logout", href: "/login" }],
    links: {
        github: "https://github.com/MrDanielD326/",
        linkedin: "https://www.linkedin.com/in/danield326/"
    }
};
