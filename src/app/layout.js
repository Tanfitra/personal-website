import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
    title: "Adhim Tanfitra | Personal Website",
    description:
        "A personal portfolio showcasing Tanfitra projects, skills, and experience.",
    keywords: [
        "Personal Website",
        "Adhim Tanfitra",
        "Portfolio",
        "Frontend Developer",
    ],
    icons: {
        icon: "/assets/image/man.png", //
    },
    authors: [{ name: "Adhim Tanfitra" }],
    openGraph: {
        title: "Adhim Tanfitra | Personal Website",
        description:
            "A personal portfolio showcasing Adhim Tanfitra projects, skills, and experience.",
        url: "https://tanfitra.vercel.app/",
        siteName: "Adhim Tanfitra",
        images: [
            {
                url: "https://cdn.discordapp.com/attachments/1005377975732142221/1445956069007294588/adhim-tanfitra.jpg",
                width: 800,
                height: 600,
                alt: "Adhim Tanfitra",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    other: {
        "google-site-verification":
            "zkQ2ODSmcXqDck1efOZ3H04i59TQpemy-zpn_C_LbtM",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} antialiased bg-[#01161b] text-[#fff]`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
