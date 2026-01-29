import { GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center gap-3">
                        <GraduationCap className="h-10 w-10" /> Mon Parcours
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        Une formation solide en architecture logicielle, du Bénin à la France.
                    </p>
                </div>

                <div className="space-y-8 relative pl-8 border-l-2 border-muted ml-4">
                    <div className="relative">
                        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[41px] top-2 ring-4 ring-background" />
                        <div className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors">
                            <h3 className="font-bold text-xl mb-2">Master en Architecture des Logiciels</h3>
                            <div className="text-sm font-medium text-primary mb-1">ESGI • Paris, France</div>
                            <div className="text-sm text-muted-foreground">2023 - 2026</div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute w-4 h-4 bg-muted-foreground rounded-full -left-[41px] top-2 ring-4 ring-background" />
                        <div className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors">
                            <h3 className="font-bold text-xl mb-2">Licence en Architecture des Logiciels</h3>
                            <div className="text-sm font-medium text-foreground/80 mb-1">ESGIS • Cotonou, Bénin</div>
                            <div className="text-sm text-muted-foreground">2020 - 2023</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
