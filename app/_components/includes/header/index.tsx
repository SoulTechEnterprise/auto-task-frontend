import content from "@/app/_content/header.json";

export function Header() {
	return (
		<header className="fixed top-0 left-0 bg-zinc-950 border-b border-solid border-white/10 w-screen z-10">
			<div className="m-auto flex justify-between px-4 py-2 items-center max-w-2xl">
				<h1 className="font-bold text-white">{content.logo}</h1>
			</div>
		</header>
	);
}
