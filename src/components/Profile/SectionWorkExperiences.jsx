import Image from "next/image";
import React from "react";
import NoResult from "../Global/NoResult";

const SectionWorkExperiences = ({ workExperience }) => {
	return (
		<div className=" mt-10 gap-5 flex flex-wrap">
			{workExperience?.length > 0 ? (
				workExperience?.map((item, index) => (
					<article key={index} className="flex gap-6 w-[48%]">
						<div className="relative w-[14vw] h-[6vw] mx-auto">
							<Image src="/assets/images/tokped.png" alt="work experience" fill />
						</div>

						<div>
							<h5 className="font-semibold text-xl">{item?.position}</h5>
							<p className="text-lg">{item?.company_name}</p>
							<p className="text-gray-400 gap-3 flex">
								{item?.we_date} <span>6 months</span>
							</p>
							<p className="text-sm">{item?.we_description}</p>
						</div>
					</article>
				))
			) : (
				<NoResult />
			)}
		</div>
	);
};

export default SectionWorkExperiences;
