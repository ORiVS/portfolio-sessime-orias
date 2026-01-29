import { User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutPreview() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center gap-3">
                        <User className="h-10 w-10" /> À Propos
                    </h2>
                </div>

                <div className="bg-card border border-border/50 rounded-lg p-8 hover:border-primary/50 transition-colors">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                        Développeur full-stack passionné, je conçois des applications web robustes et bien architecturées.
                        Mon approche combine rigueur technique, qualité du code et attention à l'expérience utilisateur.
                        Actuellement en recherche d'un CDI pour contribuer à des projets ambitieux.
                    </p>

                    <div className="flex justify-center">
                        <Button asChild variant="outline" size="lg">
                            <Link href="/about">
                                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
