"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import content from "@/app/_content/form.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
	name: z.string().min(2),
	phone: z.string().min(11).max(11),
});

type Schema = z.infer<typeof schema>;

export function Form() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<Schema>({
		resolver: zodResolver(schema),
	});

	async function onSubmit(data: Schema) {
		console.log(data);

		reset();
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
					{...register("phone")}
				/>
			</div>

			<Button disabled={isSubmitting}>{content.submit}</Button>
		</form>
	);
}
