import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import AppLayout from "./common/AppLayout";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AG Techware",
  description: "Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isCollapsed = cookieStore.get("agtech_sidebar_collapsed")?.value === "true";

  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} h-full bg-white text-gray-900`}>
        <AppLayout defaultCollapsed={isCollapsed}>{children}</AppLayout>
      </body>
    </html>
  );
}
