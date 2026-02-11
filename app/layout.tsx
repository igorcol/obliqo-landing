import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/ui/SmoothScroll";

// Configuração das fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "/// OBLIQO ///",
  description: "Digital Archive of the Underground Scene.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased bg-obliqo-black text-white selection:bg-obliqo-red selection:text-black"
        )}
      >
        
        {/* O Conteúdo rola por cima */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}