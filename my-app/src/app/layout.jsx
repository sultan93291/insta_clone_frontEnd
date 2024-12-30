import localFont from "next/font/local";
import "./globals.css";

// Define fonts with appropriate weights
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900", // Ensure the font file supports this range
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900", // Ensure the font file supports this range
});

// Optional metadata for SEO
export const metadata = {
  title: "Instagram",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
