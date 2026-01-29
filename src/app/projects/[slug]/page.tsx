import { projects } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/animations/FadeIn";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

async function getProjectFromParams(params: ProjectPageProps["params"]) {
    const slug = (await params).slug;
    const project = projects.find((project) => project.slugAsParams === slug);
    if (!project) return null;
    return project;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slugAsParams,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const project = await getProjectFromParams(params);

    if (!project) {
        notFound();
    }

    return (
        <article className="container py-8 md:py-12 px-4 md:px-6 max-w-4xl mx-auto">
            <FadeIn>
                <div className="mb-8">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Retour aux projets
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-gradient">
                        {project.title}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((tech) => (
                            <Badge key={tech} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {project.demo && (
                            <Button asChild>
                                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Voir la démo
                                </Link>
                            </Button>
                        )}
                        {project.repository && (
                            <Button asChild variant="outline">
                                <Link href={project.repository} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Code Source
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
                    <div className="prose prose-invert max-w-none">
                        <MDXContent code={project.body} />
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                            <h3 className="font-semibold mb-4 text-lg">Détails du Projet</h3>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <span className="text-muted-foreground block mb-1">Date</span>
                                    <span>{new Date(project.date).toLocaleDateString("fr-FR", { year: 'numeric', month: 'long' })}</span>
                                </div>
                                <div>
                                    <span className="text-muted-foreground block mb-1">Role</span>
                                    <span>{project.role || "Développeur Full Stack"}</span>
                                </div>
                                <div>
                                    <span className="text-muted-foreground block mb-1">Context</span>
                                    <span>{project.context || "Projet Personnel"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </article>
    );
}
