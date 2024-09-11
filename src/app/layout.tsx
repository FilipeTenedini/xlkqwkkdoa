import type { Metadata } from "next";
import localFont from "next/font/local";
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
      </head>
      <body
        className={`${geistSans.variable} ${cinzelSb.variable} ${cinzel.variable} ${geistMono.variable} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
