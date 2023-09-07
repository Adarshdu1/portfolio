"use client";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
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
    </>
  );
}
