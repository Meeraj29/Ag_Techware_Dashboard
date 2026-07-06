import { Sparkles, ArrowRight } from "lucide-react";

export default function CCTInsights() {
	return (
		<div className="bg-linear-to-r from-[#0863BD] to-[#042E57] h-80 rounded-xl p-8 flex flex-col justify-between text-white md:w-lg shrink-0 relative overflow-hidden">
			<div className="z-10 relative">
				<Sparkles className="w-8 h-8 text-white mb-4" />
				<h3 className="text-2xl font-bold mb-3">CCT Insights</h3>
				<p className="text-sm text-blue-100 leading-relaxed mb-8">
					Your team's document processing speed has increased by 18% this month.
					Keep up the momentum!
				</p>
			</div>

			<a
				href="#"
				className="flex items-center gap-2 text-sm font-semibold hover:text-blue-200 transition-colors z-10 w-max group"
			>
				<span className="border-b border-white pb-0.5 group-hover:border-blue-200 transition-colors">
					View Detailed Report
				</span>
				<ArrowRight className="w-4 h-4" />
			</a>

			{/* Decorative gradient overlay */}
			<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
		</div>
	);
}
