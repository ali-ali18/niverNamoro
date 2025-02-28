import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
	{
		name: "Seu",
		username: "@Amorzinho",
		body: "Eu amo seu sorriso",
		img: "https://github.com/ali-ali18.png"
	  },
	  {
		name: "Seu",
		username: "@Amorzinho",
		body: "Eu amo seus olhos",
		img: "https://github.com/ali-ali18.png"
	  },
	  {
		name: "Seu",
		username: "@Amorzinho",
		body: "Eu amo seus cabelos",
		img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg"
	  },
	  {
		name: "Seu",
		username: "@Amorzinho",
		body: "Eu amo seu jeito",
		img: "https://github.com/ali-ali18.png"
	  },
	  {
		name: "Seu",
		username: "@Amorzinho",
		body: "Eu amo seu coração",
		img: "https://github.com/ali-ali18.png"
	  },
	  {
		name: "Seu",
		username: "@Amorzinho",
		body: "Eu amo seu toque",
		img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg"
	  },
	  {
		name: "Seu",
		username: "@Amorzinho",
		body: "Eu amo sua presença",
		img: "https://github.com/ali-ali18.png"
	  },
	  {
		name: "Seu",
		username: "@Amorzinho",
		body: "Eu amo sua voz",
		img: "https://github.com/ali-ali18.png"
	  },
	  {
		name: "Seu",
		username: "@Amorzinho",
		body: "Eu amo sua lealdade",
		img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg"
	  },
	  {
		name: "Seu",
		username: "@Amorzinho",
		body: "Eu amo seu brilho",
		img: "https://github.com/ali-ali18.png"
	  },

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	username,
	body,
}: {
	img: string;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full" width="32" height="32" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-white/40">{username}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export function Marquee3D() {
	return (
		<div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
			<div
				className="flex flex-row items-center gap-4"
				style={{
					transform:
						"translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
				}}
			>
				<Marquee pauseOnHover vertical className="[--duration:20s]">
					{firstRow.map((review) => (
						<ReviewCard key={review.username + Math.floor(Math.random() * 100)} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
					{secondRow.map((review) => (
						<ReviewCard key={review.username + Math.floor(Math.random() * 100)} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
					{thirdRow.map((review) => (
						<ReviewCard key={review.username + Math.floor(Math.random() * 100)} {...review} />
					))}
				</Marquee>
				<Marquee pauseOnHover className="[--duration:20s]" vertical>
					{fourthRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
			</div>

			<div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
		</div>
	);
}
