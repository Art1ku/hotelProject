import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AH",
  description: "hotel project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} scroll="no">{children}</body>
    </html>
  );
}
