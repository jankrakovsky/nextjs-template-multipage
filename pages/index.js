import Image from "next/image";
import TwoColumns from "../components/TwoColumns";
import marginaliaProductiveWork from "../src/img/marginalia-productive-work.svg";

export default function Home() {
	return (
		<div className="Home-Start h-screen bg-primary-flamingo text-white">
			<TwoColumns>
				<div className="m-auto">
					<h5 className="mb-[26px]">Delectus instructior</h5>
					<h1 className="text-[56px] sm:text-[72px] leading-[60px] sm:leading-[80px]">Vide legimus <br />consectetuer</h1>
					<div className="EmailForm">
						<input className="w-full sm:w-[270px] mt-[33px] mb-[16px]" type="email" name="emailInput" id="emailInput" placeholder="Email" />
						<button className="Dark_Primary ml-0 sm:ml-[30px]" type="submit">Submit</button>
					</div>
				</div>
				<Image src={marginaliaProductiveWork} alt="" />
			</TwoColumns>
		</div>
	)
}

