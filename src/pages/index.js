import Image from "next/image";
import Head from "next/head";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
	const router = useRouter();

	const skillTalents = [
		"Java",
		"Kotlin",
		"PHP",
		"JavaScript",
		"Golang",
		"C++",
		"Ruby",
		"Bahasa lainnya",
	];

	return (
		<>
			<Head>
				<title>Peworld</title>
			</Head>

			<div>
				<Navbar />

				<main className="w-[100vw]">
					<section className="flex flex-wrap md:flex-nowrap  w-screen mt-20 sm:mt-28 px-20">
						<div className="sm:w-7/12 lg:mt-[5vw] order-2 md:order-1 mt-10 sm:mt-0">
							<h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold lg:w-7/12 sm:leading-[50px]">
								Talenta Terbaik Negri untuk Perubahan Revolusi 4.0
							</h3>
							<p className="sm:w-9/12 text-sm sm:text-base mt-3">
								Selamat datang di platform pencarian talenta terkemuka kami, tempat di
								mana perusahaan berkualitas dan individu berbakat bertemu
							</p>
							<Link
								href="/home"
								className="mt-10 block w-fit rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
								Mulai Dari Sekarang
							</Link>
						</div>

						<div className="w-6/12 mx-auto sm:mx-0 order-1 md:order-2">
							<div className="w-[33vw] h-[35vw] relative">
								<Image
									src="/assets/images/landingpage/hero.png"
									fill
									alt=""
									className="rounded object-cover absolute"
								/>

								<div
									style={{
										transform: "rotate(-15.787deg)",
									}}
									className="absolute w-full h-full bg-[#E2E5ED] z-[-1]"></div>
							</div>

							<div className="relative w-[15vw] h-[15vw] -mt-[12vw] -ml-[5.5vw]">
								<Image
									src="/assets/icons/group-box.svg"
									fill
									alt=""
									className="absolute"
								/>
							</div>
						</div>
					</section>

					<section className="flex flex-wrap mt-40 w-screen px-28 justify-center">
						<div className="w-full lg:w-6/12 sm:pl-10 relative ">
							<div className="absolute w-[12vw] h-[12vw] -mt-[4vw] sm:ml-[12vw] lg:-ml-[5.5vw] bg-[#5E50A1] z-[1]"></div>

							<div className="w-[40vw] h-[35vw] sm:w-[30vw] sm:h-[23vw]  mx-auto lg:w-[40vw] lg:h-[35vw] relative">
								<Image
									src="/assets/images/landingpage/hero2.png"
									fill
									alt=""
									className="rounded object-cover absolute"
								/>

								<div
									style={{
										transform: "rotate(12.569deg)",
									}}
									className="absolute w-full h-full bg-[#E2E5ED] z-[-1]"></div>
							</div>

							<div className="relative w-[15vw] h-[15vw] -mt-[12vw] -ml-[3.5vw]">
								<Image src="/assets/icons/dots.svg" fill alt="" className="absolute" />
							</div>
						</div>

						<div className="md:-ml-20 lg:ml-0 lg:w-6/12 sm:pl-[13vw] mt-10 lg:mt-0">
							<h3 className="text-2xl xl:text-3xl xl:w-9/12 font-semibold">
								Kenapa Harus Mencari Talent di Peworld
							</h3>

							<ul className="gap-6 grid mt-10 text-sm sm:text-base">
								<p className="flex gap-3">
									<Image
										src="/assets/icons/checklist.svg"
										alt=""
										width={24}
										height={24}
									/>
									Jaringan Talenta Terbaik
								</p>
								<p className="flex gap-3">
									<Image
										src="/assets/icons/checklist.svg"
										alt=""
										width={24}
										height={24}
									/>
									Pengalaman Rekrutmen yang Efisien
								</p>
								<p className="flex gap-3">
									<Image
										src="/assets/icons/checklist.svg"
										alt=""
										width={24}
										height={24}
									/>
									Kesempatan Karir yang Berharga
								</p>
								<p className="flex gap-3">
									<Image
										src="/assets/icons/checklist.svg"
										alt=""
										width={24}
										height={24}
									/>
									Membangun Masa Depan Bersama
								</p>
							</ul>
						</div>
					</section>

					<section className="flex flex-wrap lg:flex-nowrap w-screen mt-40 sm:px-20 pb-32">
						<div className="lg:w-7/12 pt-2 mt-16 lg:mt-0 pl-10 sm:pl-20 lg:pl-10 order-2 lg:order-1">
							<h3 className="text-4xl font-semibold sm:w-7/12 leading-[50px]">
								Skill Talent
							</h3>
							<p className="lg:w-9/12 mt-3">
								Dalam mencari talenta di Peworld, Anda akan menemukan individu yang
								memiliki beragam keterampilan dan kemampuan yang luar biasa.
							</p>

							<div className="flex gap-10 text-sm sm:text-base">
								<ul className="gap-6 grid mt-10 ">
									{skillTalents.slice(0, 4).map((item, index) => (
										<li key={index} className="flex gap-3">
											<Image
												src="/assets/icons/checklist-yellow.svg"
												alt=""
												width={24}
												height={24}
											/>
											{item}
										</li>
									))}
								</ul>

								<ul className="gap-6 grid mt-10">
									{skillTalents.slice(4, 8).map((item, index) => (
										<li key={index} className="flex gap-3">
											<Image
												src="/assets/icons/checklist-yellow.svg"
												alt=""
												width={24}
												height={24}
											/>
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="w-6/12 ml-32 lg:-ml-10 lg:mt-12 relative order-1 lg:order-2">
							<div className="absolute right-[6vw] -top-[4.5vw]">
								<div className="relative w-[10vw] h-[10vw]  bg-[#FBB017] z-[1]"></div>
							</div>

							<div className="w-[40vw] h-[35vw] relative">
								<Image
									src="/assets/images/landingpage/hero3.png"
									fill
									alt=""
									className="rounded object-cover absolute"
								/>

								<div
									style={{
										transform: "rotate(-15.787deg)",
									}}
									className="absolute w-full h-full bg-[#E2E5ED] z-[-1]"></div>
							</div>
						</div>
					</section>

					<section className="px-20 bg-[#FAFBFC] py-24 ">
						<h1 className="text-4xl text-center font-semibold">
							Their Opinion About Peworld
						</h1>

						<div className="pt-10 flex flex-wrap justify-center gap-6 relative">
							<article className="text-sm md:w-5/12 md:h-[44vw] lg:h-auto lg:w-3/12 px-10 bg-white shadow text-center py-8">
								<div className="w-[8vw] h-[8vw] relative border-[6px] border-[#fbb0175e] mx-auto rounded-full ">
									<Image
										src="/assets/images/landingpage/avatar1.png"
										fill
										alt=""
										className="object-cover  absolute"
									/>
								</div>

								<h3 className="text-lg font-semibold mt-2">Harry Styles</h3>
								<h6 className="text-gray-400">Web Developer</h6>
								<p className="text-gray-600 md:w-8/12 mx-auto mt-2">
									Saya sangat terkesan dengan efisiensi Peworld dalam mencari pekerjaan
									yang sesuai dengan keterampilan saya.
								</p>
							</article>

							<article className="text-sm md:w-5/12 md:h-[44vw] lg:h-auto lg:w-3/12 px-10 bg-white shadow text-center py-8">
								<div className="w-[8vw] h-[8vw] relative border-[6px] border-[#fbb0175e] mx-auto rounded-full ">
									<Image
										src="/assets/images/landingpage/avatar2.png"
										fill
										alt=""
										className="object-cover  absolute"
									/>
								</div>

								<h3 className="text-lg font-semibold mt-2">Niall Horan</h3>
								<h6 className="text-gray-400">Web Developer</h6>
								<p className="text-gray-600 md:w-8/12 mx-auto mt-2">
									Saya telah berhasil berkolaborasi dengan klien melalui platform ini.
								</p>
							</article>

							<article className="text-sm w-3/12 px-10 bg-white shadow text-center py-8 hidden lg:block">
								<div className="w-[8vw] h-[8vw] relative border-[6px] border-[#fbb0175e] mx-auto rounded-full ">
									<Image
										src="/assets/images/landingpage/avatar3.png"
										fill
										alt=""
										className="object-cover  absolute"
									/>
								</div>

								<h3 className="text-lg font-semibold mt-2">Louis Tomlinson</h3>
								<h6 className="text-gray-400">Web Developer</h6>
								<p className="text-gray-600 w-8/12 mx-auto mt-2">
									Saya menggunakan Peworld sebagai pencari kerja dan perekrut, dan
									platform ini selalu memberikan hasil yang memuaskan.
								</p>
							</article>
						</div>
					</section>

					<section className="px-5 sm:px-24 py-28">
						<div className="bg-[#5E50A1] rounded-tl-2xl rounded-br-2xl flex justify-between items-center h-[18vw] pr-2 sm:px-20 w-full relative">
							<p className="sm:text-xl lg:text-3xl text-white w-6/12 xl:w-4/12 text-center">
								Sambutlah Masa Depan dengan Peworld
							</p>

							<button
								onClick={() => router.push("/home")}
								className="bg-white text-[#796EAF] text-xs sm:text-base h-min pt-2 pb-2.5 px-5 rounded hover:bg-slate-200 z-[1]">
								Mulai Dari Sekarang
							</button>

							<Image
								src="/assets/images/landingpage/wave.png"
								fill
								alt=""
								className="absolute"
							/>
						</div>
					</section>
				</main>

				<Footer />
			</div>
		</>
	);
}

// export async function getServerSideProps() {
// 	const res = await fetch(`${baseUrl}/users`);
// 	const data = await res.json();
// 	console.log(data);

// 	return { props: { data } };
// }
