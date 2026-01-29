import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/50">
            <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <Link href="/" className="font-bold tracking-tighter text-lg">
                        Sessimè Orias.
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        Full Stack Developer.
                    </p>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <a
                        href="https://github.com/ORiVS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/orias-dogbevi-699a1620b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
