// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://madmti.github.io/",
    compressHTML: true,
    build: {
        inlineStylesheets: "auto",
    },
    vite: {
        plugins: [tailwindcss()],
        build: {
            cssCodeSplit: true,
        },
    },
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false,
        },
    },
});
