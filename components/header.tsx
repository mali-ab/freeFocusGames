"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xs">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="Üns Oýunlary logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-md object-cover"
            priority
          />
          <span className="font-semibold text-foreground">Üns Oýunlary</span>
        </Link>
        <div className="ml-auto flex items-center gap-1" aria-label="Language selection">
          {(["en", "tk", "ru"] as const).map((locale) => (
            <Link
              key={locale}
              href={pathname}
              locale={locale}
              className="rounded-md px-2 py-1 text-xs font-medium uppercase text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {locale}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
