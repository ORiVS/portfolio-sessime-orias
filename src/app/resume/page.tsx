import { Button } from "@/components/ui/button";
import {
    Download,
    Mail,
    MapPin,
    Phone,
    GraduationCap,
    Linkedin,
    Globe,
} from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    return (
        <div className="container max-w-4xl py-12 px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Sessimè Orias DOGBEVI
                    </h1>
                    <p className="text-xl text-muted-foreground">Développeur Full Stack</p>
                </div>

                <Button size="lg" className="shrink-0" asChild>
                    <a href="/CV Sessimè Orias DOGBEVI - Développeur Full Stack.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger PDF
                    </a>
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_250px]">
                <main className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Profil</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Développeur full-stack, je sais concevoir des applications web solides et bien
                            structurées, avec une attention particulière à la qualité du code, de
                            l&apos;architecture et à l’expérience utilisateur. Je suis actuellement à la
                            recherche d’un CDI en tant que développeur full-stack, au sein d’une entreprise
                            où je pourrai m’impliquer pleinement dans des projets concrets et utiles.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
                            Expériences Professionnelles
                        </h2>

                        <div className="space-y-6">
                            <div className="relative border-l-2 border-muted pl-4 ml-2">
                                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                                <h3 className="font-bold text-lg">Apprenti développeur Full Stack</h3>
                                <div className="text-sm text-muted-foreground mb-2">
                                    KY SOLUTION • Paris • Septembre 2023 - Septembre 2025
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                                    <li>
                                        Analyse des besoins et préparation des user stories : évaluation des exigences
                                        et rédaction de user stories ou d’un cahier des charges avant le développement.
                                    </li>
                                    <li>
                                        Conception d’applications web et mobiles : conception et développement
                                        d’applications (front-end en React/Angular/Vue, back-end en Node.js, Django ou
                                        Spring Boot) en suivant une architecture MVC/MVVM.
                                    </li>
                                    <li>
                                        Création et intégration d’interfaces utilisateurs : développement d’interfaces
                                        attrayantes et conviviales en collaboration avec des designers, optimisation de
                                        l’ergonomie et de l’expérience utilisateur.
                                    </li>
                                    <li>
                                        Développement d&apos;API REST sécurisées (Node.js, Swagger), authentification
                                        JWT/OAuth2, CI/CD sur AWS avec GitHub Actions, conteneurisation Docker.
                                    </li>
                                    <li>
                                        Optimisation des performances SQL (PostgreSQL), conception de migrations
                                        versionnées.
                                    </li>
                                    <li>
                                        Développement de modules backend en Java (Spring Boot) et Python (Django), code
                                        review, Clean Code.
                                    </li>
                                    <li>
                                        Collaboration agile (Scrum), pair programming et documentation continue.
                                    </li>
                                    <li>
                                        Développement back-end (Node.js/Express, Django, SpringBoot) et conception de
                                        schémas relationnels (PostgreSQL, MongoDB).
                                    </li>
                                    <li>
                                        Mise en place de pipelines CI/CD via GitHubActions : conteneurisation Docker et
                                        orchestration Kubernetes.
                                    </li>
                                    <li>Écriture de tests unitaires et d’intégration (Jest, JUnit).</li>
                                    <li>
                                        Participation aux cérémonies Scrum, pair programming, revue de code et veille
                                        technologique continue.
                                    </li>
                                    <li>
                                        Support et maintenance : correction de bugs, maintenance évolutive et
                                        corrective, assistance aux utilisateurs ou aux équipes métier.
                                    </li>
                                </ul>
                            </div>

                            <div className="relative border-l-2 border-muted pl-4 ml-2">
                                <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[7px] top-1.5" />
                                <h3 className="font-bold text-lg">Apprenti développeur Web & Mobile</h3>
                                <div className="text-sm text-muted-foreground mb-2">
                                    INOVACT • Cotonou, Bénin • Avril 2023 - Août 2023
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                                    <li>
                                        Participation à la conception d’une application web (React en front-end, Django
                                        en back-end, base PostgreSQL).
                                    </li>
                                    <li>
                                        Système d’authentification customisé avec JWT, middleware de sécurité et logs
                                        utilisateurs.
                                    </li>
                                    <li>
                                        Tests manuels et API via Postman, corrections de bugs critiques métier sur
                                        endpoints principaux.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Compétences Techniques</h2>

                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                <span className="font-semibold text-foreground">Langages & Frameworks : </span>
                                TypeScript, JavaScript (React, Next.js, Vue.js, Node.js/Express), Angular, Python
                                (Django), Java (Spring Boot), Flutter/Dart, C/C#, HTML5, CSS3/SASS, Tailwind CSS
                            </p>

                            <p>
                                <span className="font-semibold text-foreground">Architecture & API : </span>
                                Micro-services, MVC/MVVM, REST, JWT/OAuth2, Swagger/OpenAPI, WebSockets, CI/CD,
                                GitHub Actions
                            </p>

                            <p>
                                <span className="font-semibold text-foreground">Bases de données : </span>
                                PostgreSQL, MySQL, MongoDB, conception de migrations versionnées
                            </p>

                            <p>
                                <span className="font-semibold text-foreground">DevOps & Tests : </span>
                                Docker, AWS, Railway, Render, Git, Postman, Kubernetes (début auto-formation),
                                tests unitaires et d’intégration (Jest, JUnit), tests end-to-end
                            </p>

                            <p>
                                <span className="font-semibold text-foreground">
                                    Méthodologie & Collaboration :{" "}
                                </span>
                                Agile (Scrum, Kanban), Trello, Notion, Pair Programming, code review
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
                            Projets personnels & entrepreneuriaux
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-lg">LeMaillot – Marketplace mobile (2025)</h3>
                                <ul className="list-disc list-outside ml-4 mt-2 space-y-2 text-muted-foreground">
                                    <li>
                                        Conception d’une marketplace mobile de vente de maillots : Flutter + Django
                                        REST, base PostgreSQL scalable.
                                    </li>
                                    <li>
                                        Déploiement sécurisé sur Google Play ; mise en place d’une stratégie de paiement
                                        (Stripe).
                                    </li>
                                    <li>Architecture scalable, API sécurisées, CI/CD (GitHub Actions).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">Vegnbio – Digitalisation SI restaurant</h3>
                                <ul className="list-disc list-outside ml-4 mt-2 space-y-2 text-muted-foreground">
                                    <li>
                                        Développement d’un système complet de gestion de caisse, de réservations et de
                                        fournisseurs (Django + React).
                                    </li>
                                    <li>
                                        Création d’une application mobile Flutter pour commandes clients et suivi
                                        fournisseurs.
                                    </li>
                                    <li>
                                        Déploiement google play store et en environnement réel avec Railway, Vercel,
                                        versionning Git & Notion.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2 flex items-center gap-2">
                            <GraduationCap className="h-6 w-6" />
                            Formation
                        </h2>

                        <div className="space-y-8 relative pl-6 border-l-2 border-muted ml-2">
                            <div className="relative">
                                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[31px] top-2 ring-4 ring-background" />
                                <h3 className="font-bold text-lg">Master 2 Architecture des Logiciels</h3>
                                <div className="text-sm font-medium text-foreground/80 mb-1">
                                    ESGI • Paris, France
                                </div>
                                <div className="text-sm text-muted-foreground">2023–2025</div>
                            </div>

                            <div className="relative">
                                <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[31px] top-2 ring-4 ring-background" />
                                <h3 className="font-bold text-lg">Licence Architecture des Logiciels</h3>
                                <div className="text-sm font-medium text-foreground/80 mb-1">
                                    ESGIS • Cotonou, Bénin
                                </div>
                                <div className="text-sm text-muted-foreground">2020–2023</div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Langues & Soft Skills</h2>

                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                <span className="font-semibold text-foreground">Langues : </span>
                                Français (courant), Anglais (professionnel)
                            </p>

                            <p>
                                <span className="font-semibold text-foreground">Soft skills : </span>
                                Travail en équipe, adaptabilité, esprit d’initiative, rigueur, sens analytique,
                                proactivité
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Centres d’intérêt</h2>

                        <div className="space-y-2 text-muted-foreground leading-relaxed">
                            <p>Football, Musique, Aéronautique</p>
                            <p>Technologie & Innovation – IA & entrepreneuriat tech</p>
                        </div>
                    </section>
                </main>

                <aside className="space-y-8">
                    <section>
                        <h3 className="font-bold mb-3 uppercase text-sm tracking-wider text-muted-foreground">
                            Contact
                        </h3>

                        <div className="space-y-2 text-sm">
                            <a
                                href="mailto:orivsdogbevi@gmail.com"
                                className="flex items-center hover:text-primary transition-colors"
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                orivsdogbevi@gmail.com
                            </a>

                            <a
                                href="tel:+33745598084"
                                className="flex items-center hover:text-primary transition-colors"
                            >
                                <Phone className="mr-2 h-4 w-4" />
                                07 45 59 80 84
                            </a>

                            <a
                                href="https://www.linkedin.com/in/orias-dogbevi-699a1620b/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center hover:text-primary transition-colors"
                            >
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </a>

                            <a
                                href="https://sessimeorias.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center hover:text-primary transition-colors"
                            >
                                <Globe className="mr-2 h-4 w-4" />
                                Portfolio
                            </a>

                            <div className="flex items-center">
                                <MapPin className="mr-2 h-4 w-4" />
                                Paris (IDF)
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="font-bold mb-3 uppercase text-sm tracking-wider text-muted-foreground">
                            Stack Technique
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {[
                                "TypeScript",
                                "JavaScript",
                                "React",
                                "Next.js",
                                "Vue.js",
                                "Angular",
                                "Node.js",
                                "Python",
                                "Django",
                                "Java",
                                "Spring Boot",
                                "PostgreSQL",
                                "MySQL",
                                "MongoDB",
                                "Docker",
                                "AWS",
                                "Railway",
                                "Render",
                                "GitHub Actions",
                                "Kubernetes (début)",
                                "Flutter",
                                "Tailwind",
                                "Postman",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-secondary text-secondary-foreground rounded text-xs font-medium px-2 py-1"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="font-bold mb-3 uppercase text-sm tracking-wider text-muted-foreground">
                            Langues
                        </h3>

                        <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                                <span>Français</span>
                                <span className="text-muted-foreground">Courant</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Anglais</span>
                                <span className="text-muted-foreground">Professionnel</span>
                            </div>
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    );
}
