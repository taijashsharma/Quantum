import { motion } from "framer-motion";
import {
    Terminal,
    Shield,
    Cloud,
    Server,
    Lock,
    Award,
    CheckCircle2,
} from "lucide-react";

import { Card, CardContent } from "@/component/ui/card";

/* ================= ROADMAP DATA ================= */

const roadmapSteps = [
    {
        phase: "Phase 1",
        title: "Foundation",
        duration: "4-6 weeks",
        icon: Terminal,
        color: "from-primary to-primary/80",
        skills: [
            "Linux Fundamentals",
            "Networking Basics",
            "Command Line Mastery",
            "Version Control (Git)",
        ],
    },
    {
        phase: "Phase 2",
        title: "Core Security",
        duration: "6-8 weeks",
        icon: Shield,
        color: "from-primary/90 to-primary/70",
        skills: [
            "Security Principles",
            "Cryptography Basics",
            "Identity & Access Management",
            "Security Frameworks",
        ],
    },
    {
        phase: "Phase 3",
        title: "Cloud Platforms",
        duration: "8-10 weeks",
        icon: Cloud,
        color: "from-primary/80 to-primary/60",
        skills: [
            "AWS Fundamentals",
            "Azure Essentials",
            "Google Cloud Platform",
            "Multi-Cloud Strategies",
        ],
    },
    {
        phase: "Phase 4",
        title: "Infrastructure",
        duration: "6-8 weeks",
        icon: Server,
        color: "from-primary/70 to-primary/50",
        skills: [
            "Infrastructure as Code",
            "Terraform & Ansible",
            "Containers & Docker",
            "Kubernetes Basics",
        ],
    },
    {
        phase: "Phase 5",
        title: "Advanced Security",
        duration: "8-10 weeks",
        icon: Lock,
        color: "from-primary/60 to-primary/40",
        skills: [
            "Penetration Testing",
            "Threat Intelligence",
            "Incident Response",
            "Security Operations",
        ],
    },
    {
        phase: "Phase 6",
        title: "Expert Level",
        duration: "Ongoing",
        icon: Award,
        color: "from-primary/50 to-primary/30",
        skills: [
            "Security Architecture",
            "Compliance & Governance",
            "Leadership Skills",
            "Continuous Learning",
        ],
    },
];

/* ================= COMPONENT ================= */

const RoadmapSection = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The Complete{" "}
                        <span className="gradient-text">Learning Path</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Follow this structured roadmap to become a cybersecurity
                        expert
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden lg:block -translate-x-1/2" />

                    <div className="space-y-12">
                        {roadmapSteps.map((step, index) => (
                            <motion.div
                                key={step.phase}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -50 : 50,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex items-center gap-8 ${
                                    index % 2 === 0
                                        ? "lg:flex-row"
                                        : "lg:flex-row-reverse"
                                }`}
                            >
                                {/* Card */}
                                <div className="flex-1">
                                    <Card className="glass-card hover-lift overflow-hidden">
                                        <CardContent className="p-0">
                                            {/* Header */}
                                            <div
                                                className={`bg-gradient-to-r ${step.color} p-4`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center">
                                                        <step.icon className="w-6 h-6 text-primary-foreground" />
                                                    </div>

                                                    <div>
                                                        <div className="text-sm text-primary-foreground/80">
                                                            {step.phase}
                                                        </div>
                                                        <div className="text-xl font-bold text-primary-foreground">
                                                            {step.title}
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto text-sm px-3 py-1 rounded-full bg-background/20 text-primary-foreground">
                                                        {step.duration}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Skills */}
                                            <div className="p-6">
                                                <div className="grid grid-cols-2 gap-3">
                                                    {step.skills.map(
                                                        (skill) => (
                                                            <div
                                                                key={skill}
                                                                className="flex items-center gap-2 text-sm text-muted-foreground"
                                                            >
                                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                                                {skill}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Timeline Number */}
                                <div className="hidden lg:flex w-16 h-16 rounded-full bg-primary border-4 border-background shadow-lg items-center justify-center z-10">
                                    <span className="text-lg font-bold text-primary-foreground">
                                        {index + 1}
                                    </span>
                                </div>

                                <div className="flex-1 hidden lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
