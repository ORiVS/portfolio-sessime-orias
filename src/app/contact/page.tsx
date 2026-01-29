import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Contact | Sessimè Orias",
    description: "Get in touch with me.",
};

export default function ContactPage() {
    return (
        <div className="container py-12 px-4 md:px-6 mx-auto max-w-2xl">
            <div className="space-y-4 text-center mb-12">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Me Contacter</h1>
                <p className="text-muted-foreground md:text-xl/relaxed">
                    N'hésitez pas à me contacter pour discuter de votre projet ou simplement pour échanger.
                </p>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Coordonnées</CardTitle>
                        <CardDescription>
                            Le moyen le plus simple de me joindre.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <Mail className="w-5 h-5 text-muted-foreground" />
                            <a href="mailto:orivsdogbevi@gmail.com" className="text-sm hover:underline">
                                orivsdogbevi@gmail.com
                            </a>
                        </div>
                        {/* Add phone if desired from resume */}
                        <div className="flex items-center space-x-4">
                            {/* <Phone className="w-5 h-5 text-muted-foreground" /> */}
                            {/* <span className="text-sm">07 45 59 80 84</span> */}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Réseaux Sociaux</CardTitle>
                        <CardDescription>
                            Retrouvez-moi sur les différentes plateformes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-4">
                        <Button variant="outline" size="icon" asChild>
                            <Link href="https://github.com/ORiVS" target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href="https://www.linkedin.com/in/orias-dogbevi-699a1620b/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                        {/* Add Twitter/X if available */}
                        {/*
            <Button variant="outline" size="icon" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
                 <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            */}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
