import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketing Demo Page",
  description: "Made by Declared Space Studios for Any Small Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen w-screen">
          <Header />
            <div className="flex flex-grow flex-row justify-center max-w-full max-h-full overflow-auto">
              {children}
            </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
