import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";



export const metadata = {
  title: 'Motus & Manus',
  description: 'Sundhedsordning med fysioterapi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-primary bg-secondary text-primary">
        <Header/>
        <main>{children}</main>
        {/* Din Footer */}
      </body>
    </html>
  );
}
