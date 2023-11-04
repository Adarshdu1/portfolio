"use client";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import TechStack from "@/components/TechStack";
import ScrollTrack from "@/components/ScrollTrack";
import { BrowserRouter } from "react-router-dom";
export default function Home() {
  return (
    <>
      <BrowserRouter>
        {/* Scroll Tracker */}
        <ScrollTrack />
        {/* Header */}
        <div className="fixed w-full">
          <Header />
        </div>
        {/* Hero page */}
        <Hero />
        {/* Education */}
        <Education />
        {/* TechStack */}
        <TechStack />
        {/* Project */}
        <Project />
        {/* Contact */}
        <Contact />
        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </>
  );
}
