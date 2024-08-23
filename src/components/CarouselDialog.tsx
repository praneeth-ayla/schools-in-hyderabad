import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({
	children: slides,
	autoSlide = false,
	autoSlideInterval = 3000,
	height = "400px", // default height
	width = "100%", // default width
}: any) => {
	const [curr, setCurr] = useState(0);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, []);

	return (
		<div className={`overflow-hidden relative ${height + " " + width}`}>
			<div
				className="flex transition-transform ease-out duration-500"
				style={{
					transform: `translateX(-${curr * 100}%)`,
					width: "100%", // Ensure the container's width is 100%
					height: "100%",
				}}>
				{slides.map((slide: any, index: number) => (
					<div
						key={index}
						className="flex-shrink-0 w-full h-full"
						style={{ width: width }}>
						{slide}
					</div>
				))}
			</div>
			<div className="absolute inset-0 flex items-center justify-between p-4">
				<button
					onClick={prev}
					className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
					<ChevronLeft />
				</button>
				<button
					onClick={next}
					className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
					<ChevronRight />
				</button>
			</div>
			<div className="absolute bottom-4 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{slides.map((s: any, i: number) => (
						<div
							key={i}
							className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${
								curr === i ? "p-0.5" : "bg-opacity-50"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
