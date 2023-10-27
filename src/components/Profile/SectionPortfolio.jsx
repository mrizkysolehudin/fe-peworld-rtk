import Image from "next/image";
import React from "react";
import NoResult from "../Global/NoResult";
import axios from "axios";
import { baseUrl } from "@/helpers/baseUrl";

const SectionPortfolio = ({ portfolio, user_id }) => {
	const handleDeletePortfolio = (id) => {
		axios
			.delete(`${baseUrl}/portfolio/${id}`)
			.then(() => location.reload())
			.catch((error) => console.log(error));
	};

	return (
		<div className="flex mt-10 flex-wrap gap-x-4 gap-y-6">
			{portfolio?.length > 0 ? (
				portfolio?.map((item, index) => (
					<article key={index} className="relative">
						{user_id == item?.user_id && (
							<button
								onClick={() => handleDeletePortfolio(item?.portfolio_id)}
								className="absolute z-[1] -right-[0.5vw] -top-[0.6vw] bg-red-600 hover:bg-red-600/80 text-gray-200 px-[0.7vw] h-[2vw] pb-1 flex justify-center items-center rounded-full">
								x
							</button>
						)}

						<div className="relative w-[36vw] h-[20vw] sm:w-[16vw] sm:h-[10vw] mx-auto">
							<Image src={`${item?.image}`} alt="portfolio" fill />
						</div>
						<p className="text-gray-800 text-xs sm:text-base text-center mt-1">
							{item?.name}
						</p>
					</article>
				))
			) : (
				<NoResult />
			)}
		</div>
	);
};

export default SectionPortfolio;
