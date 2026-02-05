
import FeaturesSection from "./sections/FeaturesSection";
import RoadmapSection from "./sections/RoadmapSection";
import CTASection from "./sections/CTASection";
import HeroSection from "../Common/HeroSection";
import { heroCyberSecurityData } from "../Data/CyberSecurity";


const CyberSecurity = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* ================= HERO ================= */}
            <HeroSection data={heroCyberSecurityData} />

            {/* ================= FEATURES ================= */}
            <FeaturesSection />

            {/* ================= ROADMAP ================= */}
            <RoadmapSection />

            {/* ================= CTA ================= */}
            <CTASection />
        </div>
    );
};

export default CyberSecurity;
