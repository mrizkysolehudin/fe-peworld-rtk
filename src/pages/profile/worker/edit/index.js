import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import {
	ArrowDownLeftIcon,
	ArrowDownRightIcon,
	ArrowUpLeftIcon,
	ArrowUpRightIcon,
	ArrowsRightLeftIcon,
	ArrowsUpDownIcon,
	MapPinIcon,
	PhotoIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const EditProfileCompanyPage = () => {
	return (
		<div>
			<Navbar />

			<main className="w-screen">
				<div className="bg-[#5E50A1] w-full h-[24vw]"></div>
				<div className="bg-[#F6F7F8] px-32 relative h-[164vw]">
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
										<h4 className="text-2xl font-semibold mt-10">Louis Tomlinson</h4>

										<p className="mt-2">Web Developer</p>

										<h6 className="flex  items-center gap-2 my-5 text-gray-400">
											<MapPinIcon className="w-[1.5vw] h-[1.5vw]" /> Purwokerto, Jawa
											Tengah
										</h6>

										<h6 className="flex  items-center gap-2 mt-5 text-gray-400">
											Freelancer
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
												Job desk
											</label>

											<input
												name="email"
												type="text"
												required
												placeholder="Masukan job desk"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Domisili
											</label>

											<input
												name="phone"
												type="text"
												required
												placeholder="Masukan domisili"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Tempat kerja
											</label>

											<input
												name="phone"
												type="text"
												required
												placeholder="Masukan tempat kerja"
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
												placeholder="Tuliskan deskripsi singkat"
												className="block w-full h-[13vw] rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
										</div>
									</div>
								</article>

								<article className="bg-white rounded-lg pb-10 mt-7">
									<h1 className="pt-5 px-7 text-xl font-semibold ">Skill</h1>
									<div className="w-full bg-gray-300 h-[1px] mt-3"></div>

									<div className="flex gap-3 px-7 mt-7">
										<input
											name="password"
											type="text"
											required
											placeholder="Java"
											className="block w-11/12 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>

										<button
											type="submit"
											className="flex w-2.5/12  justify-center rounded-md bg-[#FBB017] px-3 pt-2 pb-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FBB017]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
											Simpan
										</button>
									</div>
								</article>

								<article className="bg-white rounded-lg pb-10 mt-8">
									<h1 className="pt-5 px-7 text-xl font-semibold ">Pengalaman kerja</h1>
									<div className="w-full bg-gray-300 h-[1px] mt-3"></div>

									<div className="px-7 mt-5 ">
										<div>
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Posisi
											</label>

											<input
												name="password"
												type="text"
												required
												placeholder="web developer"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="flex gap-4">
											<div className="mt-5 w-6/12">
												<label className="block text-sm font-medium leading-6 text-gray-400">
													Nama perusahaan
												</label>

												<input
													name="email"
													type="text"
													required
													placeholder="PT Harus bisa"
													className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>

											<div className="mt-5 w-6/12">
												<label className="block text-sm font-medium leading-6 text-gray-400">
													Bulan/tahun
												</label>

												<input
													name="phone"
													type="text"
													required
													placeholder="Januari 2018"
													className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Deskripsi singkat
											</label>

											<textarea
												id="about"
												name="about"
												placeholder="Deskripsikan pekerjaan anda"
												className="block w-full h-[13vw] rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
										</div>

										<div className="my-8 h-[1px] w-full bg-slate-200"></div>

										<button
											type="button"
											className="rounded border-[#FBB017] border px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-[#FBB017] shadow-sm hover:bg-[#FBB017] hover:text-white">
											Tambah pengalaman kerja
										</button>
									</div>
								</article>

								<article className="bg-white rounded-lg pb-10 mt-8">
									<h1 className="pt-5 px-7 text-xl font-semibold ">Portofolio</h1>
									<div className="w-full bg-gray-300 h-[1px] mt-3"></div>

									<div className="px-7 mt-5 ">
										<div>
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Nama aplikasi
											</label>

											<input
												name="password"
												type="text"
												required
												placeholder="Masukan nama aplikasi"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Link repository
											</label>

											<input
												name="email"
												type="text"
												required
												placeholder="Masukan link repository"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Type portofolio
											</label>

											<div className="flex gap-4">
												<div className="border-[1.5px] border-gray-200 px-5 py-3 rounded-md">
													<input
														type="radio"
														name="repositoryOption"
														value="repositoryYes"
														id="repositoryYes"
														className="mr-2  checked:bg-red-500 checked:text-red-500 "
													/>
													<label htmlFor="repositoryYes" className="text-gray-900">
														Aplikasi mobile
													</label>
												</div>

												<div className="border-[1.5px] border-gray-200 px-5 py-3 rounded-md">
													<input
														type="radio"
														name="repositoryOption"
														value="repositoryNo"
														id="repositoryNo"
														className="mr-2  checked:bg-red-500 checked:text-red-500"
													/>
													<label htmlFor="repositoryNo" className="text-gray-900">
														Aplikasi web
													</label>
												</div>
											</div>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Upload gambar
											</label>

											<div className="border-[2px] border-dashed mt-1 rounded-md relative hover:bg-gray-50">
												<div className="absolute w-full text-center text-sm ">
													<div className="relative w-[10vw] h-[10vw] mx-auto">
														<Image src="/assets/icons/cloud-arrow-up.svg" alt="" fill />
													</div>
													<p>Drag & Drop untuk Upload Gambar Aplikasi Mobile</p>
													<p className="text-xs mt-2">
														Atau cari untuk mengupload file dari direktorimu.
													</p>
													<div className="flex gap-4 justify-center mt-6">
														<div className="flex justify-end items-center gap-1">
															<PhotoIcon className="w-[3vw] h-[3vw] text-gray-400" />
															<p className="w-6/12">High-Res Image PNG, JPG or GIF</p>
														</div>
														<div className="flex justify-start items-center gap-3 text-left">
															<div className="border-2 border-gray-400 relative">
																<ArrowUpRightIcon className="w-[2vw] h-[2vw] p-1 text-gray-400 rotate-3  absolute" />
																<ArrowDownLeftIcon className="w-[2vw] h-[2vw] p-1 text-gray-400 rotate-3 " />
															</div>
															<p className="w-6/12">Size 1080x1920 or 600x800</p>
														</div>
													</div>
												</div>
												<input
													id="about"
													name="about"
													type="file"
													placeholder="Deskripsikan pekerjaan anda"
													className="w-full h-[22vw] opacity-0 px-3 py-2 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="my-8 h-[1px] w-full bg-slate-200"></div>

										<button
											type="button"
											className="rounded border-[#FBB017] border px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-[#FBB017] shadow-sm hover:bg-[#FBB017] hover:text-white">
											Tambah portofolio
										</button>
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

export default EditProfileCompanyPage;
