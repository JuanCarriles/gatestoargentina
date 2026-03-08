import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gatestoargentina.com'),
  icons: {
    icon: '/images/gates-to-arg-LOGO-SIMPLIFICADO.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
