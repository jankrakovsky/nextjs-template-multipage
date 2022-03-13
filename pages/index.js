import Image from "next/image";
import IconSquare from "../components/IconSquare";
import TwoColumns from "../components/TwoColumns";
import marginaliaProductiveWork from "../public/img/marginalia/marginalia-productive-work.svg";
import stocks from "../public/img/icons/stocks.svg";
import bag from "../public/img/icons/bag.svg";
import docs from "../public/img/icons/docs.svg";

export default function Home() {
	return (
		<div className="Home">
			<div className="Home-start min-h-[900px] h-screen bg-primary-flamingo text-white">
				<TwoColumns>
					<div className="m-auto">
						<h5 className="mb-[26px]">Delectus instructior</h5>
						<h1>Vide legimus <br />consectetuer</h1>
						<div className="EmailForm">
							<input className="w-full sm:w-[270px] mt-[33px] mb-[16px]" type="email" name="emailInput" id="emailInput" placeholder="Email" />
							<button className="Dark_Primary ml-0 sm:ml-[30px]" type="submit">Submit</button>
						</div>
					</div>
					<Image src={marginaliaProductiveWork} alt="" />
				</TwoColumns>
			</div>

			<div className="Home-features min-h-[900px] h-screen bg-white grid content-center">
				<div className="m-auto w-min text-center">
					<h5 className=" text-primary-red">Nominavi suavitate</h5>
					<h2 className="w-max">Offendit persecuti</h2>
					<p className="Text_Big mt-4">Eu pro ludus dignissim. Eos debet molestiae constituto ne, quo consul interesset ei, cotidieque theophrastus ea his.</p>
				</div>
				<div className="mt-6 grid grid-cols-3">
					<IconSquare num="01" img={stocks} title="Possim" text="An animal assentior nam, sed qualisque deterruisset ea qui melius erroribus" />
					<IconSquare num="02" img={bag} title="Vivendo" text="Assum ubique quodsi sea ad partem vocent vel, ius id viris utinam" />
					<IconSquare num="03" img={docs} title="Deterruisset" text="Nam natum volutpat eu natum elitr vel te id qui purto dicit" />
				</div>
			</div>
		</div>
	)
}

