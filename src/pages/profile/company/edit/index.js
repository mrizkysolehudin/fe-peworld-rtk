import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const EditProfileWorkerPage = () => {
	return (
		<div>
			<Navbar />

			<main className="w-screen">
				<div className="bg-[#5E50A1] w-full h-[24vw]"></div>
				<div className="bg-[#F6F7F8] px-32 relative h-[75vw]">
					<div className="w-full h-full absolute -mt-[19vw] flex gap-12">
						<section className="w-[30%]">
							<article className="bg-white rounded-md">
								<div className="px-10 py-8">
									<div className="grid justify-center gap-4">
										<div className="relative w-[10vw] h-[10vw] mx-auto">
											<Image src="/assets/images/avatar3.png" alt="avatar" fill />
										</div>

										<button className="text-gray-400 flex items-center py-1 justify-center gap-1 font-semibold text-lg hover:bg-gray-50">
											<PencilIcon className="w-[1.5vw] h-[1.5vw]" /> Edit
										</button>
									</div>

									<div className="text-sm">
										<h4 className="text-2xl font-semibold mt-10">
											PT. Martabat Jaya Abadi
										</h4>

										<p className="mt-2">Financial</p>

										<h6 className="flex  items-center gap-2 mt-3 text-gray-400">
											<MapPinIcon className="w-[1.5vw] h-[1.5vw]" /> Purwokerto, Jawa
											Tengah
										</h6>
									</div>
								</div>
							</article>

							<div>
								<button
									type="button"
									className="mt-7 rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
									Simpan
								</button>

								<button
									type="button"
									className="mt-4 rounded border-[#5E50A1] border px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-[#5E50A1] shadow-sm hover:bg-gray-200">
									Batal
								</button>
							</div>
						</section>

						<section className="w-[50%] ">
							<form>
								<article className="bg-white rounded-lg pb-12">
									<h1 className="pt-5 px-7 text-xl font-semibold ">Data diri</h1>
									<div className="w-full bg-gray-300 h-[1px] mt-3"></div>

									<div className="px-7 mt-5">
										<div>
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Nama Perusahaan
											</label>

											<input
												name="password"
												type="text"
												required
												placeholder="Masukan nama perusahan"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Bidang
											</label>

											<input
												name="email"
												type="text"
												required
												placeholder="Masukan bidang perusahaan ex : Financial"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Kota
											</label>

											<input
												name="phone"
												type="text"
												required
												placeholder="Masukan kota"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Deskripsi singkat
											</label>

											<textarea
												id="about"
												name="about"
												placeholder="Tuliskan deskripsi singkat"
												className="block w-full h-[13vw] rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Email
											</label>

											<input
												name="phone"
												type="text"
												required
												placeholder="Masukan email"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Instagram
											</label>

											<input
												name="phone"
												type="text"
												required
												placeholder="Masukan nama Instagram"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Nomor Telepon
											</label>

											<input
												name="phone"
												type="text"
												required
												placeholder="Masukan nomor telepon"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Linkedin
											</label>

											<input
												name="phone"
												type="text"
												required
												placeholder="Masukan nama Linkedin"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
									</div>
								</article>
							</form>
						</section>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default EditProfileWorkerPage;
