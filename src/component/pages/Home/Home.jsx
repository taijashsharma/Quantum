import React from "react";
import { Hero } from "./section/Hero";
import { FeaturedCourses } from "./section/FeaturedCourses";
import { Features } from "./section/Features";
import { Testimonials } from "./section/Testimonials";
import { CTA } from "./section/CTA";

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedCourses />
            <Features />
            <Testimonials />
            <CTA />
        </>
    );
};

export default Home;
