import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ["en", "tk", "ru"],

    // Used when no locale matches
    defaultLocale: "tk",

    // Default locale doesn't need prefix
    localePrefix: "as-needed",
});
