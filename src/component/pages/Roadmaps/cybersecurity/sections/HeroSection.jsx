import { motion } from "framer-motion";
import { Shield, Users, Download } from "lucide-react";

import { Card, CardContent } from "@/component/ui/card";
import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { useState } from "react";

const stats = [
    { value: "50K+", label: "Engineers Trained" },
    { value: "95%", label: "Success Rate" },
    { value: "100+", label: "Hiring Partners" },
    { value: "24/7", label: "Community Support" },
];
const HeroSection = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return (
        <section className="pt-32 pb-20 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* ================= LEFT ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Shield className="w-4 h-4" />
                            Cybersecurity Career Roadmap
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Your Path to
                            <br />
                            Becoming a{" "}
                            <span className="gradient-text text-red-500">
                                Security Expert
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Step-by-step roadmap from beginner to advanced
                            cybersecurity professional. Get the skills,
                            certifications, and experience you need.
                        </p>

                        {/* Trust */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background flex items-center justify-center"
                                    >
                                        <Users className="w-4 h-4 text-primary" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-muted-foreground">
                                <span className="font-semibold text-foreground">
                                    50,000+
                                </span>{" "}
                                engineers trust our roadmaps
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="text-center p-4 rounded-xl bg-card border"
                                >
                                    <div className="text-2xl font-bold text-primary">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ================= RIGHT ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="glass-card p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                            <CardContent className="p-0 relative z-10">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold mb-2">
                                        Get Your Free Roadmap PDF
                                    </h2>
                                    <p className="text-muted-foreground">
                                        Enter your details to receive the guide
                                    </p>
                                </div>

                                {/* Preview */}
                                <div className="mb-8">
                                    <div className="aspect-[3/4] max-w-[200px] mx-auto bg-gradient-to-br from-card to-secondary rounded-xl border-2 border-primary/20 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300 flex flex-col items-center justify-center p-6">
                                        <Shield className="w-16 h-16 text-primary mb-4" />
                                        <div className="text-center">
                                            <div className="font-bold">
                                                CYBERSECURITY
                                            </div>
                                            <div className="text-primary font-bold text-sm">
                                                ROADMAP
                                            </div>
                                        </div>
                                        <div className="mt-4 text-xs text-muted-foreground">
                                            DataLearn
                                        </div>
                                    </div>
                                </div>

                                {/* Form */}
                                <form className="space-y-4">
                                    <Input
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />

                                    <div className="grid grid-cols-2 gap-4">
                                        <Input
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                        />
                                        <Input
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                        />
                                    </div>

                                    <Button className="w-full h-12 text-lg">
                                        <Download className="w-5 h-5 mr-2" />
                                        Send Me the Roadmap
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground">
                                        No spam. Unsubscribe anytime.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
