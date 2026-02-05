import { motion } from "framer-motion";
import {
    Laptop,
    Award,
    Users,
    BarChart3,
    Lock,
    Zap,
    CheckCircle2,
} from "lucide-react";

const features = [
    {
        icon: Laptop,
        title: "Hands-On Labs",
        description:
            "Practice in real cloud environments with guided labs and sandboxes.",
    },
    {
        icon: Award,
        title: "Industry Certifications",
        description:
            "Earn recognized certifications from AWS, CompTIA, and more.",
    },
    {
        icon: Users,
        title: "Expert Instructors",
        description:
            "Learn from industry practitioners with years of experience.",
    },
    {
        icon: BarChart3,
        title: "Progress Tracking",
        description: "Monitor your learning journey with detailed analytics.",
    },
    {
        icon: Lock,
        title: "Enterprise Security",
        description: "SSO, SCIM provisioning, and advanced access controls.",
    },
    {
        icon: Zap,
        title: "AI-Powered Learning",
        description: "Personalized paths and intelligent skill assessments.",
    },
];

const benefits = [
    "Unlimited access to 500+ courses",
    "Interactive hands-on labs",
    "Skill assessments & analytics",
    "Mobile learning support",
    "Certificate of completion",
    "24/7 community support",
];

export const Features = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-primary font-medium mb-4 block">
                            WHY QuantumTraining
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            The Complete Platform for{" "}
                            <span className="gradient-text">
                                Tech Education
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10">
                            Everything you need to upskill your workforce and
                            stay ahead in the rapidly evolving tech landscape.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Benefits Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="glass-card p-8 relative overflow-hidden">
                            {/* Glow Effect */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />

                            <div className="relative z-10">
                                <h3 className="font-display text-2xl font-bold mb-6">
                                    Everything Included
                                </h3>

                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.3 + index * 0.1,
                                            }}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="text-foreground">
                                                {benefit}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-border">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-display font-bold gradient-text">
                                            $29
                                        </span>
                                        <span className="text-muted-foreground">
                                            /month per user
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Billed annually. Enterprise pricing
                                        available.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
