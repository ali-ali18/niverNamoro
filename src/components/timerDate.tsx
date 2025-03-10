import { useEffect, useState } from "react";
import {
	differenceInYears,
	differenceInMonths,
	differenceInDays,
	differenceInHours,
	differenceInMinutes,
	differenceInSeconds,
} from "date-fns";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Lens } from "./magicui/lens";

const dataPedidoNamoro = new Date("2025-01-28T19:20:00");

export default function Timer() {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setNow(new Date()), 1000);
		return () => clearInterval(interval);
	}, []);

	const years = differenceInYears(now, dataPedidoNamoro);
	const monthsTotal = differenceInMonths(now, dataPedidoNamoro);
	const months = monthsTotal - years * 12;
	const tempDate = new Date(dataPedidoNamoro);
	tempDate.setFullYear(tempDate.getFullYear() + years);
	tempDate.setMonth(tempDate.getMonth() + months);
	const days = differenceInDays(now, tempDate);
	const hours = differenceInHours(now, tempDate) % 24;
	const minutes = differenceInMinutes(now, tempDate) % 60;
	const seconds = differenceInSeconds(now, tempDate) % 60;

	return (
		<Card className="relative max-w-md shadow-none">
			<CardHeader>
				<Lens
					zoomFactor={2}
					lensSize={150}
					isStatic={false}
					ariaLabel="Zoom Area"
				>
					<img
						src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="foto com a muié"
						width={500}
						height={500}
					/>
				</Lens>
			</CardHeader>
			<CardContent>
				<CardTitle className="text-2xl">Nosso tempo juntos ❤️</CardTitle>
				<CardDescription>
					Um timer pra eu nunca esquecer quanto tempo estamos namorando
				</CardDescription>
			</CardContent>
			<CardFooter className="max-w-full flex flex-col items-center justify-center text-lg p-4 capitalize text-center text-muted-foreground gap-4">
				<div className="grid grid-cols-3 gap-2 w-full max-w-[240px] mx-auto">
					{years >= 0 && (
						<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center  rounded-md p-1.5">
							<span className="font-medium">{years}</span>
							<span className="text-sm">{years === 1 ? "ano" : "anos"}</span>
						</Card>
					)}
					{months >= 0 && (
						<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center  rounded-md p-1.5">
							<span className="font-medium">{months}</span>
							<span className="text-sm">{months === 1 ? "mês" : "meses"}</span>
						</Card>
					)}
					{days >= 0 && (
						<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center  rounded-md p-1.5">
							<span className="font-medium">{days}</span>
							<span className="text-sm">{days === 0 ? "dia" : "dias"}</span>
						</Card>
					)}
				</div>
				<div className="grid grid-cols-3 gap-2 w-full max-w-[240px] mx-auto">
					{hours >= 0 && (
						<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center rounded-md p-1.5">
							<span className="font-medium">{hours}</span>
							<span className="text-sm">{hours === 0 ? "hora" : "horas"}</span>
						</Card>
					)}
					{minutes >= 0 && (
						<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center rounded-md p-1.5">
							<span className="font-medium">{minutes}</span>
							<span className="text-sm">
								{minutes === 1 ? "minuto" : "minutos"}
							</span>
						</Card>
					)}
					{seconds >= 0 && (
						<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center  rounded-md p-1.5">
							<span className="font-medium">{seconds}</span>
							<span className="text-sm">
								{seconds === 1 ? "segundo" : "segundos"}
							</span>
						</Card>
					)}
				</div>
			</CardFooter>
		</Card>
	);
}
