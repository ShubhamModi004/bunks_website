import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const metadata: Metadata = {
  title: "Bunk Undergarments | Premium Quality Cotton Briefs & Vests",
  description: "Discover unmatched comfort with Bunk's 100% combed premium cotton briefs and vests. Experience superior softness, breathability, and durability, perfect for everyday wear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bebasNeue.className}`}>{children}</body>
    </html>
  );
}
