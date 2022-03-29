import Image from "next/image";
import TwoColumns from "../components/TwoColumns";
import marginaliaDone from "../public/img/marginalia/marginalia-done.svg";
import contactMap from "../public/img/contact-map.svg";
import pin from "../public/img/icons/pin.svg";
import phone from "../public/img/icons/phone.svg";
import mail from "../public/img/icons/mail.svg";

export default function Contact() {
	return (
		<div className="Contact">
			<div className="Contact-start py-2 bg-primary-flamingo text-white">
				<TwoColumns>
					<div className="m-auto">
						<h1>Contact</h1>
						<p className="Text_Big">Te aliquam noluisse his. Et vel epicuri detracto indoctum, et fierent pericula vim, veniam.</p>
					</div>
					<Image src={marginaliaDone} alt="" />
				</TwoColumns>
			</div>

			<div className="Contact-contact py-8 bg-white">
				<TwoColumns>
					<div className="h-full pb-6">
						<div className="pb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="w-full p-4 flex justify-around gap-4 border-gray-400 border-2 border-solid">
								<div className="grow-[1] flex justify-end items-center">
									<Image src={phone} alt="" />
								</div>
								<div className="grow-[3]">
									<h4>Call us</h4>
									<p>+1 234 567 89 00</p>
								</div>
							</div>
							<div className="w-full p-4 flex justify-around gap-4 border-gray-400 border-2 border-solid">
								<div className="grow-[1] flex justify-end items-center">
									<Image src={mail} alt="" />
								</div>
								<div className="grow-[3]">
									<h4>Write us</h4>
									<p>info@gmail.com</p>
								</div>
							</div>
						</div>
						<p className="Text_Big mb-4">Cum ea debitis maluisset gubergren, at mea essent splendide. Vix dicam dolore cu. Mel erat timeam scriptorem an. Sit alii tantas viderer no. An mel nostrum appareat.</p>
						<p className="Text_Gray">Vix habeo scaevola percipitur ne, qui noster abhorreant ne, mea in dicant eligendi evertitur. Ad falli aliquid menandri his. Usu vocent copiosae ut. No nihil munere eum.</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
							<input className="w-full mt-8" type="text" name="nameInput" id="nameInput" placeholder="Your name" />
							<input className="w-full mt-8" type="email" name="emailInput" id="emailInput" placeholder="Your email" />
						</div>
						<input className="w-full mt-8" type="text" name="messageInput" id="messageInput" placeholder="Your message" />

						<button className="Primary mt-8" type="submit">Submit</button>
					</div>
					<div className="Contact-map relative m-auto">
						<Image src={contactMap} alt="" />
						<div className="absolute top-1/2 left-1/2">
							<Image className="" src={pin} alt="" />
						</div>
					</div>
				</TwoColumns>
			</div>
		</div>
	)
}

