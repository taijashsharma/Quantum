import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/component//ui/button.jsx";
import { label, sub } from "framer-motion/client";

const navItems = [
    {
        label: "Home",
    },
    {
        label: "Roadmaps",
        submenu: [
            {
                label: "DefSpace & IT Infra Professional",
                description:
                    "Prepare for roles in defense-space, and mission-critical IT environments.",
            },
            {
                label: "Cloud Engineering & DevOps",
                description:
                    "Master cloud platforms and learn to automate end-to-end deployment pipelines.",
            },
            {
                label: "Cybersecurity & DevSecOps",
                description:
                    "Build secure systems with modern defense strategies and continuous security practices.",
            },
            {
                label: "Business, AI & Data Analytics",
                description:
                    "Leverage data, analytics, and AI to drive business decisions and growth.",
            },
            {
                label: "Leadership & Project Mngt.",
                description:
                    "Develop leadership capability and learn to deliver projects successfully.",
            },
            {
                label: "Embedded, IOT Software Track",
                description:
                    "Design intelligent embedded systems and build connected IoT applications.",
            },
            {
                label: "Programming & DS Essentials",
                description:
                    "Strengthen foundational coding skills (C, C++, Python) and understand core Data Structures.",
            },
        ],
    },
    {
        label: "Internship",
        submenu: [
            {
                label: "Corporate",
                description:
                    "Gain hands-on experience in a corporate environment.",
            },
            {
                label: "College / University",
                description:
                    "Internship opportunities for college and university students.",
            },
        ],
    },
    {
        label: "More",
        submenu: [
            {
                label: "Blog",
                description: "Read the latest articles and updates.",
            },
            {
                label: "Resources",
                description: "Access helpful learning materials and guides.",
            },
            {
                label: "About",
                description: "Learn more about our mission and team.",
            },
            {
                label: "Contact",
                description: "Get in touch with us for support or inquiries.",
            },
        ],
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50  bg-white">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="font-display font-bold text-xl">
                            QuantumTraining
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden bg-white lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => setActiveMenu(item.label)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                    <a href="/">{item.label}</a>
                                    {item.submenu && (
                                        <ChevronDown className="w-4 h-4" />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {item.submenu &&
                                        activeMenu === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className={`bg-white absolute top-13 left-0 mt-2 glass-card p-3 shadow-lg rounded-lg
                                                        ${
                                                            item.submenu
                                                                .length > 4
                                                                ? "grid grid-cols-2 w-[550px]"
                                                                : "grid grid-cols-1 w-90"
                                                        }
                                                         gap-x-6 gap-y-2`}
                                            >
                                                {item.submenu.map((subitem) => (
                                                    <a
                                                        key={subitem.label}
                                                        href="#"
                                                        className="block p-2 rounded-lg hover:bg-black/10 transition-colors"
                                                    >
                                                        <div className="font-medium text-foreground">
                                                            {subitem.label}
                                                        </div>
                                                        <div className="text-sm text-muted-foreground">
                                                            {
                                                                subitem.description
                                                            }
                                                        </div>
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            variant="ghost"
                            className="text-muted-foreground p-6 hover:text-foreground hover:bg-primary"
                        >
                            Sign In
                        </button>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                            Start Free Trial
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href="#"
                                        className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}

                                <div className="pt-4 space-y-2 border-t border-border">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        Sign In
                                    </Button>
                                    <Button className="w-full bg-primary text-primary-foreground">
                                        Start Free Trial
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};
