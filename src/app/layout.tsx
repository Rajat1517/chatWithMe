import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Tldr from "./components/tldr";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rajat Mishra | Frontend Developer Portfolio",
  description:
    "Portfolio of Rajat Mishra, a frontend developer specializing in React and React Native. Explore projects, skills, experience, and more.",
  keywords: [
    "Rajat Mishra",
    "Frontend Developer",
    "React",
    "React Native",
    "Portfolio",
    "UI/UX",
    "India",
    "TCS R&D",
    "Web Development",
  ],
  openGraph: {
    title: "Rajat Mishra | Frontend Developer Portfolio",
    description:
      "Interactive portfolio of Rajat Mishra. Discover projects, skills, and achievements.",
    url: "https://portfolio-rjm.netlify.app/",
    images: [
      {
        url: "/dp.jpg",
        width: 400,
        height: 400,
        alt: "Rajat Mishra Profile Photo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className='min-h-screen bg-gray-400 px-6 py-4'> */}
        <Tldr />
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
