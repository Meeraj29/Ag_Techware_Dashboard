"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ActivityTimelineItem } from '../../types/customers';

export function ActivityTimeline() {
	const timeline = useSelector((state: RootState) => state.customers.timeline);

	const getIconStyles = (type: string) => {
		switch (type) {
			case 'payment':
				return {
					iconSrc: '/payment.svg',
					bg: 'bg-[#E6F4EA]',
					border: 'border-[#13803B]/20',
					alt: 'Payment Processed',
				};
			case 'shipment':
				return {
					iconSrc: '/shipmentoutbound.svg',
					bg: 'bg-[#E8F0FE]',
					border: 'border-[#1A73E8]/20',
					alt: 'Shipment Outbound',
				};
			case 'alert':
				return {
					iconSrc: '/customeralert.svg',
					bg: 'bg-[#FEF7E0]',
					border: 'border-[#F9AB00]/20',
					alt: 'Customs Alert',
				};
			case 'hold':
				return {
					iconSrc: '/customeralert.svg',
					bg: 'bg-[#FCE8E6]',
					border: 'border-[#C5221F]/20',
					alt: 'Account Hold',
				};
			default:
				return {
					iconSrc: '/alert.svg',
					bg: 'bg-gray-50',
					border: 'border-gray-200',
					alt: 'Activity',
				};
		}
	};

	return (
		<div className="bg-white rounded-[24px] border border-[#EBEBEB] p-6 w-full shadow-sm">
			<h2 className="text-[18px] font-bold text-black mb-5">Activity Timeline</h2>

			<div className="flex flex-col">
				{timeline.map((item: ActivityTimelineItem, index: number) => {
					const styles = getIconStyles(item.type);
					return (
						<div
							key={item.id}
							className={`flex items-start gap-4 py-4 ${index !== timeline.length - 1 ? 'border-b border-[#F5F5F5]' : ''
								}`}
						>
							{/* Icon Circle */}
							<div className={`w-10 h-10 rounded-full border ${styles.bg} ${styles.border} flex items-center justify-center shrink-0`}>
								<img
									src={styles.iconSrc}
									alt={styles.alt}
									className="w-10 h-10 object-contain"
								/>
							</div>

							{/* Text Content */}
							<div className="flex-1 min-w-0 pt-0.5">
								<h3 className="text-[15px] font-semibold text-[#111111]">
									{item.title}
								</h3>
								<p className="text-[13px] text-[#737373] mt-1 leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}