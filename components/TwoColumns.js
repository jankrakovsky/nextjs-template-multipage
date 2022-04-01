const TwoColumns = ({ children }) => {
	return (
		<div className="TwoColumns w-full xl:w-10/12 h-full m-auto p-2 grid lg:grid-cols-2 gap-6 justify-start sm:justify-center lg:justify-start content-around md:content-center sm:items-center transition-all">
			{children}
		</div>
	);
}

export default TwoColumns;

