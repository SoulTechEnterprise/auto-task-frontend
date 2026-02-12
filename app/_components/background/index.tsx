export function BackgroundBlobs() {
	return (
		<div className="fixed inset-0 -z-10 overflow-hidden bg-zinc-950 pointer-events-none">
			{/* Bola 1 - Topo Esquerda */}
			<div className="absolute top-0 -left-4 w-60 h-60 md:w-96 md:h-96 bg-indigo-900 rounded-full mix-blend-screen filter blur-[60px] md:blur-[100px] opacity-15 md:opacity-20 animate-blob" />

			{/* Bola 2 - Topo Direita */}
			<div className="absolute top-0 -right-4 w-60 h-60 md:w-96 md:h-96 bg-blue-900 rounded-full mix-blend-screen filter blur-[60px] md:blur-[100px] opacity-15 md:opacity-20 animate-blob animation-delay-2000" />

			{/* Bola 3 - Baixo Esquerda (Centralizei melhor no mobile) */}
			<div className="absolute -bottom-8 left-10 md:left-20 w-60 h-60 md:w-96 md:h-96 bg-violet-900 rounded-full mix-blend-screen filter blur-[60px] md:blur-[100px] opacity-15 md:opacity-20 animate-blob animation-delay-4000" />
		</div>
	);
}
