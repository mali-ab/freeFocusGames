import { Header } from "./header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="px-4 md:px-8">
                {children}
                <Footer />
            </main>
        </div>
    );
}
