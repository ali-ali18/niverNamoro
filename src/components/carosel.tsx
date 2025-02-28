import { Card, CardContent } from "./ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

// Importe todas as imagens
import foto1 from "../assets/foto-1.jpg";
import foto2 from "../assets/foto-2.jpg";
import foto3 from "../assets/foto-3.jpg";
import foto4 from "../assets/foto-4.jpg";
import foto5 from '../assets/FotoZoada.jpg'
import foto6 from '../assets/FotoCasa.jpg'
import foto7 from '../assets/fotoAnoNovo.jpg'
import foto8 from '../assets/fotoEvento.jpg'
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

const Db = [
	{
		id: 1,
		img: foto1, 
	},
	{
		id: 2,
		img: foto2,
	},
	{
		id: 3,
		img: foto3,
	},
	{
		id: 4,
		img: foto4,
	},
	{
		id: 5,
		img: foto5,
	},
	{
		id: 6,
		img: foto6,
	},
	{
		id: 7,
		img: foto7,
	},
	{
		id: 8,
		img: foto8,
	},
];

export default function CarouselComponent() {
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 3000);

	return (
		<Carousel className="w-full max-w-xs">
			<CarouselContent>
				{Db.map((item) => (
					<CarouselItem key={item.id}>
						<Card className="w-full max-w-full">
							<CardContent className="w-full h-[300px] p-2">
								{ loading ? (
									<div className="w-full h-full">
										<Skeleton className="w-full h-full p-2 rounded-lg" />
									</div>
								) : (
									<img
									src={item.img}
									alt={`Foto ${item.id}`}
									className="w-full h-full object-cover rounded-md"
									loading="lazy"
								/>
								)}
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="hidden sm:flex">
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</Carousel>
	);
}
