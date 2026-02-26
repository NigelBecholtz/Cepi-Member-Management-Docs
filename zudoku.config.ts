import type { ZudokuConfig } from "zudoku";

// For GitHub Pages: set BASE_PATH to repo name (e.g. /Cepi-Docs) when deploying
const basePath = process.env.BASE_PATH || "";
const p = (path: string) => (basePath ? `${basePath}${path}` : path);

const config: ZudokuConfig = {
  ...(basePath && { basePath }),
  site: {
    title: "CEPI Member Management API",
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "CEPI",
      width: 130,
    },
    footer: {
      position: "center",
      columns: [
        {
          title: "Documentation",
          links: [
            { label: "Introduction", href: p("/documentation/introduction") },
            { label: "Authentication", href: p("/documentation/authentication") },
            { label: "Logins", href: p("/documentation/logins") },
            { label: "API Reference", href: p("/api/cepi") },
          ],
        },
        {
          title: "Project",
          links: [
            { label: "Overview", href: p("/project/overview") },
            { label: "Components", href: p("/project/services") },
            { label: "Logins", href: p("/documentation/logins") },
          ],
        },
        {
          title: "Powered by",
          links: [
            { label: "Zudoku", href: "https://zudoku.dev" },
          ],
        },
      ],
      copyright: `Powered by Zudoku · © ${new Date().getFullYear()} CEPI`,
    },
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      link: "documentation/introduction",
      items: [
        {
          type: "category",
          label: "Getting started",
          items: ["documentation/introduction", "documentation/authentication", "documentation/logins"],
        },
        {
          type: "category",
          label: "API Reference",
          items: ["documentation/check-member", "documentation/error-handling", "documentation/rate-limits"],
        },
      ],
    },
    {
      type: "link",
      to: p("/api/cepi"),
      label: "API Reference",
    },
    {
      type: "category",
      label: "Project",
      link: "project/overview",
      items: [
        {
          type: "category",
          label: "Project Information",
          items: ["project/overview", "project/services", "project/database", "documentation/logins"],
        },
      ],
    },
  ],
  redirects: [{ from: "/", to: basePath ? `${basePath}/documentation/introduction` : "/documentation/introduction" }],
  apis: [
    {
      type: "file",
      input: "./openapi.json",
      path: "api/cepi",
    },
  ],
  docs: {
    files: "/pages/**/*.mdx",
  },
};

export default config;
