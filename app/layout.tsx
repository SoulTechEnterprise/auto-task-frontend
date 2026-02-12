import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { BackgroundBlobs } from "./_components/background";
import { Footer } from "./_components/includes/footer";
import { ThemeProvider } from "./_components/theme/theme-provider";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pare de Perder Tempo: Automação para Empresas | AutoTask",
	description:
		"Sua empresa no piloto automático. Integramos seus apps favoritos para eliminar o trabalho manual e erros humanos. Aumente sua produtividade hoje.",
	keywords: [
		"automação",
		"produtividade",
		"n8n",
		"inteligência artificial",
		"gestão de tempo",
		"automatização de processos",
	],
	openGraph: {
		title: "AutoTask | O Fim das Tarefas Repetitivas",
		description:
			"Sua empresa rodando no piloto automático. Descubra como economizar tempo e eliminar erros humanos.",
		url: "https://auto-taks.soultech.agency",
		siteName: "AutoTask",
		locale: "pt_BR",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<GoogleTagManager
				gtmScriptUrl={process.env.NEXT_PUBLIC_URL_GOOGLE_TAG_MANAGER!}
				gtmId={process.env.NEXT_PUBLIC_ID_GOOGLE_TAG_MANAGER!}
			/>

			<body className={`${montserrat.variable} antialiased relative`}>
				<BackgroundBlobs />
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<Footer />
			</body>
		</html>
	);
}
