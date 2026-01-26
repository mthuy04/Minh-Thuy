// src/components/Projects.js
"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Layout, Code, Cpu, LineChart, Lock, Globe, FileText } from "lucide-react";

const projectList = [
  {
    title: "Shopee Strategic Sales & EIS",
    desc: "Thiết kế hệ thống quản trị bán hàng tập trung dựa trên mô hình REA, triển khai 6 SQL Triggers để tự động hóa kiểm soát tồn kho và đối soát doanh thu sàn TMĐT.",
    tech: ["MySQL Triggers", "REA Modeling", "PHP Backend"],
    icon: <Database size={18} />,
    image: "/images/shopee-eis.jpg", 
    githubLink: "https://github.com/mthuy04/Sale-Management-System-for-Shopee-Seller",
    reportLink: "https://drive.google.com/file/d/1tqGUUYLmuTCLznEYKfGAVVayiNz6MDrJ/view?usp=drive_link"
  },
  {
    title: "Healthcare CRM System",
    desc: "Thiết kế nền tảng quản lý y tế tập trung vào đặc tả yêu cầu (SRS), sơ đồ ERD tối ưu và bảo mật dữ liệu bệnh nhân thông qua phân quyền RBAC.",
    tech: ["Requirement Eng", "RBAC", "ERD"],
    icon: <Database size={18} />,
    reportLink: "LINK_DRIVE_REPORT_HEALTHCARE",
    image: "/images/healthcare.jpg"
  },
  {
    title: "Cocoon Vietnam CRM (Leader)",
    desc: "Dẫn dắt dự án triển khai HubSpot CRM, lập kế hoạch chi tiết bằng MS Project và thiết lập ma trận RACI để tối ưu hóa quy trình marketing.",
    tech: ["HubSpot", "MS Project", "Risk Mgmt"],
    icon: <Layout size={18} />,
    reportLink: "https://drive.google.com/file/d/1xg3wxo0gSIqc8Qt_tBpiGH5rzTaztXxT/view?usp=drive_link",
    image: "/images/cocoon.jpg"
  },
  {
    title: "Shopee Business Process (MIS)",
    desc: "Phân tích tích hợp hệ thống WMS và các loại phí sàn TMĐT, đề xuất lộ trình tối ưu hóa quy trình vận hành và Logistics cho doanh nghiệp.",
    tech: ["MIS", "WMS", "Business Process"],
    icon: <Globe size={18} />,
    reportLink: "https://drive.google.com/file/d/1aiBTru_762AsDjmIeMl56QmyxZfO6BVr/view?usp=drive_link",
    image: "/images/shopee-mis.jpg"
  },
  {
    title: "Gender & Age Group AI (Leader)",
    desc: "Nghiên cứu triển khai mạng CNN Multi-task dựa trên ResNet50 để nhận diện giới tính và độ tuổi, ứng dụng các kỹ thuật Augmentation tiên tiến.",
    tech: ["ResNet50", "CNN", "Deep Learning"],
    icon: <Cpu size={18} />,
    githubLink: "https://github.com/mthuy04/Gender-Classification---Age-Group-Prdection-from-Vietnamese-Portrait-Image",
    reportLink: "https://drive.google.com/file/d/17kSbe6Xg7TaxrqD3JzJ54ys6SBhCRYgt/view?usp=drive_link",
    image: "/images/ai-gag.jpg"
  },
  {
    title: "Blockchain Voting System",
    desc: "Kiến trúc hệ thống bỏ phiếu phi tập trung sử dụng Smart Contract trên mạng Ethereum, đảm bảo tính minh bạch và dữ liệu không thể can thiệp.",
    tech: ["Solidity", "Ethereum", "Web3"],
    icon: <Lock size={18} />,
    githubLink: "https://github.com/mthuy04/Blockchain-Decentralized-Voting-System",
    reportLink: "https://drive.google.com/file/d/13DkYTzOaxZvf62yosKcBAal9X5k0vw8D/view?usp=drive_link",
    image: "/images/blockchain.jpg"
  },
  {
    title: "TeacherBee LMS Platform",
    desc: "Phát triển nền tảng học trực tuyến với phân quyền RBAC chặt chẽ, xử lý triệt để xung đột đường dẫn MacOS/Windows đảm bảo tính nhất quán.",
    tech: ["PHP/SQL", "System Design", "UI/UX"],
    icon: <Code size={18} />,
    githubLink: "https://github.com/PhuongVu51/FinalProject",
    reportLink: "https://matham.page.gd/?i=1",
    image: "/images/teacherbee.jpg"
  },
  {
    title: "CampusTalk Social Network",
    desc: "Xây dựng mạng xã hội sinh viên theo kiến trúc 3 lớp (React/Flask/MariaDB), tích hợp bảo mật JWT và các tính năng tương tác thời gian thực.",
    tech: ["React/Flask", "MariaDB", "JWT"],
    icon: <Code size={18} />,
    githubLink: "https://github.com/mthuy04/micro-blog",
    reportLink: "https://micro-blog-2-dmfc0lufq-mthuy04s-projects.vercel.app/",
    image: "/images/campustalk.jpg"
  },
  {
    title: "Housing Price Prediction (Leader)",
    desc: "Xây dựng mô hình AI dự báo giá nhà sử dụng LightGBM và tối ưu hóa siêu tham số bằng Optuna, đạt độ chính xác cao trong phân tích thị trường.",
    tech: ["LightGBM", "Optuna", "Data Science"],
    icon: <LineChart size={18} />,
    reportLink: "https://drive.google.com/file/d/18i7xLnGhpFQGhnkgTYYBFKV--01Aute0/view?usp=drive_link",
    image: "/images/housing.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50/20 relative">
      <div className="main-container">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[0.9rem] mb-3">/ Technical Portfolio</span>
          <h2 className="text-[3.5rem] md:text-[5rem] font-black tracking-tighter text-slate-900 leading-none">
            Featured <span className="text-blue-600">Reports.</span>
          </h2>
          <p className="mt-4 text-[1.4rem] font-bold text-slate-400 uppercase tracking-widest">
            Detailed Case Studies & System Designs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white group rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] hover:shadow-blue-100 transition-all flex flex-col"
            >
              <div className="relative h-[200px] overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  onError={(e) => { e.target.src = "https://placehold.co/600x400/e2e8f0/1e293b?text=MIS+Project+Case"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl text-blue-600 shadow-lg">
                  {project.icon}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[1.8rem] font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-[1.4rem] text-slate-500 font-medium leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-50 text-slate-400 text-[0.9rem] font-black rounded-lg border border-slate-100 uppercase tracking-tight">
                      {t}
                    </span>
                  ))}
                </div>

                {/* NÚT ACTION: GitHub (nếu có) và View Case Study */}
                <div className="flex gap-3">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-slate-100 text-slate-900 rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-sm flex items-center justify-center"
                      title="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  <a 
                    href={project.reportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-[1.1rem] flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-lg"
                  >
                    <FileText size={18} /> View Case Study
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}