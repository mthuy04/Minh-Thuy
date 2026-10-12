// src/app/page.js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />

      {/* Recruiter-first order — matches the navigation */}
      <main id="main-content" className="relative flex flex-col bg-white">
        <Hero />
        <Experience />
        <CaseStudies />
        <Skills />
        <Education />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
