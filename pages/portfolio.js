import Image from "next/image";
import PortfolioPic from "../components/PortfolioPic";
import TwoColumns from "../components/TwoColumns";
import marginaliaShipping from "../public/img/marginalia/marginalia-shipping.svg";
import architecture from "../public/img/portfolio/architecture.png";
import boots from "../public/img/portfolio/boots.png";
import desert from "../public/img/portfolio/desert.png";
import hand from "../public/img/portfolio/hand.png";
import pool from "../public/img/portfolio/pool.png";
import tribunes from "../public/img/portfolio/tribunes.png";
import woman from "../public/img/portfolio/woman.png";

export default function Portfolio() {
	let images = [
		{ img: architecture, title: "Ubique erroribus", text: "Modo mutat" },
		{ img: boots, title: "Vitae decore", text: "Quidam" },
		{ img: desert, title: "Efficiendi nihil", text: "Tantas" },
		{ img: hand, title: "Officiis similique", text: "Tollit indoctum" },
		{ img: pool, title: "Platonem eos", text: "Mazim nemore" },
		{ img: tribunes, title: "Singulis an ius", text: "Nullam" },
		{ img: woman, title: "Quot suscipit", text: "Natum animal" },
	]
	return (
		<div className="Portfolio">
			<div className="Portfolio-start py-2 bg-primary-flamingo text-white">
				<TwoColumns>
					<div className="m-auto">
						<h1>Portfolio</h1>
						<p className="Text_Big">Te aliquam noluisse his. Et vel epicuri detracto indoctum, et fierent pericula vim, veniam.</p>
					</div>
					<Image src={marginaliaShipping} alt="" />
				</TwoColumns>
			</div>

			<main className="Portfolio-main py-8 bg-white w-full xl:w-10/12 h-full m-auto p-2 grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-2">
				{images.map((img) => (
					<PortfolioPic img={img.img} title={img.title} text={img.text} />
				))}
			</main>
		</div>
	)
}

