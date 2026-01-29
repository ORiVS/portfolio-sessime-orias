import { Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const experiences = [
    {
        id: "ky-solution",
        title: "Apprenti Développeur Full Stack",
        company: "KY SOLUTION",
        location: "Paris, France",
        period: "Sept 2023 - Sept 2025",
        type: "Alternance",
        highlights: [
            "Développement d'API REST sécurisées (Node.js, Django, Spring Boot)",
            "CI/CD sur AWS avec GitHub Actions, Docker & Kubernetes",
            "Collaboration agile (Scrum), pair programming et code review"
        ]
    },
    {
        id: "inovact",
        title: "Développeur Full Stack",
        company: "INOVACT",
        location: "Cotonou, Bénin",
        period: "Juin 2023 - Août 2023",
        type: "Stage",
        highlights: [
            "Application web complète (React + Django + PostgreSQL)",
            "Authentification JWT avec middleware de sécurité",
            "Tests API via Postman et corrections de bugs critiques"
        ]
    }
];

export function Experience() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center gap-3">
                        <Briefcase className="h-10 w-10" /> Expériences Professionnelles
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        Mon parcours professionnel en développement full stack.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mb-8">
                    {experiences.map((exp) => (
                        <Link
                            key={exp.id}
                            href={`/experience#${exp.id}`}
                            className="group"
                        >
                            <div className="bg-card border border-border/50 rounded-lg p-6 h-full hover:border-primary/50 transition-all hover:shadow-lg">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                                            {exp.title}
                                        </h3>
                                        <div className="text-sm font-medium text-primary">{exp.company}</div>
                                    </div>
                                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                        {exp.type}
                                    </span>
                                </div>
                                <div className="text-sm text-muted-foreground mb-4">
                                    {exp.location} • {exp.period}
                                </div>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {exp.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="mr-2 text-primary">•</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Button asChild variant="outline" size="lg">
                        <Link href="/experience">
                            Voir toutes les expériences <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
