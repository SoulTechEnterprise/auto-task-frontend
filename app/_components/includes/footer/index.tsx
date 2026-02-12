import content from "@/app/_content/footer.json";

export function Footer() {
	return (
		<footer className="px-4 py-2 flex flex-col items-center border-t border-white/10">
			<p className="text-xs text-white/50">{content.copyright}</p>
		</footer>
	);
}
