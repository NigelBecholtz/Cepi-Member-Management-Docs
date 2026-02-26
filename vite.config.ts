/**
 * Vite config for GitHub Pages deployment.
 * BASE_PATH is set in the deploy workflow (e.g. /Cepi-Member-Management-Docs).
 * Assets must be served from the repo subpath for styling/JS to load correctly.
 */
const basePath = process.env.BASE_PATH || "";
const base = basePath ? `${basePath}/` : "/";

/** @type {import('vite').UserConfig} */
export default {
  base,
};
