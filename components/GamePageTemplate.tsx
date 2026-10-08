import React from 'react';
import { GameHeader } from '@/components/GameHeader';
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useTranslations } from 'next-intl';
import type { FormatterType, LeaderboardDetailsType } from '@/components/leaderboard-display';

interface FaqItem {
    question: string;
    answer: React.ReactNode;
}

interface BenefitItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface ScienceInfo {
    title: string;
    description: React.ReactNode;
    blogArticleUrl?: string;
    blogArticleTitle?: string;
    authorityLinks?: {
        title: string;
        url: string;
        description: string;
    }[];
}

interface GamePageTemplateProps {
    gameBackground?: string;
    gameId: string;
    title: string;
    subtitle: string;
    description?: React.ReactNode;
    gameComponent: React.ReactNode;
    howToPlay: React.ReactNode;
    additionalContent?: React.ReactNode;
    benefits?: BenefitItem[];
    benefitsTitle?: React.ReactNode;
    science?: ScienceInfo;
    faq?: FaqItem[];
    relatedGames?: string[];
    hasLeaderboard?: boolean;
    leaderboardTitle?: React.ReactNode;
    leaderboardFormatterType?: FormatterType;
    leaderboardDetailsType?: LeaderboardDetailsType;
    leaderboardMode?: string;
    leaderboardIntro?: React.ReactNode;
    leaderboardComponent?: React.ReactNode;
    structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function GamePageTemplate({
    gameBackground,
    gameId,
    title,
    subtitle,
    description,
    gameComponent,
    howToPlay,
    structuredData
}: GamePageTemplateProps) {
    const t = useTranslations('common');
    const gameT = useTranslations('games.template');
    const structuredDataItems = (Array.isArray(structuredData)
        ? structuredData
        : structuredData
            ? [structuredData]
            : []).filter((item) => item["@type"] !== "FAQPage");

    return (
        <>
            {structuredDataItems.map((item, index) => (
                <script
                    key={`${gameId}-structured-data-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
                />
            ))}
            <Breadcrumbs
                items={[{ label: t("games"), href: "/" }, { label: title }]}
            />
            {/* 游戏标题和描述 */}
            <div className="container mx-auto pt-8">
                <GameHeader title={title} subtitle={subtitle} />
                {description && (
                    <div className="mx-auto -mt-6 mb-10 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
                        {description}
                    </div>
                )}
            </div>

            {/* 游戏组件 */}
            <section
                className={cn(
                    "mb-4 rounded-xl p-2 md:p-4 border border-border",
                    gameBackground
                )}
            >
                {gameComponent}
            </section>

            {/* 游戏玩法说明 */}
            <section className="max-w-6xl mx-auto mb-16 space-y-6">
                <div className="p-6 rounded-lg bg-muted/50">
                    <h2 className="text-xl font-semibold mb-3">
                        🎯 {gameT("howToPlay")}
                    </h2>
                    <div className="space-y-3 text-lg text-muted-foreground">
                        {howToPlay}
                    </div>
                </div>
            </section>

        </>
    );
} 
