import { Check, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
	return (
		<main className="flex items-center justify-center min-h-screen [&_section]:px-4 [&_section]:py-8">
			<section className="flex flex-col gap-4 items-center justify-center">
				<div className="flex items-center justify-center size-24 bg-blue-500 rounded-full shadow-[0_0_30px] shadow-blue-500">
					<Check className="size-16 text-white" />
				</div>

				<h1 className="text-center text-4xl font-bold">
					Transmission Successfull
				</h1>
				<p className="text-center text-white/75">
					Thank you! Your request has been received. We will analyse your needs
					and call your shortly!
				</p>

				<Button asChild>
					<Link href={process.env.NEXT_PUBLIC_WHATSAPP!}>
						Contact via Whatsapp
						<MessageCircle className="size-4" />
					</Link>
				</Button>
			</section>
		</main>
	);
}
