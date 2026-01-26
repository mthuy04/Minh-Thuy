// src/components/ParticlesBackground.js
"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10 pointer-events-none" // Đặt z-index âm để nó nằm dưới cùng
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // Tắt chế độ fullscreen mặc định để nó nằm gọn trong thẻ cha
        background: {
          color: {
            value: "transparent", // Nền trong suốt để đè lên nền trắng/xám của web
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Di chuột vào các hạt sẽ hút lại gần chuột
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#94a3b8", // Màu xám xanh của hạt (Slate-400)
          },
          links: {
            color: "#cbd5e1", // Màu đường kẻ nối (Slate-300)
            distance: 150,
            enable: true,
            opacity: 0.3, // Độ mờ của đường kẻ (thấp thôi cho đỡ rối)
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1, // Tốc độ di chuyển CHẬM thôi cho sang
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60, // Số lượng hạt (đừng nhiều quá kẻo rối mắt)
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle", // Hình dạng hạt
          },
          size: {
            value: { min: 1, max: 3 }, // Kích thước hạt nhỏ nhỏ xinh xinh
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;