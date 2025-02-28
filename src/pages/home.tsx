import ContainerBox from "@/components/containerBox";
import { BoxReveal } from "@/components/magicui/box-reveal";
import fotoInicio from "@/assets/foto-inicio.jpg";
import fotoPrimeiroEncontro from "@/assets/primeitoEncontro.jpg";
import { motion } from "framer-motion";
import { Marquee3D } from "@/components/marquee3D";
import { TextAnimate } from "@/components/magicui/text-animate";
import CarouselComponent from "@/components/carosel";
import Timer from "@/components/timerDate";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function Home() {
	return (
		<motion.div className="overflow-x-hidden overflow-y-hidden">
			<ContainerBox>
				<div className="flex flex-col gap-3 h-auto p-3 w-full">
					<BoxReveal duration={0.8}>
						<h1 className="text-4xl font-medium capitalize">
							Olá meu{" "}
							<strong className="bg-gradient-to-l to-violet-500 from-pink-600 bg-clip-text text-transparent">
								amorzinho
							</strong>
						</h1>
					</BoxReveal>
					<BoxReveal duration={0.7}>
						<p className="text-muted-foreground">
							Antes de você ver tudo que planejei para você... <br /> Saiba que
							tudo foi feito com muito carinho e amor, a ideia é demonstrar o
							quanto eu amo você... S2
						</p>
					</BoxReveal>
					<BoxReveal duration={1}>
						<div className="flex justify-center items-center w-full h-full">
							<img
								src={fotoInicio}
								alt="foto com a muié"
								className="rounded-lg aspect-square"
								loading="lazy"
							/>
						</div>
					</BoxReveal>
				</div>

				<motion.div className="flex flex-col justify-center gap-3 mt-10">
					<motion.h2
						className="text-2xl font-semibold capitalize"
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
					>
						Nosso primeiro encontro
					</motion.h2>
					<motion.p
						className="text-muted-foreground"
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
					>
						Jamais iria imaginar que um simples evento de anime(que eu nem
						queria ir...) ia mudar tanto o meu destino (e que mudança boa!)
						<br />
						Sou extremamente grato por meu irmão ter me infernizado para ir,
						pois eu não estava afim de ir... <br />
						Vamos ser grato também a boca de lixo que fez a gente zoar ela pelo
						resto do evento KKKKKKKK
						<br /> (me questiono como o Barth pegou aquilo...)
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.4 }}
						className="flex justify-center"
					>
						<img
							src={fotoPrimeiroEncontro}
							alt="foto com a muié"
							className="rounded-lg aspect-square"
							loading="lazy"
						/>
					</motion.div>
				</motion.div>
			</ContainerBox>
			<div className="h-auto w-full flex flex-col items-center justify-center py-3">
				<TextAnimate className="text-xl font-semibold capitalize mb-5">
					Motivos para eu te amar
				</TextAnimate>
				<Marquee3D />
			</div>

			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.5 }}
				className=" relative z-10 w-full flex flex-col items-center justify-center my-5"
			>
				<motion.p className="text-2xl font-semibold capitalize">
					Algumas fotos nossas
				</motion.p>
				<CarouselComponent />
			</motion.div>

			<div className="relative flex flex-col items-center justify-center mx-1.5">
				<Timer />
			</div>

			<div className="text-center my-8">
				<SparklesText text="Te amo" />
				<p className="text-lg pb-3 text-muted-foreground text-wrap mt-4">
					Obrigado por ter chegado até aqui... <br /> Sou grato por tudo!
				</p>
			</div>
		</motion.div>
	);
}
