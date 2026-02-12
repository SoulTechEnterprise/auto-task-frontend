import axios from "axios";

export interface IAxiosN8N {
	name: string;
	phone: string;
}

export async function AxiosN8N(data: IAxiosN8N) {
	await axios.post(process.env.NEXT_PUBLIC_AXIOS_N8N!, {
		data,
	});
}
