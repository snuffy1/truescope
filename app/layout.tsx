import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../public/fonts/Cal_Sans/CalSans-Regular.ttf",
  variable: "--font-cal-sans",
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "TrueScope - Digital Strategies Built to Accelerate Growth",
  description:
    "Full-Stack Digital Growth for Startups: SEO + Social + Web + Content That Drives Measurable Revenue.",
  icons: {
    icon: [
      {
        url: "/logo/updatedLogo.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${calSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
