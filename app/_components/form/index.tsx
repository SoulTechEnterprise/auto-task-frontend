"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { sendGTMEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";
import { z } from "zod";
import content from "@/app/_content/form.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AxiosN8N } from "@/lib/n8n";

const schema = z.object({
	name: z.string().min(2),
	phone: z
		.string()
		.min(15)
		.max(15)
		.transform((val) => val.replace(/\D/g, "")),
});

type Schema = z.infer<typeof schema>;

export function Form() {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<Schema>({
		resolver: zodResolver(schema),
	});

	const registerPhoneWithMask = useHookFormMask(register);

	async function onSubmit(data: Schema) {
		await AxiosN8N(data);

		const nameParts = data.name.trim().split(/\s+/);
		const firstName = nameParts[0];
		const lastName = nameParts.length > 1 ? nameParts.pop() : "";

		sendGTMEvent({
			event: "lead",
			user_first_name: firstName,
			user_last_name: lastName,
			user_phone: data.phone,
		});

		router.push("/thank-you");

		reset();
	}

	return (
		<form
			id="form"
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4"
		>
			<div className="flex flex-col gap-2">
				<Label htmlFor="name">{content.name.label}</Label>
				<Input
					id="name"
					placeholder={content.name.placeholder}
					{...register("name")}
				/>
			</div>

			<div className="flex flex-col gap-2">
				<Label htmlFor="phone">{content.phone.label}</Label>
				<Input
					id="phone"
					placeholder={content.phone.placeholder}
					{...registerPhoneWithMask("phone", "(99) 99999-9999")}
				/>
			</div>

			<Button disabled={isSubmitting}>{content.submit}</Button>
		</form>
	);
}
