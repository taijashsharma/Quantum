import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Database, Cloud, Brain } from "lucide-react";
import { Button } from "@/component/ui/button";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(24,100%,55%,0.08)_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(350,100%,60%,0.05)_0%,_transparent_50%)]" />

            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Floating Icons */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-[10%] w-16 h-16 glass-card flex items-center justify-center"
            >
                <Shield className="w-8 h-8 text-primary" />
            </motion.div>

            <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/3 right-[15%] w-14 h-14 glass-card flex items-center justify-center"
            >
                <Database className="w-7 h-7 text-primary" />
            </motion.div>

            <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/3 left-[20%] w-12 h-12 glass-card flex items-center justify-center"
            >
                <Cloud className="w-6 h-6 text-primary" />
            </motion.div>

            <motion.div
                animate={{ y: [15, -15, 15] }}
                transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/4 right-[10%] w-14 h-14 glass-card flex items-center justify-center"
            >
                <Brain className="w-7 h-7 text-primary" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Trusted by 10,000+ organizations worldwide
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
                    >
                        Master the Skills
                        <br />
                        <span className="gradient-text">
                            That Shape Tomorrow
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                    >
                        Industry-leading courses in Cybersecurity, Data Science,
                        Cloud Computing, and AI. Learn from experts and
                        accelerate your career with hands-on labs.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
                        >
                            Start Learning Free
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-border hover:bg-secondary/50 px-8 py-6 text-lg group"
                        >
                            <Play className="mr-2 w-5 h-5" />
                            Watch Demo
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
                    >
                        {[
                            { value: "500+", label: "Courses" },
                            { value: "50K+", label: "Students" },
                            { value: "95%", label: "Success Rate" },
                            { value: "100+", label: "Certifications" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
