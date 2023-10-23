import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const HirePage = () => {
	const skillItems = [
		"Phyton",
		"Laravel",
		"Golang",
		"JavaScript",
		"PHP",
		"HTML",
		"C++",
		"Kotlin",
		"Swift",
	];

	return (
		<div>
			<Navbar />

			<main className="w-screen flex justify-center px-8 pt-12 pb-64 bg-[#F6F7F8]">
				<section className="w-[30%] -ml-10 h-[41rem] bg-white rounded-sm">
					<div className="p-10">
						<div className="relative w-[10vw] h-[10vw] mx-auto">
							<Image src="/assets/images/avatar3.png" alt="avatar" fill />
						</div>

						<div className="text-sm">
							<h4 className="text-2xl font-semibold mt-5">Louis Tomlinson</h4>

							<p className="mt-2">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat
								orci.
							</p>

							<h6 className="flex  items-center gap-2 my-5 text-gray-400">
								<MapPinIcon className="w-[1.5vw] h-[1.5vw]" /> Purwokerto, Jawa Tengah
							</h6>

							<p className="text-gray-400">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat
								orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus
								fringilla, vestibulum risus at.
							</p>
						</div>

						<div className="mt-8">
							<h5 className="text-2xl font-semibold">Skill</h5>

							<div className="text-white flex flex-wrap gap-x-3 gap-y-4 pr-4 text-sm mt-5">
								{skillItems.map((item, index) => (
									<span
										key={index}
										className="py-1 px-4 bg-[#fbb01799] border border-[#FBB017] rounded">
										{item}
									</span>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="w-7/12 ">
					<div className="w-9/12 mx-auto">
						<h2 className="font-semibold text-4xl">Hubungi Lous Tomlinson</h2>

						<p className="text-lg text-gray-500 mt-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum
							et dui rhoncus auctor.
						</p>

						<form className="mt-10">
							<div>
								<label className="block text-sm font-medium leading-6 text-gray-400">
									Tujuan tentang pesan ini
								</label>

								<input
									name="email"
									type="text"
									required
									placeholder="Projek"
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>

							<div className="mt-5">
								<label className="block text-sm font-medium leading-6 text-gray-400">
									Nama lengkap
								</label>

								<input
									name="password"
									type="text"
									required
									placeholder="Masukan nama lengkap"
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>

							<div className="mt-5">
								<label className="block text-sm font-medium leading-6 text-gray-400">
									Email
								</label>

								<input
									name="email"
									type="text"
									required
									placeholder="Masukan email"
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>

							<div className="mt-5">
								<label className="block text-sm font-medium leading-6 text-gray-400">
									No handphone
								</label>

								<input
									name="phone"
									type="text"
									required
									placeholder="Masukan no handphone"
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>

							<div className="mt-5">
								<label className="block text-sm font-medium leading-6 text-gray-400">
									Deskripsi
								</label>

								<textarea
									id="about"
									name="about"
									placeholder="Deskripsikan/jelaskan lebih detail "
									className="block w-full h-[13vw] rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
							</div>

							<button
								type="submit"
								className="flex w-full mt-10 justify-center rounded-md bg-[#FBB017] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FBB017]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Hire
							</button>
						</form>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default HirePage;
