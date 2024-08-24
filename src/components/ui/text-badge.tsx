"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
}: {
	words: string;
	className?: string;
	filter?: boolean;
	duration?: number;
}) => {
	const [scope, animate] = useAnimate();
	let wordsArray = words.split(" ");
	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
				filter: filter ? "blur(0px)" : "none",
			},
			{
				duration: duration ? duration : 1,
				delay: stagger(0.4),
			}
		);
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.div
				ref={scope}
				className="flex gap-3">
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="opacity-0"
							style={{
								filter: filter ? "blur(10px)" : "none",
							}}>
							<div className="bg-[#FFA500] rounded-3xl  p-3 hover:cursor-pointer hover:bg-orange-400">
								{word}{" "}
							</div>
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div className="mt-4">
				<div className="text-center font-bold text-lg leading-snug tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
