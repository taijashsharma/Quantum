import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/component/ui/button";

export const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(24,100%,55%,0.1)_0%,_transparent_50%)]" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                        Ready to Accelerate Your
                        <br />
                        <span className="gradient-text">Learning Journey?</span>
                    </h2>

                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Join thousands of professionals and organizations who
                        trust QuantumTraining for their tech education and
                        workforce development.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
                        >
                            Start Your Free Trial
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-border hover:bg-secondary/50 px-8 py-6 text-lg"
                        >
                            Contact Sales
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mt-6">
                        No credit card required • 14-day free trial • Cancel
                        anytime
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
