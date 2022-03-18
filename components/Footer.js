import Link from 'next/link';
import TwoColumns from "../components/TwoColumns";

const Footer = () => {
	return (
		<div className="Footer text-white bg-primary-red">
			<TwoColumns>
				<div className="Footer-info p-6">
					<h3>LOGO</h3>
					<p className="Text_Big">Sit alii tantas viderer no. An mel nostrum appareat. Ad consul facilis est. Vix habeo scaevola percipitur ne, qui noster abhorreant ne.</p>
				</div>
				<div className="Footer-links p-6"></div>
			</TwoColumns>
			<div className="Footer-copyright w-full p-6 text-center bg-primary-brown">© LOGO, 2022. All rights reserved. Created by afneybeyb.</div>
		</div>
	);
}

export default Footer;

