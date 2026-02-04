import { motion } from "framer-motion";
import {
  Shield,
  Database,
  Cloud,
  Brain,
  Clock,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/component/ui/button";

const courses = [
  {
    icon: Shield,
    title: "Cybersecurity Fundamentals",
    description:
      "Master ethical hacking, penetration testing, and security operations.",
    duration: "12 weeks",
    students: "15,420",
    rating: 4.9,
    level: "Beginner to Advanced",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description:
      "Learn Python, machine learning, and big data processing with real projects.",
    duration: "16 weeks",
    students: "23,150",
    rating: 4.8,
    level: "Intermediate",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "AWS, Azure, and GCP certification prep with hands-on labs.",
    duration: "10 weeks",
    students: "18,890",
    rating: 4.9,
    level: "All Levels",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Deep learning, neural networks, and LLMs with TensorFlow and PyTorch.",
    duration: "14 weeks",
    students: "12,340",
    rating: 4.7,
    level: "Advanced",
    color: "from-green-500 to-emerald-500",
  },
];

export const FeaturedCourses = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(24,100%,55%,0.03)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">
            FEATURED COURSES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            In-Demand Skills for the{" "}
            <span className="gradient-text">Digital Age</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Expert-crafted courses with hands-on labs, real-world projects, and
            industry certifications.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover-lift group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shrink-0`}
                >
                  <course.icon className="w-7 h-7 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                      {course.rating}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
          >
            Explore All Courses
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
