// src/components/ProBackground.js
"use client";
import { motion } from "framer-motion";

export default function ProBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
      {/* Quả cầu năng lượng 1 */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 100, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[15%] -left-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"
      />

      {/* Quả cầu năng lượng 2 */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, -120, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[130px]"
      />

      {/* Lưới tọa độ mờ tạo cảm giác hệ thống */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
    </div>
  );
}