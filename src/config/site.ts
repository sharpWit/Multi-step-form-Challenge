type SiteConfig = {
  name: string;
  description: string;
  url: string;
};

export const siteConfig: SiteConfig = {
  name: "Multi Steps Form",
  description:
    "A multi-step form solution for FrontendMentor using Nextjs 15, TS, TailwindCSS",
  url: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
};
