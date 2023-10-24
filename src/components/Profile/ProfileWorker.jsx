import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import React, { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
	MapPinIcon,
	EnvelopeIcon,
	IdentificationIcon,
	ChatBubbleLeftIcon,
	UserCircleIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "@/helpers/baseUrl";
import SectionPortfolio from "./SectionPortfolio";
import SectionWorkExperiences from "./SectionWorkExperiences";

const ProfileWorker = ({ data }) => {
	const user = data?.user;
	const skill = data?.skill;
	const portfolio = data?.portfolio;
	const workExperience = data?.workExperience;

	const role =
		typeof window !== "undefined" ? localStorage.getItem("peworld_role") : null;
	const user_id =
		typeof window !== "undefined" ? localStorage.getItem("peworld_user_id") : "";

	const [isTabPortfolioActive, setIsTabPortfolioActive] = useState(true);

	return (
		<main className="bg-[#9EA0A5]/30 w-screen grid justify-center pt-20 pb-40">
			<div className="bg-[#5E50A1] w-[87vw] h-[20vw] grid justify-end items-end rounded-t-lg ">
				<button className="flex text-white items-center my-1 py-2 px-6 gap-2 font-semibold">
					<PencilIcon className="w-[1.3vw] h-[1.3vw]" /> Ubah Latar
				</button>
			</div>

			<div className="bg-white w-[87vw] pb-16">
				<section className="w-[50vw] mx-auto justify-center text-center grid  text-gray-400 -mt-[5vw] ">
					<div className="relative w-[10vw] h-[10vw] mx-auto">
						<Image src="/assets/images/avatar3.png" alt="avatar" fill />
					</div>

					<div>
						<h5 className="text-black font-semibold text-2xl mt-5">{user?.name}</h5>

						<h6 className="text-black mt-2">{user?.job_title}</h6>
						<h6 className="flex justify-center items-center gap-2 mt-2">
							<MapPinIcon className="w-3 h-3" /> {user?.region}
						</h6>

						<h6 className="gap-2 mt-2">{user?.company}</h6>

						<p className="mt-5">{user?.description}</p>

						{role == 0 ? (
							<Link
								href={`/hire/${user_id}`}
								className="mt-6 block mx-auto rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-[22vw] text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
								Hire
							</Link>
						) : (
							<Link
								href={`/profile/worker/edit`}
								className="mt-6 block mx-auto rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-[22vw] text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
								Edit profile
							</Link>
						)}
					</div>

					<div className="mt-10">
						{skill?.length > 0 && (
							<h3 className="text-black font-semibold text-2xl">Skill</h3>
						)}

						<div className="text-white w-5/12 mx-auto justify-center flex flex-wrap gap-x-3 gap-y-4 text-sm mt-5">
							{skill?.map((item, index) => (
								<span
									key={index}
									className="py-1 px-4 bg-[#fbb01799] hover:bg-[#FBB017]  border border-[#FBB017] rounded">
									{item?.name}
								</span>
							))}
						</div>
					</div>

					<ul className="grid justify-center items-center mt-9 gap-4 text-sm">
						{user?.email && (
							<li className="flex gap-3 items-center">
								<EnvelopeIcon className="w-5 h-5" /> {user?.email}
							</li>
						)}
						{user?.instagram && (
							<li className="flex gap-3 items-center">
								<IdentificationIcon className="w-5 h-5" /> {user?.instagram}
							</li>
						)}
						{user?.phone && (
							<li className="flex gap-3 items-center">
								<PhoneIcon className="w-5 h-5" /> {user?.phone}
							</li>
						)}
						{user?.linkedin && (
							<li className="flex gap-3 items-center">
								<UserCircleIcon className="w-5 h-5" /> {user?.linkedin}
							</li>
						)}
					</ul>
				</section>

				<section className="mt-16 w-[80vw] mx-auto">
					<div className="flex gap-8 text-2xl">
						<button
							onClick={() => setIsTabPortfolioActive(true)}
							className={`font-semibold text-black ${
								isTabPortfolioActive
									? " underline underline-offset-8 decoration-[#5E50A1] decoration-4"
									: "text-gray-400"
							}`}>
							Portofolio
						</button>
						<button
							onClick={() => setIsTabPortfolioActive(false)}
							className={`font-semibold text-black ${
								isTabPortfolioActive
									? "text-gray-400"
									: " underline underline-offset-8 decoration-[#5E50A1] decoration-4"
							}`}>
							Pengalaman kerja
						</button>
					</div>

					{isTabPortfolioActive && <SectionPortfolio portfolio={portfolio} />}
					{!isTabPortfolioActive && (
						<SectionWorkExperiences workExperience={workExperience} />
					)}
				</section>
			</div>
		</main>
	);
};

export default ProfileWorker;

export async function getServerSideProps(req, res) {
	const id = req.params.id;
	console.log(id);
	const response = await axios.get(`${baseUrl}/user/${id}`);

	const responseSkill = await axios.get(`${baseUrl}/skill/user-skill/${id}`);
	const responsePortfolio = await axios.get(
		`${baseUrl}/portfolio/user-portfolio/${id}`,
	);
	const responseWorkExperience = await axios.get(
		`${baseUrl}/workexperience/user-workexperience/${id}`,
	);

	return {
		props: {
			data: {
				user: response.data.data[0],
				skill: responseSkill.data.data,
				portfolio: responsePortfolio.data.data,
				workExperience: responseWorkExperience.data.data,
			},
		},
	};
}
