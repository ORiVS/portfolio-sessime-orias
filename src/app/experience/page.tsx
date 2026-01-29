"use client";

import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useEffect } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

const experiences = [
    {
        id: "ky-solution",
        title: "Apprenti Développeur Full Stack",
        company: "KY SOLUTION",
        location: "Paris, France",
        period: "Septembre 2023 - Septembre 2025",
        type: "Alternance",
        description: [
            "Analyse des besoins et préparation des user stories: évaluation des exigences et rédaction de user stories ou d'un cahier des charges avant le développement.",
            "Conception d'applications web et mobiles: conception et développement d'applications (front-end en React/Angular/Vue, back-end en Node.js, Django ou Spring Boot) en suivant une architecture MVC/MVVM.",
            "Création et intégration d'interfaces utilisateurs : développement d'interfaces attrayantes et conviviales en collaboration avec des designers, optimisation de l'ergonomie et de l'expérience utilisateur.",
            "Développement d'API REST sécurisées (Node.js, Swagger), authentification JWT/OAuth2, CI/CD sur AWS avec GitHub Actions, conteneurisation Docker.",
            "Optimisation des performances SQL (PostgreSQL), conception de migrations versionnées.",
            "Développement de modules backend en Java (Spring Boot) et Python (Django), code review, Clean Code.",
            "Collaboration agile (Scrum), pair programming et documentation continue.",
            "Mise en place de pipelines CI/CD via GitHub Actions: conteneurisation Docker et orchestration Kubernetes.",
            "Écriture de tests unitaires et d'intégration (Jest, JUnit).",
            "Support et maintenance : correction de bugs, maintenance évolutive et corrective, assistance aux utilisateurs ou aux équipes métier."
        ],
        skills: ["React", "Angular", "Vue", "Node.js", "Django", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "AWS", "JWT", "Scrum"]
    },
    {
        id: "inovact",
        title: "Développeur Full Stack",
        company: "INOVACT",
        location: "Cotonou, Bénin",
        period: "Juin 2023 - Août 2023",
        type: "Stage",
        description: [
            "Participation à la conception d'une application web (React en front-end, Django en back-end, base PostgreSQL).",
            "Système d'authentification customisé avec JWT, middleware de sécurité et logs utilisateurs.",
            "Tests manuels et API via Postman, corrections de bugs critiques métier sur endpoints principaux.",
            "Design des fonctionnalités, développement en front et en back.",
            "Création des composants d'une page web avec React Js.",
            "Création d'une API avec Django Python pour gérer le back-end d'un site web.",
            "Réalisation du front-end d'une application mobile avec Flutter.",
            "Création d'une base de données avec Django Python pour une application mobile.",
            "Premier usage d'une architecture MVC et introduction au cycle Dev/Test/Deploy."
        ],
        skills: ["React", "Django", "PostgreSQL", "JWT", "Postman", "Flutter", "Python"]
    },
    {
        id: "basia",
        title: "Développeur Applications Mobiles",
        company: "BASIA",
        location: "Cotonou, Bénin",
        period: "Mars 2023 - Mai 2023",
        type: "Stage",
        description: [
            "Prise en main du langage B4A.",
            "Design des fonctionnalités et des pages, développement partiel en front et en back d'une application mobile pour la gestion des biens d'une entreprise (cas d'inventaire).",
            "Rédaction de la documentation technique détaillant toutes les phases de conception de l'application et d'un guide de l'utilisateur final présentant dans un langage accessible à tous les différentes fonctionnalités de l'application.",
            "Utilisation des langages de programmation B4A et Flutter pour créer des applications.",
            "Création d'un CRUD (Create, Read, Update, Delete) pour une application mobile pour la gestion des biens d'une entreprise (cas d'inventaire).",
            "Création d'une fonctionnalité de scan des codes barres et code QR."
        ],
        skills: ["B4A", "Flutter", "Mobile Development", "CRUD", "QR Code"]
    }
];

export default function ExperiencePage() {
    useEffect(() => {
        // Scroll to the experience if hash is present
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "center" });
                    element.classList.add("ring-2", "ring-primary", "ring-offset-4", "ring-offset-background");
                }, 100);
            }
        }
    }, []);

    return (
        <div className="container py-12 px-4 md:px-6 mx-auto max-w-4xl">
            <FadeIn>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center gap-3">
                        <Briefcase className="h-10 w-10" /> Expériences Professionnelles
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        Mon parcours professionnel en développement full stack, du Bénin à la France.
                    </p>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            id={exp.id}
                            className="relative border-l-2 border-muted pl-8 pb-8 transition-all duration-300 rounded-lg"
                        >
                            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-2 ring-4 ring-background" />

                            <div className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors">
                                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                                    <div>
                                        <h2 className="font-bold text-2xl mb-2">{exp.title}</h2>
                                        <div className="text-lg font-medium text-primary mb-2">{exp.company}</div>
                                    </div>
                                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                                        {exp.type}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {exp.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {exp.description.map((item, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-muted-foreground">
                                            <span className="mr-2 text-primary mt-1">•</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-border/50 pt-4">
                                    <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                                        Compétences utilisées
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-xs font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </div>
    );
}
