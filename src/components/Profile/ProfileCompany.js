import React from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
	MapPinIcon,
	EnvelopeIcon,
	IdentificationIcon,
	ChatBubbleLeftIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const ProfileCompany = ({ data }) => {
	return (
		<main className="bg-[#9EA0A5]/30 w-screen grid justify-center pt-20 pb-40">
			<div className="bg-[#5E50A1] w-[87vw] h-[20vw] grid justify-end items-end rounded-t-lg ">
				<button className="flex text-white items-center my-1 py-2 px-6 gap-2 font-semibold">
					<PencilIcon className="w-[1.3vw] h-[1.3vw]" /> Ubah Latar
				</button>
			</div>

			<div className="bg-white w-[87vw]">
				<article className="w-[80vw] lg:w-[50vw] mx-auto justify-center text-center grid  text-gray-400 -mt-[5vw] pb-20 ">
					<div className="relative w-[20vw] h-[20vw] sm:w-[10vw] sm:h-[10vw] mx-auto">
						<Image
							src={data?.photo}
							alt="avatar"
							fill
							className="object-cover rounded-full "
							style={{ objectPosition: "top" }}
						/>
					</div>

					<div>
						<h5 className="text-black font-semibold text-2xl mt-5">{data?.name}</h5>

						<h6 className="text-black mt-4">{data?.company_field}</h6>
						<h6 className="text-black">{data?.company}</h6>
						<h6 className="flex justify-center items-center gap-2 mt-3">
							<MapPinIcon className="w-3 h-3" /> {data?.region}
						</h6>

						<p className="mt-5">{data?.description}</p>

						<Link
							href={`/profile/company/edit`}
							className="mt-8 block mx-auto rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-[22vw] text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
							Edit profile
						</Link>
					</div>

					<ul className="grid justify-center items-center mt-6 gap-2">
						{data?.email && (
							<li className="flex gap-3 items-center">
								<EnvelopeIcon className="w-5 h-5" /> {data?.email}
							</li>
						)}
						{data?.instagram && (
							<li className="flex gap-3 items-center">
								<IdentificationIcon className="w-5 h-5" /> {data?.instagram}
							</li>
						)}
						{data?.phone && (
							<li className="flex gap-3 items-center">
								<PhoneIcon className="w-5 h-5" /> {data?.phone}
							</li>
						)}
						{data?.linkedin && (
							<li className="flex gap-3 items-center">
								<ChatBubbleLeftIcon className="w-5 h-5" /> {data?.linkedin}
							</li>
						)}
					</ul>
				</article>
			</div>
		</main>
	);
};

export default ProfileCompany;
