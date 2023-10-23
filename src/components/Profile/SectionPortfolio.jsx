import Image from "next/image";
import React from "react";

const SectionPortfolio = ({ portfolio }) => {
	return (
		<div className="flex mt-10 flex-wrap gap-x-4 gap-y-6">
			{portfolio?.map((item, index) => (
				<article key={index}>
					<div className="relative w-[16vw] h-[10vw] mx-auto">
						<Image src={`${item?.image}`} alt="portfolio" fill />
					</div>
					<p className="text-gray-800 text-center mt-1">{item?.name}</p>
				</article>
			))}
		</div>
	);
};

export default SectionPortfolio;
