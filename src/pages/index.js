import Image from "next/image";
import Head from "next/head";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import Link from "next/link";

export default function HomePage() {
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
					<section className="flex w-screen mt-28 px-20">
						<div className="w-6/12 mt-[5vw]">
							<h3 className="text-4xl font-semibold w-7/12 leading-[50px]">
								Talenta terbaik negri untuk perubahan revolusi 4.0
							</h3>
							<p className="w-9/12 mt-3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
								ipsum et dui rhoncus auctor.
							</p>
							<Link
								href="/home"
								className="mt-10 block w-fit rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
								Mulai Dari Sekarang
							</Link>
						</div>

						<div className="w-6/12">
							<div className="w-[35vw] h-[35vw] relative">
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

					<section className="flex mt-40 w-screen px-28 justify-center">
						<div className="w-6/12 pl-10 relative">
							<div className="absolute w-[12vw] h-[12vw] -mt-[4vw] -ml-[5.5vw] bg-[#5E50A1] z-[1]"></div>

							<div className="w-[40vw] h-[35vw] relative">
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

						<div className="pl-[13vw]">
							<h3 className="text-3xl w-9/12 font-semibold">
								Kenapa harus mencari tallent di peworld
							</h3>

							<ul className="gap-6 grid mt-10 ">
								<p className="flex gap-3">
									<Image
										src="/assets/icons/checklist.svg"
										alt=""
										width={24}
										height={24}
									/>
									Lorem ipsum dolor sit amet.
								</p>
								<p className="flex gap-3">
									<Image
										src="/assets/icons/checklist.svg"
										alt=""
										width={24}
										height={24}
									/>
									Lorem ipsum dolor sit amet.
								</p>
								<p className="flex gap-3">
									<Image
										src="/assets/icons/checklist.svg"
										alt=""
										width={24}
										height={24}
									/>
									Lorem ipsum dolor sit amet.
								</p>
								<p className="flex gap-3">
									<Image
										src="/assets/icons/checklist.svg"
										alt=""
										width={24}
										height={24}
									/>
									Lorem ipsum dolor sit amet.
								</p>
							</ul>
						</div>
					</section>

					<section className="flex w-screen mt-40 px-20 pb-32">
						<div className="w-6/12 pt-2 pl-10">
							<h3 className="text-4xl font-semibold w-7/12 leading-[50px]">
								Skill Tallent
							</h3>
							<p className="w-9/12 mt-3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
								ipsum et dui rhoncus auctor.
							</p>

							<div className="flex gap-10">
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

								<ul className="gap-6 grid mt-10 ">
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

						<div className="w-6/12 -ml-10 relative">
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
							Their opinion about peworld
						</h1>

						<div className="pt-10 flex justify-center gap-6 relative">
							<button className="bg-[#5E50A1] hover:bg-[#5E50A1]/90 h-min absolute z-[1] left-[7vw] top-[14vw] p-2 rounded-full">
								<ChevronLeftIcon className="h-8 w-8 text-white" />
							</button>

							<button className="bg-[#5E50A1] hover:bg-[#5E50A1]/90 h-min absolute z-[1] right-[7vw] top-[14vw] p-2 rounded-full">
								<ChevronRightIcon className="h-8 w-8 text-white" />
							</button>

							<article className="text-sm w-3/12 px-10 bg-white shadow text-center py-8">
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
								<p className="text-gray-600 w-8/12 mx-auto mt-2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
									ipsum et dui rhoncus auctor.
								</p>
							</article>

							<article className="text-sm w-3/12 px-10 bg-white shadow text-center py-8">
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
								<p className="text-gray-600 w-8/12 mx-auto mt-2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
									ipsum et dui rhoncus auctor.
								</p>
							</article>

							<article className="text-sm w-3/12 px-10 bg-white shadow text-center py-8">
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
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
									ipsum et dui rhoncus auctor.
								</p>
							</article>
						</div>
					</section>

					<section className="px-24 py-28">
						<div className="bg-[#5E50A1] rounded-tl-2xl rounded-br-2xl flex justify-between items-center h-[18vw] px-20 w-full relative">
							<p className="text-3xl text-white w-3/12">Lorem ipsum dolor sit amet</p>

							<button className="bg-white text-[#796EAF] h-min pt-2 pb-2.5 px-5 rounded hover:bg-slate-200 z-[1]">
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
