import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';
import burgerMenu from "../public/img/icons/burger-menu.svg";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState("hidden");

	const switchMenuState = () => {
		setShowMenu(showMenu == "hidden" ? "flex" : "hidden")
	};


	return (
		<div className="Navbar text-white bg-primary-flamingo">
			<nav className="Navbar-nav w-full h-full m-auto xl:w-10/12 py-2 grid grid-flow-row sm:grid-flow-col gap-12 justify-between items-center">
				<div className="Navbar-left w-[100vw] px-6 sm:w-auto relative items-center">
					<Link href="/" passHref>
						<h3 className="cursor-pointer w-fit">LOGO</h3>
					</Link>

					{/* <div className="Burger-placeholder w-[35px] h-[35px] right-[0px] top-[10px] absolute sm:hidden bg-black cursor-pointer" onClick={switchMenuState}></div> */}
					<div className="Burger-button h-[35px] right-[25px] top-[10px] absolute sm:hidden flex flex-row justify-center" onClick={switchMenuState}>
						<Image className="cursor-pointer" src={burgerMenu} alt="" />
					</div>
				</div>
				<div className={`Navbar-center px-6 ${showMenu} sm:flex flex-col sm:flex-row justify-center items-end sm:items-center gap-4`}>
					<Link href="/portfolio" passHref>
						<p className="Text cursor-pointer border-b-2 border-solid border-transparent hover:border-white">Portfolio</p>
					</Link>
					<Link href="/contact" passHref>
						<p className="Text cursor-pointer border-b-2 border-solid border-transparent hover:border-white">Contact</p>
					</Link>
				</div>
				<div className={`Navbar-right px-6 ${showMenu} sm:flex justify-end items-center`}>
					<Link href="/" passHref>
						<div className="Text px-12 py-3 border-[1px] border-white border-solid cursor-pointer">Sign up</div>
					</Link>
				</div>

			</nav>
		</div>
	);
}

export default Navbar;

