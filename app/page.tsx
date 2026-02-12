import {
	ChartNoAxesCombined,
	Check,
	InfinityIcon,
	MoveDown,
	MoveRight,
	RefreshCcw,
	Rocket,
	Shield,
	TriangleAlert,
} from "lucide-react";
import content from "@/app/_content/home.json";
import { Button } from "@/components/ui/button";
import { CapacitiesCard } from "./_components/cards/capacities";
import { Form } from "./_components/form";

export default function Home() {
	return (
		<main className="[&_section]:px-4 [&_section]:py-8">
			<section className="min-h-screen flex flex-col gap-4 justify-center items-center">
				<div className="size-12 rounded border border-solid border-white flex items-center justify-center">
					<Rocket className="size-4 text-white" />
				</div>

				<h2 className="text-white text-center text-2xl font-bold uppercase">
					{content.hero.title}
				</h2>

				<p className="text-white text-center">{content.hero.description}</p>

				<Button>
					{content.hero.cta} <MoveRight className="size-4" />
				</Button>
			</section>

			<section className="flex flex-col gap-8">
				<h2 className="text-2xl text-white font-bold text-center">
					{content.evolution.title}
				</h2>

				<div className="border-l-2 border-l-red-500 p-4 border-2 border-white/5 rounded flex flex-col gap-8">
					<div className="flex justify-between gap-4">
						<span className="text-white">{content.evolution.oldWay.label}</span>

						<div className="px-2 py-1 border border-solid border-red-500 rounded">
							<span className="text-red-500 uppercase text-xs font-bold">
								{content.evolution.oldWay.tag}
							</span>
						</div>
					</div>

					<div className="flex gap-4 items-center">
						<TriangleAlert className="size-8 text-red-500" />

						<div className="flex flex-col">
							<span className="text-white text-lg font-bold">
								{content.evolution.oldWay.title}
							</span>
							<span className="text-white/75 text-sm">
								{content.evolution.oldWay.description}
							</span>
						</div>
					</div>
				</div>

				<MoveDown className="size-8 text-white self-center" />

				<div className="border-l-2 border-l-blue-500 border-2 border-white/5 p-4 rounded flex flex-col gap-8">
					<div className="flex justify-between gap-4">
						<span className="text-white">{content.evolution.newWay.label}</span>

						<div className="px-2 py-1 border border-solid border-blue-500 rounded font-bold">
							<span className="text-blue-500 uppercase text-xs">
								{content.evolution.newWay.tag}
							</span>
						</div>
					</div>

					<div className="flex gap-4 items-center">
						<Check className="size-8 text-blue-500" />

						<div className="flex flex-col">
							<span className="text-white text-lg font-bold">
								{content.evolution.newWay.title}
							</span>
							<span className="text-white/75 text-sm">
								{content.evolution.newWay.description}
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className="flex flex-col gap-8">
				<h2 className="text-2xl text-white font-bold text-center">
					{content.capacities.title}
				</h2>

				<div className="grid grid-cols-2 gap-4">
					{content.capacities.items.map((el, index) => {
						const arr = [RefreshCcw, Shield, InfinityIcon, ChartNoAxesCombined];

						return (
							<CapacitiesCard
								key={el.title}
								title={el.title}
								desc={el.description}
								icon={arr[index]}
							/>
						);
					})}
				</div>
			</section>

			<section className="flex flex-col gap-8">
				<h2 className="text-2xl text-white font-bold text-center">
					{content.cta.title}
				</h2>

				<Form />
			</section>
		</main>
	);
}
