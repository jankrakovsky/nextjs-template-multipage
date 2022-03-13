import Image from "next/image";

const IconSquare = (props) => {
	return (
		<div className="p-2">
			<div className="w-[170px] h-[170px] m-auto flex flex-col justify-stretch border-gray-400 border-2 border-solid">
				<p className="font-dm text-[24px] text-gray-400">{props.num}</p>
				<Image src={props.img} alt="" />
			</div>
			<div className="w-9/12 m-auto py-4 text-center">
				<h4>{props.title}</h4>
				<p className="Text_Gray">{props.text}</p>
			</div>
		</div>
	);
}

export default IconSquare;

