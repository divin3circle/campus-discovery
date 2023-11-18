import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "Campus Discovery🔎",
  description: "Get Started😊",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1140px] mt-0 mx-auto">
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
