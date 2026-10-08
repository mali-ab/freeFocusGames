import { MetadataRoute } from "next";

import { games } from "../data/games";
import { CONTENT_LAST_UPDATED_DATE, SITE_BASE_URL } from "@/lib/site-constants";

const LOCALES = ["en", "tk", "ru"];

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) => {
    const localePrefix = locale === "tk" ? "" : `/${locale}`;

    return [
      {
        url: `${SITE_BASE_URL}${localePrefix}`,
        lastModified: CONTENT_LAST_UPDATED_DATE,
        changeFrequency: "weekly" as const,
        priority: 1,
      },
      ...games.map((game) => ({
        url: `${SITE_BASE_URL}${localePrefix}/${game.slug}`,
        lastModified: CONTENT_LAST_UPDATED_DATE,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })),
    ];
  });
}
