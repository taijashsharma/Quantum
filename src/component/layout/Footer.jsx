import {
    GraduationCap,
    Twitter,
    Linkedin,
    Github,
    Youtube,
} from "lucide-react";

const footerLinks = {
    Platform: [
        "Learning Management",
        "Analytics",
        "Certifications",
        "Enterprise",
        "Integrations",
    ],
    Courses: [
        "Cybersecurity",
        "Data Science",
        "Cloud Computing",
        "AI & ML",
        "DevOps",
    ],
    Company: ["About Us", "Careers", "Blog", "Press", "Partners"],
    Resources: [
        "Documentation",
        "Help Center",
        "Community",
        "Webinars",
        "Case Studies",
    ],
};

const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
    { icon: Youtube, href: "#" },
];

export const Footer = () => {
    return (
        <footer className="border-t border-border bg-card/50">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <span className="font-display font-bold text-xl">
                                QuantumTraining
                            </span>
                        </div>

                        <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                            The enterprise learning platform for technical
                            skills development and workforce transformation.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold mb-4">{title}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2026 QuantumTraining . All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
