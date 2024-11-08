import type { Metadata } from "next";

import "./globals.css";
import NavBarAdmin from "../components/NavBarAdmin";
import { auth } from "../auth";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import { nunito, mPlusRounded } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Candy Cortantes - Tienda",
  description: "El stock más completo de cortantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={mPlusRounded.className}>
        <section className="min-h-dvh">{children}</section>
      </body>
    </html>
  );
}
