import Image from "next/image";

const PortfolioPic = (props) => {
	return (
		<div className="w-fit h-fit mb-12 relative flex flex-row justify-center">
			<Image src={props.img} alt="" />
			<div className="w-11/12 absolute bottom-[-2rem] p-2 bg-white border-2 border-solid border-[#E5E5E5] box-border shadow-sm rounded-[3px]">
				<h4>{props.title}</h4>
				<p className="Text_Gray">{props.text}</p>
			</div>
		</div>
	);
}

export default PortfolioPic;

