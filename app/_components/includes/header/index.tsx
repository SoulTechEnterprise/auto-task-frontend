import Link from "next/link";
import content from "@/app/_content/header.json";
import { Button } from "@/components/ui/button";

export function Header() {
	return (
		<header className="flex justify-between px-4 py-2 items-center fixed top-0 left-0 bg-zinc-950 border-b border-solid border-white/10 w-screen z-10">
			<h1 className="font-bold text-white">{content.logo}</h1>

			<Button asChild>
				<Link href="/">{content.cta}</Link>
			</Button>
		</header>
	);
}
