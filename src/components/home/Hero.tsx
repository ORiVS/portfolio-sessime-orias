"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-dot-pattern">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
                        Disponible pour un CDI
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 max-w-4xl"
                >
                    Je construis des{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
                        applications robustes
                    </span>
                    , des APIs sécurisées et des expériences fluides.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
                >
                    Sessimè Orias DOGBEVI. Développeur Full Stack (Django, React/Next.js).
                    Je transforme des besoins complexes en solutions techniques propres et scalables.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button asChild size="lg" className="h-12 px-8">
                        <Link href="/#work">
                            Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8">
                        <Link href="/resume">
                            Télécharger CV <Download className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
