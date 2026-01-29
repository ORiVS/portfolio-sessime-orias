import { projects } from "#site/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = {
    title: "Projects | Sessimè Orias",
    description: "A collection of my recent projects and case studies.",
};

export default function ProjectsPage() {
    const allProjects = projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="container py-12 px-4 md:px-6 mx-auto">
            <FadeIn>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mes Projets</h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        Découvrez mes dernières réalisations, études de cas et expérimentations.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {allProjects.map((project) => (
                        <Card key={project.slug} className="flex flex-col overflow-hidden border-border/50 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50 hover:border-primary/50 transition-colors h-full">
                            <div className="aspect-video w-full bg-muted relative overflow-hidden group">
                                {/* Placeholder for cover image if not present */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl font-bold text-muted-foreground/20 group-hover:scale-105 transition-transform duration-500">
                                    {project.title.substring(0, 2)}
                                </div>
                            </div>
                            <CardHeader>
                                <div className="space-y-1">
                                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag}>#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <CardDescription className="line-clamp-3">
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="pt-0">
                                <Button asChild variant="ghost" className="w-full justify-between hover:bg-primary/10 hover:text-primary group">
                                    <Link href={`/${project.slug}`}>
                                        Voir l'étude de cas <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </FadeIn>
        </div>
    );
}
