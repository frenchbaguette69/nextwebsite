import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // Voeg toe wat je gebruikt
});

export const metadata: Metadata = {
  title: "Next Website",
  description: "Professionele website laten maken",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
