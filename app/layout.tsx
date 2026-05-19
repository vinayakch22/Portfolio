import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScrolling";
import CustomCursor from "./components/CustomCursor";

export const metadata: Metadata = {
  title: "Chakka Kishore Sri Valli Vinayak",
  description: "I'm a full stack developer passionate about solving real-world problems with clean code and modern web technologies. Explore my portfolio to see the work that drives my career.",
  keywords: "Full Stack Developer, Web Developer, Next Developer, React Developer, Node.js, JavaScript, Portfolio, MongoDB, MERN Stack, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans"> 
        <CustomCursor />
        {children}
        <SmoothScroll />
      </body>
    </html>
  );
}
