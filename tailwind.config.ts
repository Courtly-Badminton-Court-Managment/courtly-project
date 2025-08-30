import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#414141",
        brownSugar: "#A86D59",
        cherry: "#DEA4AF",
        platinum: "#E2E2E2",
        cambridge: "#75B2A0",
        sea: "#2E8762",
        pine: "#1E7068",
        walnut: "#696159",
        lion: "#A3834C",
        courtBg: "#EDE5DA", // โทนพื้นหลังสว่าง (ใกล้ภาพ)
        courtDeep: "#2B6F66" // เขียวเข้มสำหรับปุ่ม
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
