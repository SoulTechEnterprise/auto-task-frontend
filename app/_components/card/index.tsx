import type { LucideIcon } from "lucide-react";

export interface ICard {
	title: string;
	desc: string;
	icon: LucideIcon;
}

export function Card({ icon: Icon, title, desc }: ICard) {
	return (
		<div className="flex flex-col gap-4 border border-white/10 rounded p-4">
			<div className="size-8 bg-white/10 flex items-center justify-center">
				<Icon className="size-4 text-white" />
			</div>

			<div className="flex flex-col gap-2">
				<span className="text-white font-bold">{title}</span>
				<span className="text-white/75 text-xs">{desc}</span>
			</div>
		</div>
	);
}
