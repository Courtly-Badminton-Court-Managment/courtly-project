import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","600","700"],
  variable: "--font-poppins",
});

export const metadata = { title: "Courtly" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen font-sans bg-courtBg text-onyx">{children}</body>
    </html>
  );
}
