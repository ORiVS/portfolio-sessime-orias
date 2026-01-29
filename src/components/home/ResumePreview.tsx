import { FileText, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ResumePreview() {
    const skills = ["TypeScript", "React", "Next.js", "Django", "Python", "PostgreSQL", "Docker", "AWS"];

    return (
        <section className="py-24 bg-muted/50">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center gap-3">
                        <FileText className="h-10 w-10" /> CV & Compétences
                    </h2>
                </div>

                <div className="bg-card border border-border/50 rounded-lg p-8 hover:border-primary/50 transition-colors">
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                        <div>
                            <h3 className="font-bold text-xl mb-4">Profil</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Développeur full-stack avec une expertise en conception d'applications web et mobiles.
                                Spécialisé dans les architectures MVC/MVVM, les API REST sécurisées et le déploiement CI/CD.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-4">Stack Technique</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => (
                                    <span key={skill} className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button asChild variant="outline" size="lg">
                            <Link href="/resume">
                                Voir le CV complet <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                        <Button asChild size="lg">
                            <a href="/CV Sessimè Orias DOGBEVI - Développeur Full Stack.pdf" download>
                                <Download className="mr-2 h-4 w-4" /> Télécharger PDF
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
