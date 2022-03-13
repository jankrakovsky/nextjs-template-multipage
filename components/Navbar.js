import Link from 'next/link';

const Navbar = () => {
	return (
		<div className="Navbar text-white bg-primary-flamingo">
			<nav className="Navbar-nav w-full h-full m-auto xl:w-10/12 px-4 py-2 grid grid-cols-3 gap-12 justify-between items-center">
				<div className="Navbar-left items-center">
					<Link href="/">
						<h3 className="cursor-pointer">LOGO</h3>
					</Link>
				</div>
				<div className="flex justify-center items-center gap-4">
					<Link href="/portfolio">
						<p className="Text cursor-pointer">Portfolio</p>
					</Link>
					<Link href="/contact">
						<p className="Text cursor-pointer">Contact</p>
					</Link>
				</div>
				<div className="Navbar-right flex justify-end items-center">
					<Link href="/">
						<div className="Text px-12 py-3 border-[1px] border-white border-solid cursor-pointer">Sign up</div>
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;

