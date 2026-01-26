/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand-blue': '#2563eb', // Xanh dương Royal Thuý chọn
          'primary-navy': '#01579b',
          'accent-blue': '#3b82f6',
        },
      },
    },
    plugins: [],
  };