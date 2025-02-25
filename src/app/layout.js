import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Adhim Tanfitra | Personal Website",
  description: "A personal portfolio showcasing Tanfitra projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-[#01161b] text-[#fff]`}> 
        {children}
      </body>
    </html>
  );
}
