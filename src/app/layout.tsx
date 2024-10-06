import type { Metadata } from "next";
import localFont from "next/font/local";
import MetaPixel from "../pixels/MetaPixel";
import GooglePixel from "../pixels/GooglePixel";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const cinzel = localFont({
  src: "./fonts/Cinzel-Regular.ttf",
  variable: "--font-cinzel",
  weight: "400 700",
});

const cinzelSb = localFont({
  src: "./fonts/Cinzel-SemiBold.ttf",
  variable: "--font-cinzel-sb",
  weight: "400 700",
});

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-Poppins",
  weight: "400 700",
});

const poppinsSb = localFont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: "--font-Poppins-sb",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Descomplicando Lentes de Resina",
  description: "Taís Aurich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/image.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${cinzelSb.variable} ${cinzel.variable} ${poppinsSb.variable} ${poppins.variable} ${geistMono.variable} bg-white antialiased`}
      >
        <MetaPixel />
        <GooglePixel />
        {children}
      </body>
    </html>
  );
}
