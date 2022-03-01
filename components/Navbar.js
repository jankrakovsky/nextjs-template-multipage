const Navbar = () => {
	return (
		<div className="Navbar text-white bg-primary-flamingo">
			<nav className="Navbar-nav w-full h-full m-auto xl:w-10/12 px-4 py-2 grid grid-cols-2 gap-12 items-center">
				<div className="Navbar-left flex justify-between items-center">
					<h3>LOGO</h3>
					<p className="Text">Portfolio</p>
				</div>
				<div className="Navbar-right flex justify-between items-center">
					<p className="Text">Contact</p>
					<div className="Text px-12 py-3 border-[1px] border-white border-solid">Sign up</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;

