const Navbar = () => {
	return (
		<div className="Navbar text-white bg-primary-flamingo">
			<nav className="Navbar-nav w-full h-full m-auto xl:w-10/12 px-4 py-2 grid grid-cols-3 gap-12 justify-between items-center">
				<div className="Navbar-left items-center">
					<h3>LOGO</h3>
				</div>
				<div className="flex justify-center items-center gap-4">
					<p className="Text">Portfolio</p>
					<p className="Text">Contact</p>
				</div>
				<div className="Navbar-right flex justify-end items-center">
					<div className="Text px-12 py-3 border-[1px] border-white border-solid">Sign up</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;

