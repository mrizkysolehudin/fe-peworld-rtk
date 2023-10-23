import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
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

const ProfileCompanyPage = () => {
	return (
		<div>
			<Navbar />

			<main className="bg-[#9EA0A5]/30 w-screen grid justify-center pt-20 pb-40">
				<div className="bg-[#5E50A1] w-[87vw] h-[20vw] grid justify-end items-end rounded-t-lg ">
					<button className="flex text-white items-center my-1 py-2 px-6 gap-2 font-semibold">
						<PencilIcon className="w-[1.3vw] h-[1.3vw]" /> Ubah Latar
					</button>
				</div>

				<div className="bg-white w-[87vw]">
					<article className="w-[50vw] mx-auto justify-center text-center grid  text-gray-400 -mt-[5vw] pb-60">
						<div className="relative w-[10vw] h-[10vw] mx-auto">
							<Image src="/assets/images/avatar3.png" alt="avatar" fill />
						</div>

						<div>
							<h5 className="text-black font-semibold text-2xl mt-5">
								PT. Martabat Jaya Abadi
							</h5>

							<h6 className="text-black mt-2">Financial</h6>
							<h6 className="flex justify-center items-center gap-2 mt-3">
								<MapPinIcon className="w-3 h-3" /> Purwokerto, Jawa Tengah
							</h6>

							<p className="mt-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat
								orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus
								fringilla, vestibulum risus at.
							</p>

							<Link
								href={`/profile/company/edit`}
								className="mt-8 block mx-auto rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-[22vw] text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
								Edit profile
							</Link>
						</div>

						<ul className="grid justify-center items-center mt-6 gap-2">
							<li className="flex gap-3 items-center">
								<EnvelopeIcon className="w-5 h-5" /> martabatjaya@gmail.com
							</li>
							<li className="flex gap-3 items-center">
								<IdentificationIcon className="w-5 h-5" /> martabat_jaya
							</li>
							<li className="flex gap-3 items-center">
								<PhoneIcon className="w-5 h-5" /> 0821-8190-1821
							</li>
							<li className="flex gap-3 items-center">
								<ChatBubbleLeftIcon className="w-5 h-5" /> Martabat Jaya Abadi
							</li>
						</ul>
					</article>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default ProfileCompanyPage;
