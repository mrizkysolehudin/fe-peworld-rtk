import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import { baseUrl } from "@/helpers/baseUrl";
import http from "@/helpers/http";
import { MapPinIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const HirePage = ({ resData }) => {
	const { user, skills } = resData;

	const router = useRouter();
	const { id } = router.query;
	const hasWindow = typeof window !== "undefined";

	const [user_id, setUser_id] = useState(null);

	useEffect(() => {
		if (hasWindow) {
			const peworld_user_id = localStorage.getItem("peworld_user_id");
			setUser_id(peworld_user_id);
		}
	}, [hasWindow]);

	const [disabled, setDisabled] = useState(true);
	const [data, setData] = useState({
		objective: "",
		name: "",
		email: "",
		phone: "",
		description: "",
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleHire = async (e) => {
		e.preventDefault();

		try {
			const dataHire = {
				objective: data.objective,
				name: data.name,
				email: data.email,
				phone: data.phone,
				description: data.description,
				recruiter_id: user_id,
				worker_id: id,
			};

			const responseHire = await http().post(`${baseUrl}/hire`, dataHire);

			if (responseHire) {
				Swal.fire({
					title: "Add hire success",
					text: "Add hire success",
					icon: "success",
				});

				router.push(`/home`);
			}
		} catch (error) {
			Swal.fire({
				title: "Add hire error",
				text: "Add hire error",
				icon: "error",
			});
		}
	};

	return (
		<div>
			<Navbar />

			<main className="w-screen flex flex-wrap sm:flex-nowrap justify-center px-8 pt-12 pb-20 bg-[#F6F7F8]">
				<section className=" md:w-[40%] lg:w-[30%] sm:h-[41rem] bg-white rounded-sm">
					<div className="p-10">
						<div className="relative w-[10vw] h-[10vw] mx-auto">
							<Image
								src={user?.photo}
								alt="avatar"
								fill
								className="rounded-full object-cover"
							/>
						</div>

						<div className="text-sm">
							<h4 className="text-2xl font-semibold mt-5">{user?.name}</h4>

							<p className="mt-2">{user?.job_title}</p>

							{user?.region && (
								<h6 className="flex  items-center gap-2 my-5 text-gray-400">
									<MapPinIcon className="w-[1.5vw] h-[1.5vw]" /> {user?.region}
								</h6>
							)}

							<p className="text-gray-400">{user?.description}</p>
						</div>

						<div className="mt-8">
							{skills?.length > 0 ? (
								<>
									<h5 className="text-2xl font-semibold">Skill</h5>

									<div className="text-white flex flex-wrap gap-x-3 gap-y-4 pr-4 text-sm mt-5">
										{skills?.map((item, index) => (
											<span
												key={index}
												className="py-1 px-4 bg-[#fbb01799] hover:bg-[#FBB017] border border-[#FBB017] rounded">
												{item?.name}
											</span>
										))}
									</div>
								</>
							) : (
								""
							)}
						</div>
					</div>
				</section>

				<section className="sm:w-7/12 mt-20 sm:mt-0">
					<div className="sm:w-9/12 mx-auto">
						<h2 className="font-semibold text-4xl">Hubungi {user?.name}</h2>

						<p className="text-lg text-gray-500 mt-3">
							Temukan pekerja berbakat dengan berbagai keterampilan dan pengalaman yang
							siap untuk bergabung dengan tim Anda.
						</p>

						<form onSubmit={handleHire} className="mt-10">
							<div>
								<label className="block text-sm font-medium leading-6 text-gray-400">
									Tujuan tentang pesan ini
								</label>

								<input
									name="objective"
									type="text"
									onChange={handleChange}
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
									name="name"
									type="text"
									onChange={handleChange}
									value={data?.name}
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
									onChange={handleChange}
									value={data?.email}
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
									onChange={handleChange}
									value={data?.phone}
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
									name="description"
									onChange={handleChange}
									value={data?.description}
									placeholder="Deskripsikan/jelaskan lebih detail "
									className="block w-full h-[13vw] rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
							</div>

							<button
								type="submit"
								disabled={
									data.objective === "" ||
									data.name === "" ||
									data.email === "" ||
									data.phone === "" ||
									data.description === ""
								}
								className="flex w-full mt-10 justify-center disabled:bg-[#FBB017]/70 rounded-md bg-[#FBB017] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FBB017]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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

export async function getServerSideProps(req, res) {
	const id = req.params.id;
	const response = await axios.get(`${baseUrl}/user/${id}`);

	const responseSkill = await axios.get(`${baseUrl}/skill/user-skill/${id}`);

	return {
		props: {
			resData: {
				user: response?.data?.data[0],
				skills: responseSkill?.data?.data,
			},
		},
	};
}
