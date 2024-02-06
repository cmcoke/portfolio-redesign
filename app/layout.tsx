import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Charles Coke | Crafting Beautiful, Interactive Web Experiences",
  description: "Delivering exceptional user experiences through pixel-perfect UIs and performance-driven web development. Explore my portfolio.",
  keywords: "front-end developer, web developer, HTML5, CSS3, SCSS, SASS, JavaScript, Typescript, React, Nextjs, PHP, WordPress, Sanity, GSAP, Framer Motion, responsive design, accessibility, scalable"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen grid grid-rows-[8.438rem_1fr_auto]">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
