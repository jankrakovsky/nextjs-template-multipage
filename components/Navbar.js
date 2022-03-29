import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
	const [showMenu, setShowMenu] = useState("hidden");

	const switchMenuState = () => {
		setShowMenu(showMenu == "hidden" ? "flex" : "hidden")
	};


	return (
		<div className="Navbar text-white bg-primary-flamingo">
			<nav className="Navbar-nav w-full h-full m-auto xl:w-10/12 px-4 py-2 grid grid-flow-row sm:grid-flow-col gap-12 justify-between items-center">
				<div className="Navbar-left w-[90vw] sm:w-auto relative items-center">
					<Link href="/">
						<h3 className="cursor-pointer">LOGO</h3>
					</Link>
					<div className="Burger-button w-[35px] h-[35px] right-[0px] top-[10px] absolute sm:hidden bg-black cursor-pointer" onClick={switchMenuState}></div>
				</div>
				<div className={`Navbar-center ${showMenu} sm:flex flex-col sm:flex-row justify-center items-end sm:items-center gap-4`}>
					<Link href="/portfolio">
						<p className="Text cursor-pointer">Portfolio</p>
					</Link>
					<Link href="/contact">
						<p className="Text cursor-pointer">Contact</p>
					</Link>
				</div>
				<div className={`Navbar-right ${showMenu} sm:flex justify-end items-center`}>
					<Link href="/">
						<div className="Text px-12 py-3 border-[1px] border-white border-solid cursor-pointer">Sign up</div>
					</Link>
				</div>

			</nav>
		</div>
	);
}

export default Navbar;

