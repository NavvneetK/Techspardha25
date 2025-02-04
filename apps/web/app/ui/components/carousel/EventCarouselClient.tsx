"use client";
import React, { useEffect, useRef, useState } from "react";
import EventCard from "../EventCard";
import Link from "next/link";
import { Event } from "@/app/server/actions/constants";

export default function EventCarouselClient({events}: {events: Event[]}) {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="mb-10 h-full w-[100vw] flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold md:text-4xl pb-5 bg-gradient-to-b from-[#FDFDFD] to-[rgba(250, 250, 250, .1)] text-transparent bg-clip-text font-[Satoshi Variable] md:mb-[5vh]">
				Events
			</h1>
			<div className="relative w-full h-[325px] md:h-[523px] overflow-hidden">
				<div className="hidden lg:block h-full w-[200px] absolute top-0 left-0 bg-gradient-to-r from-[#001926] to-[#F3F9FF00]" />
				<div className="hidden lg:block h-full w-[200px] absolute top-0 right-0 bg-gradient-to-l from-[#001926] to-[#F3F9FF00]" />

				<div className="flex items-center justify-center h-full relative">
					{events.map((data: Event, index) => {
						const position =
							index === currentIndex
								? "center"
								: index === (currentIndex - 1 + events.length) % events.length
								? "left"
								: index === (currentIndex + 1) % events.length
								? "right"
								: "hidden";
						return (
							<div
								key={index}
								className={`absolute transition-all duration-500 ${
									position === "center"
										? "opacity-100 scale-100 z-10"
										: "opacity-50 scale-90 z-0"
								} ${position === "left" ? "-translate-x-[120%]" : ""} ${
									position === "right" ? "translate-x-[120%]" : ""
								} ${position === "hidden" ? "hidden" : ""}`}
								style={{
									transition: "transform 0.5s ease, opacity 0.5s ease",
								}}
							>
								<EventCard
									id={data.id}
									name={data.eventName}
									img={data.poster}
									isActive={position === "center"}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<Link href={"/events"}>
				<div className="px-4 py-1.5 bg-white/10 rounded-[32px] border border-white/10 justify-start items-center gap-2.5 inline-flex overflow-hidden">
					<div className="text-white text-sm font-bold font-['Satoshi Variable'] leading-normal">
						View Them All
					</div>
				</div>
			</Link>
		</div>
	);
}
