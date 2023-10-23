import Image from "next/image";
import React from "react";

const SectionPortfolio = () => {
	return (
		<div className="flex mt-10 flex-wrap gap-x-4 gap-y-6">
			<article>
				<div className="relative w-[16vw] h-[10vw] mx-auto">
					<Image src="/assets/images/image-portfolio.png" alt="avatar" fill />
				</div>
				<p className="text-gray-800 text-center mt-1">Remainder app</p>
			</article>

			<article>
				<div className="relative w-[16vw] h-[10vw] mx-auto">
					<Image src="/assets/images/image-portfolio3.png" alt="avatar" fill />
				</div>
				<p className="text-gray-800 text-center mt-1">Social media app</p>
			</article>

			<article>
				<div className="relative w-[16vw] h-[10vw] mx-auto">
					<Image src="/assets/images/image-portfolio2.png" alt="avatar" fill />
				</div>
				<p className="text-gray-800 text-center mt-1">Project management web</p>
			</article>
		</div>
	);
};

export default SectionPortfolio;
