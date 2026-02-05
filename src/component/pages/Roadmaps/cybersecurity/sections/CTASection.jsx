import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/component/ui/button";

const CTASection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                        Ready to Start Your Journey?
                    </h2>

                    <p className="text-primary-foreground/80 text-lg mb-8">
                        Join thousands of professionals who have transformed
                        their careers with our comprehensive roadmaps and
                        courses.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-background hover:bg-background/90 text-primary font-semibold px-8"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download Free Roadmap
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-primary-foreground text-red-600 hover:text-white hover:bg-primary-foreground/10 font-semibold px-8"
                        >
                            Explore Courses
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
