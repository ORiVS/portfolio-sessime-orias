import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container max-w-3xl py-12 px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
                À propos
            </h1>

            <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
                <p className="lead text-xl text-foreground font-medium">
                    Je m'appelle Sessimè Orias DOGBEVI, développeur Full Stack, passionné par la construction de produits numériques utiles, solides et bien pensés.
                </p>

                <p>
                    Je suis actuellement en fin de Master en Architecture des Logiciels à l’ESGI Paris.
                    J’ai construit mon parcours autour d’un équilibre entre rigueur technique et projets concrets,
                    à travers des expériences en alternance, des projets académiques ambitieux et des produits entrepreneuriaux.
                </p>

                <p>
                    Ce que j’aime vraiment, ce n’est pas simplement “coder des fonctionnalités”, mais
                    <strong> concevoir des produits qui servent réellement à quelque chose dans la société</strong> :
                    simplifier un processus, faire gagner du temps, améliorer une expérience ou résoudre un vrai problème métier.
                </p>

                <p>
                    Que ce soit une API complexe, une application mobile ou une plateforme complète,
                    je cherche toujours à construire des systèmes <strong>simples, robustes, maintenables et orientés usage réel</strong>.
                    J’accorde une grande importance à la qualité du code, à l’architecture et à la clarté des responsabilités.
                </p>

                <h2 className="text-foreground mt-8 mb-4 font-bold text-2xl">
                    Ma philosophie de travail
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>L’utilité avant tout :</strong> Un bon produit n’est pas celui qui est techniquement impressionnant,
                        mais celui qui est vraiment utilisé et qui apporte de la valeur.
                    </li>
                    <li>
                        <strong>Simplicité et robustesse :</strong> Je privilégie les architectures claires, lisibles et évolutives
                        plutôt que les solutions compliquées inutilement.
                    </li>
                    <li>
                        <strong>Qualité et long terme :</strong> J’essaie de produire du code propre, maintenable et compréhensible
                        par d’autres développeurs.
                    </li>
                    <li>
                        <strong>Amélioration continue :</strong> Je consacre du temps à la veille et à l’apprentissage
                        (architecture logicielle, backend, mobile, IA, cloud).
                    </li>
                </ul>

                <p>
                    Aujourd’hui, je cherche à rejoindre une équipe où je peux <strong>avoir un impact réel sur le produit</strong>,
                    continuer à progresser techniquement, et participer à la construction de solutions utiles et bien conçues.
                </p>

                <div className="pt-8 flex gap-4">
                    <Button asChild>
                        <Link href="/contact">Me contacter</Link>
                    </Button>

                    <Button asChild variant="outline">
                        <Link href="/resume">Voir mon CV</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
