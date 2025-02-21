import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister"; // ✅ Import the client component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Keep metadata in a server component
export const metadata = {
  title: "My PWA",
  description: "A Progressive Web App built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ServiceWorkerRegister />  {/* ✅ This runs the service worker registration */}
        {children}
      </body>
    </html>
  );
}
