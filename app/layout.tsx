import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WAButton from "@/components/WAButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizza-Yo",
  description: "Pizza? Yo!!!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {/* Navbar */}
        <Nav />

        {/* Main content */}
        {children}

        {/* Footer */}
        <Footer />

        {/* WhatsApp floating button */}
        <WAButton />
      </body>
    </html>
  );
}
