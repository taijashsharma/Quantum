import { motion } from "framer-motion";
import { Card, CardContent } from "@/component/ui/card";
import { Award, BookOpen, Target, Zap } from "lucide-react";

const features = [
    {
        icon: Target,
        title: "Clear Learning Path",
        description: "Beginner to expert step-by-step roadmap",
    },
    {
        icon: BookOpen,
        title: "Curated Resources",
        description: "Best courses, books & labs",
    },
    {
        icon: Zap,
        title: "Hands-on Projects",
        description: "Build real-world portfolio projects",
    },
    {
        icon: Award,
        title: "Certification Ready",
        description: "Aligned with top industry certs",
    },
];

const FeaturesSection = () => {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Why Choose Our Roadmap?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our roadmap is designed by industry experts who have
                        trained thousands of successful security professionals
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="glass-card h-full hover-lift">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>

                                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                                        {feature.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
