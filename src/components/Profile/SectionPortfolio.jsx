import Image from "next/image";
import React from "react";
import NoResult from "../Global/NoResult";

const SectionPortfolio = ({ portfolio }) => {
	return (
		<div className="flex mt-10 flex-wrap gap-x-4 gap-y-6">
			{portfolio?.length > 0 ? (
				portfolio?.map((item, index) => (
					<article key={index}>
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
