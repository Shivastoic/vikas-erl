import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

// Metadata for SEO
export const metadata = {

    title: "Vikas Excellent Roadlines",
    description: "Welcome to Vikas Excellent Roadlines — where opportunity meets innovation! We're a community of passionate coders, creators, and problem-solvers.",
    keywords: "coding club, programming, student coding, coding education, learn to code, coding workshops, software development, computer science, coding tutorials, tech community, student projects, coding resources, programming languages, hackathons, coding bootcamp, student support",
    authors: { name: "Shiva" },
    openGraph: {

        title: "Vikas Excellent Roadlines",
        description: "Welcome to Vikas Excellent Roadlines — where opportunity meets innovation! We're a community of passionate coders, creators, and problem-solvers.",
        url: "https://codifyclub.vercel.app",
        images: [
            {
                url: "https://codifyclub.vercel.app/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
            },
        ],

    },
    twitter: {

        card: "summary_large_image",
        title: "Vikas Excellent Roadlines",
        description: "Welcome to Vikas Excellent Roadlines — where opportunity meets innovation! We're a community of passionate coders, creators, and problem-solvers.",
        images: ["https://codifyclub.vercel.app/twitter-image.jpg"],

    },
    icons: {

        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon.png", type: "image/png" },
        ],

    },

};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${openSans.variable} ${montserrat.variable} antialiased bg-[#F8f8ff]`}
            >   
                <Header />
                <main>
                    {children}
                </main>
                    
            </body>
        </html>
    );
}
