import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import GamesLibraryCard from "@/components/games-library-card";
import { categories } from "@/data/categories";
import { getGames } from "@/data/games";
import { generateAlternates } from "@/lib/utils";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "games" });

  return {
    title: { absolute: "Üns Oýunlary" },
    description: t("metaDescription"),
    keywords: t("metaKeywords").split(",").map((keyword) => keyword.trim()),
    openGraph: {
      title: "Üns Oýunlary",
      description: t("ogDescription"),
    },
    alternates: generateAlternates(locale),
  };
}

function gameTitleKey(id: string) {
  return id
    .replace(/-([a-z])/g, (_, char: string) => char.toUpperCase())
    .replace(/-/g, "");
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "games" });
  const categoryT = await getTranslations({ locale, namespace: "categories.categoryNames" });
  const categoryById = new Map(categories.map((category) => [category.id, category]));
  const games = getGames();

  return (
    <div className="mx-auto max-w-[1600px]">
      <header className="px-2 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-10">
        <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          {t("heading")}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {t("description")}
        </p>
      </header>

      <section className="px-2 sm:px-6 lg:px-10" aria-labelledby="all-games-title">
        <div className="mb-7">
          <p className="mb-2 text-sm text-muted-foreground">
            {t("library.count", { count: games.length })}
          </p>
          <h2 id="all-games-title" className="text-3xl font-semibold tracking-tight">
            {t("library.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {games.map((game) => {
            const titleKey = gameTitleKey(game.id);
            const primaryCategory = game.categories
              .map((categoryId) => categoryById.get(categoryId))
              .find(Boolean);

            return (
              <GamesLibraryCard
                key={game.id}
                game={game}
                title={t(`${titleKey}.title`)}
                description={t(`${titleKey}.description`)}
                category={primaryCategory ? categoryT(primaryCategory.slug) : undefined}
                playLabel={t("play")}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
