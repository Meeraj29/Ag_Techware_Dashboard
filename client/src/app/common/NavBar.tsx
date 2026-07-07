import Link from "next/link";
import Image from "next/image";
import { Search, Settings, Bell, Menu } from "lucide-react";
import Logo from "../assets/Logo/agtechlogo.svg";

export default function NavBar({
	onMenuClick,
	showLogo,
}: {
	onMenuClick?: () => void;
	showLogo?: boolean;
}) {
	return (
		<header className="flex h-20 shrink-0 items-center justify-between border-b border-gray-200 bg-white shadow-lg px-4 lg:px-8 z-10 relative">
			{/* Left side: Logo (full-page only) + Mobile menu toggle + Search */}
			<div className="flex items-center flex-1 gap-4">
				<button
					onClick={onMenuClick}
					className="lg:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100"
				>
					<Menu className="h-6 w-6" />
				</button>

				{showLogo && (
					<Link href="/" className="hidden lg:flex items-center mr-2 cursor-pointer">
						<Image
							src={Logo}
							alt="AG Techware Logo"
							width={160}
							height={32}
							className="w-auto h-8 object-contain"
						/>
					</Link>
				)}

				<div className="relative w-full max-w-5xl">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
					</div>
					<input
						type="text"
						className="block w-full rounded-lg border border-gray-200 bg-gray-50 py-2 sm:py-2.5 pl-9 sm:pl-10 pr-4 text-[13px] sm:text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary transition-all"
						placeholder="Search shipments, jobs..."
					/>
				</div>
			</div>

			{/* Right side: Actions & Profile */}
			<div className="flex items-center gap-3 sm:gap-5">
				<button className="rounded-full p-2.5 cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors">
					<Settings className="h-5 w-5" />
				</button>
				<button className="rounded-full p-2.5 cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors">
					<Bell className="h-5 w-5" />
				</button>
				<div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-gray-200">
					<div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200 bg-black flex items-center justify-center text-white">
						<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
						</svg>
					</div>
					<div className="hidden flex-col md:flex">
						<span className="text-sm font-bold text-gray-900 leading-tight">
							John
						</span>
						<span className="text-[13px] text-gray-500 leading-tight">
							john@...
						</span>
					</div>
				</div>
			</div>
		</header>
	);
}
