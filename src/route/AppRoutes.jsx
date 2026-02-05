import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/component/pages/Home/Home";
import CyberSecurity from "@/component/pages/Roadmaps/cybersecurity/CyberSecurity";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmap" element={<CyberSecurity />} />
        </Routes>
    );
};

export default AppRoutes;
