import Image from "next/image";
import React from "react";

const SectionWorkExperiences = () => {
	return (
		<div className=" mt-10 gap-5 flex flex-wrap">
			<article className="flex gap-6 w-[48%]">
				<div className="relative w-[14vw] h-[6vw] mx-auto">
					<Image src="/assets/images/tokped.png" alt="avatar" fill />
				</div>

				<div>
					<h5 className="font-semibold text-xl">Engineer</h5>
					<p className="text-lg">Tokopedia</p>
					<p className="text-gray-400 gap-3 flex">
						July 2019 - January 2020 <span>6 months</span>
					</p>
					<p className="text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat
						orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus
						fringilla, vestibulum risus at.
					</p>
				</div>
			</article>

			<article className="flex gap-6 w-6/12">
				<div className="relative w-[14vw] h-[6vw] mx-auto">
					<Image src="/assets/images/tokped.png" alt="work experiences" fill />
				</div>

				<div>
					<h5 className="font-semibold text-xl">Engineer</h5>
					<p className="text-lg">Tokopedia</p>
					<p className="text-gray-400 gap-3 flex">
						July 2019 - January 2020 <span>6 months</span>
					</p>
					<p className="text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat
						orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus
						fringilla, vestibulum risus at.
					</p>
				</div>
			</article>

			<article className="flex gap-6 w-6/12">
				<div className="relative w-[14vw] h-[6vw] mx-auto">
					<Image src="/assets/images/tokped.png" alt="avatar" fill />
				</div>

				<div>
					<h5 className="font-semibold text-xl">Engineer</h5>
					<p className="text-lg">Tokopedia</p>
					<p className="text-gray-400 gap-3 flex">
						July 2019 - January 2020 <span>6 months</span>
					</p>
					<p className="text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat
						orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus
						fringilla, vestibulum risus at.
					</p>
				</div>
			</article>
		</div>
	);
};

export default SectionWorkExperiences;
