import Image from "next/image";
import Link from 'next/link';
import TwoColumns from "../components/TwoColumns";
import facebook from "../public/img/icons/facebook.svg";
import twitter from "../public/img/icons/twitter.svg";
import instagram from "../public/img/icons/instagram.svg";

const Footer = () => {
	return (
		<footer className="Footer text-white bg-primary-red">
			<TwoColumns>
				<div className="Footer-info py-5 px-2 sm:px-10 lg:p-20">
					<h3>LOGO</h3>
					<p className="Text_Big pt-2 pb-4">Sit alii tantas viderer no. An mel nostrum appareat. Ad consul facilis est. Vix habeo scaevola percipitur ne, qui noster abhorreant ne.</p>
					<span className="pr-4">
						<Image src={facebook} alt="" />
					</span>
					<span className="pr-4">
						<Image src={twitter} alt="" />
					</span>
					<span className="pr-4">
						<Image src={instagram} alt="" />
					</span>
				</div>


				<div className="Footer-links py-5 px-2 sm:px-10 lg:p-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
					<ul className="Footer-links">
						<li className="Text">Lorem</li>
						<li className="Text_Gray">Optio</li>
						<li className="Text_Gray">Sapiente</li>
						<li className="Text_Gray">Alias</li>
						<li className="Text_Gray">Itaque</li>
						<li className="Text_Gray">Dolore</li>
					</ul>
					<ul className="Footer-links">
						<li className="Text">Lorem</li>
						<li className="Text_Gray">Optio</li>
						<li className="Text_Gray">Sapiente</li>
						<li className="Text_Gray">Alias</li>
						<li className="Text_Gray">Itaque</li>
						<li className="Text_Gray">Dolore</li>
					</ul>
					<ul className="Footer-links">
						<li className="Text">Lorem</li>
						<li className="Text_Gray">Optio</li>
						<li className="Text_Gray">Sapiente</li>
						<li className="Text_Gray">Alias</li>
						<li className="Text_Gray">Itaque</li>
						<li className="Text_Gray">Dolore</li>
					</ul>
				</div>
			</TwoColumns>
			<div className="Footer-copyright w-full p-6 text-center bg-primary-brown">© LOGO, 2022. All rights reserved. Created by afneybeyb.</div>
		</footer>
	);
}

export default Footer;

