"use client";

import { Button } from "@/components/ui/button";

export interface IScrollToForm {
	text: string;
}

export function ScrollToForm({ text }: IScrollToForm) {
	const scrollToForm = () => {
		const section = document.getElementById("form");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return <Button onClick={scrollToForm}>{text}</Button>;
}
