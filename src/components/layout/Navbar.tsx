import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Resume", href: "/resume" },
];

export function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tighter">
                    SO.
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button asChild variant="default" size="sm">
                        <Link href="/contact">Contact</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Placeholder - Can be enhanced with Sheet later */}
                <Button variant="ghost" size="icon" className="md:hidden">
                    <span className="sr-only">Toggle menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </Button>
            </div>
        </header>
    );
}
