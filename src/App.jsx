import "./App.css";
import { Footer } from "./component/layout/Footer";
import { Navbar } from "./component/layout/Navbar";
import { CTA } from "./component/pages/Home/CTA";
import { FeaturedCourses } from "./component/pages/Home/FeaturedCourses";
import { Features } from "./component/pages/Home/Features";
import { Hero } from "./component/pages/Home/Hero";
import { Testimonials } from "./component/pages/Home/Testimonials";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedCourses />
            <Features />
            <Testimonials />
            <CTA/>
            <Footer />
        </>
    );
}

export default App;
