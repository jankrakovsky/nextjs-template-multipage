import Image from "next/image";
import marginaliaProductiveWork from "../src/img/marginalia-productive-work.svg";

export default function Home() {
	return (
		<div className="Home-Start bg-primary-flamingo h-screen">
			<div className="w-full lg:w-10/12 h-full m-auto grid grid-cols-2 place-content-center">
				<div className="flex flex-col justify-center text-white">
					<h5 className="mb-[26px]">Delectus instructior</h5>
					<h1>Vide legimus <br />consectetuer</h1>
					<div className="EmailForm">
						<input className="mt-[33px]" type="email" name="emailInput" id="emailInput" placeholder="Email" />
						<button className="Dark_Primary ml-[30px]" type="submit">Submit</button>
					</div>
				</div>
				<Image src={marginaliaProductiveWork} alt="image" width={659} height={644} />
			</div >
		</div>
	)
}

