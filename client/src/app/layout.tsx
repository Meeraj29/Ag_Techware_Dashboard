import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import AppLayout from "./common/AppLayout";
import ReduxProvider from "./redux/ReduxProvider";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "AG Techware",
	description: "Logistics and supply chain management",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const isCollapsed =
		cookieStore.get("agtech_sidebar_collapsed")?.value === "true";

	return (
		<html lang="en" className={`h-full antialiased ${inter.variable}`}>
			<body className="h-full bg-white text-gray-900 font-sans">
				<ReduxProvider>
					<AppLayout defaultCollapsed={isCollapsed}>{children}</AppLayout>
				</ReduxProvider>
			</body>
		</html>
	);
}
