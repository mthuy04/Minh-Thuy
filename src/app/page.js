// src/app/page.js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar"; // Gọi lại file bị bỏ quên

export default function Home() {
  return (
    <main className="relative bg-white">
      {/* Navbar cố định trên cùng */}
      <Navbar />
      
      {/* Sidebar mạng xã hội chạy dọc bên trái */}
      <SocialSidebar />
      
      {/* Nội dung chính: Sắp xếp theo đúng thứ tự điều hướng */}
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Contact />
      </div>

      {/* Footer kết thúc trang */}
      <Footer />
    </main>
  );
}
