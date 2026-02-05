import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "QuantumTraining 's cybersecurity program helped me transition from IT support to a Security Analyst role in just 6 months. The hands-on labs made all the difference.",
        author: "Sarah Chen",
        role: "Security Analyst",
        company: "Fortune 500 Bank",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
        quote: "We've trained over 500 employees on QuantumTraining . The analytics dashboard gives us complete visibility into skill development across the organization.",
        author: "Michael Torres",
        role: "Head of L&D",
        company: "Global Tech Corp",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
        quote: "The AI and ML courses are incredibly comprehensive. I earned my TensorFlow certification and landed a role as a Machine Learning Engineer.",
        author: "Priya Sharma",
        role: "ML Engineer",
        company: "AI Startup",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
];

const logos = [
    "Microsoft",
    "Google",
    "Amazon",
    "Meta",
    "IBM",
    "Cisco",
    "Oracle",
    "Salesforce",
];

export const Testimonials = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium mb-4 block">
                        TESTIMONIALS
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                        Trusted by{" "}
                        <span className="gradient-text">Industry Leaders</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        See how professionals and organizations are transforming
                        their careers and workforce with QuantumTraining .
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 hover-lift"
                        >
                            <Quote className="w-10 h-10 text-primary/30 mb-4" />
                            <p className="text-foreground mb-6 leading-relaxed">
                                “{testimonial.quote}”
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-semibold">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role},{" "}
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Company Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="text-sm text-muted-foreground mb-8">
                        TRUSTED BY LEADING COMPANIES WORLDWIDE
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {logos.map((logo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.05,
                                }}
                                className="text-xl font-display font-bold text-black/40 hover:text-black transition-colors"
                            >
                                {logo}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
