import { Lavishly_Yours, MonteCarlo } from "next/font/google";
import "./globals.css";

const lavishly = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly",
});

const monteCarlo = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monteCarlo",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lavishly.variable} ${monteCarlo.variable}`}>
        {children}
      </body>
    </html>
  );
}
