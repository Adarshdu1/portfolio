"use client";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        {/* Header */}
        <div className="fixed w-full">
          <Header />
        </div>
        {/* Hero page */}
        <Hero />
        {/* Education */}
        <Education />
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
