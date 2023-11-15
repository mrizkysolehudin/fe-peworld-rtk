import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import FormPortfolio from "@/components/EditProfile/Worker/FormPortfolio";
import { baseUrl } from "@/helpers/baseUrl";
import http from "@/helpers/http";
import {
	ArrowDownLeftIcon,
	ArrowUpRightIcon,
	MapPinIcon,
	PhotoIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import FormWorkExperience from "@/components/EditProfile/Worker/FormWorkExperience";
import FormSkill from "@/components/EditProfile/Worker/FormSkill";
import { useDispatch, useSelector } from "react-redux";
import { getOneUserAction } from "@/redux/reducers/user/getOneUser";
import { editUserAction } from "@/redux/reducers/user/editUserSlice";

const EditProfileCompanyPage = () => {
	const hasWindow = typeof window !== "undefined";
	const router = useRouter();
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.user.data);

	const [user_id, setUser_id] = useState(null);
	const [data, setData] = useState(null);
	const [image, setImage] = useState("");
	const [showImage, setShowImage] = useState("");

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeImage = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			setShowImage(reader.result);
		};
		reader.readAsDataURL(file);

		setImage(file);
	};

	useEffect(() => {
		if (hasWindow) {
			const peworld_user_id = localStorage.getItem("peworld_user_id");
			setUser_id(peworld_user_id);
		}

		if (user_id) {
			dispatch(getOneUserAction(user_id));
		}
	}, [hasWindow, user_id]);

	useEffect(() => {
		if (currentUser) {
			setData({
				name: currentUser?.name,
				email: currentUser?.email,
				phone: currentUser?.phone,
				region: currentUser?.region,
				job_title: currentUser?.job_title,
				company: currentUser?.company,
				company_field: currentUser?.company_field,
				instagram: currentUser?.instagram,
				linkedin: currentUser?.linkedin,
				description: currentUser?.description,
			});

			setShowImage(currentUser?.photo);
		}
	}, [currentUser]);

	const handleAddSkill = async (e) => {
		e.preventDefault();

		try {
			const dataSubmit = {
				name: data?.skill,
				user_id: user_id,
			};

			const responseSkill = await http().post(`${baseUrl}/skill`, dataSubmit);

			if (responseSkill) {
				Swal.fire({
					title: "Add skill success",
					text: "Add skill success",
					icon: "success",
				});
				setData({
					skill: "",
				});
			}
		} catch (error) {
			Swal.fire({
				title: "Add skill error",
				text: "Add skill error",
				icon: "error",
			});
		}
	};

	const handleAddWorkExperience = async (e) => {
		e.preventDefault();

		try {
			const dataWE = {
				position: data.position,
				company_name: data.company_name,
				we_date: data.we_date,
				we_description: data.we_description,
				user_id: user_id,
			};

			const responseWE = await http().post(`${baseUrl}/workexperience`, dataWE);

			if (responseWE) {
				Swal.fire({
					title: "Add work experience success",
					text: "Add work experience success",
					icon: "success",
				});

				router.push(`/profile/worker/${user_id}`);

				setTimeout(() => {
					location.reload();
				}, 1000);
			}
		} catch (error) {
			Swal.fire({
				title: "Add work experience error",
				text: "Add work experience error",
				icon: "error",
			});
		}
	};

	const handleEditUser = () => {
		dispatch(editUserAction({ data, image, router }));
	};

	return (
		<div>
			<Navbar />

			<main className="w-screen ">
				<div className="bg-[#5E50A1] w-full h-[24vw]"></div>
				<div className="bg-[#F6F7F8] px-6 sm:px-20 lg:px-32  relative h-[474dvh] sm:h-[374dvh] lg:h-[354dvh]">
					<div className="w-[87vw] h-full absolute -mt-[10vw] sm:-mt-[19vw] flex flex-wrap sm:flex-nowrap gap-12">
						<section className="w-[100%] sm:w-[30%]">
							<article className="bg-white rounded-md">
								<div className="px-3 lg:px-10 py-8">
									<div className="grid justify-center gap-4">
										<div className="relative w-[10vw] h-[10vw] mx-auto">
											<Image
												src={showImage}
												alt="avatar"
												fill
												className="object-cover rounded-full "
												style={{ objectPosition: "top" }}
											/>
										</div>

										<div className="relative flex w-[10vw] justify-center group">
											<button className="text-gray-400 flex items-center py-1 px-8 justify-center gap-1 font-semibold text-lg group-hover:bg-gray-50">
												<PencilIcon className="w-[1.5vw] h-[1.5vw]" /> Edit
											</button>
											<input
												type="file"
												onChange={handleChangeImage}
												className="absolute opacity-0 w-[10vw] "
											/>
										</div>
									</div>

									<div className="text-sm">
										<h4 className="text-2xl font-semibold mt-10">{currentUser?.name}</h4>

										<p className="mt-2">{currentUser?.job_title}</p>

										{currentUser?.region && (
											<h6 className="flex  items-center gap-2 my-5 text-gray-400">
												<MapPinIcon className="w-[1.5vw] h-[1.5vw]" /> {currentUser?.region}
											</h6>
										)}
										{currentUser?.company && (
											<h6 className="flex  items-center gap-2 mt-5 text-gray-400">
												{currentUser?.company}
											</h6>
										)}
									</div>
								</div>
							</article>

							<div>
								<button
									onClick={() => handleEditUser()}
									className="mt-7 rounded bg-[#5E50A1] px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
									Simpan
								</button>

								<button
									onClick={() => router.back()}
									type="button"
									className="mt-4 rounded border-[#5E50A1] border px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-[#5E50A1] shadow-sm hover:bg-gray-200">
									Batal
								</button>
							</div>
						</section>

						<section className="w-full sm:w-[55%] xl:w-[80%] ">
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
												name="name"
												onChange={handleChange}
												value={data?.name}
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
												name="job_title"
												onChange={handleChange}
												value={data?.job_title}
												type="text"
												placeholder="Masukan job desk"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Domisili
											</label>

											<input
												name="region"
												onChange={handleChange}
												value={data?.region}
												type="text"
												placeholder="Masukan domisili"
												className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>

										<div className="mt-5">
											<label className="block text-sm font-medium leading-6 text-gray-400">
												Tempat kerja
											</label>

											<input
												name="company"
												onChange={handleChange}
												value={data?.company}
												type="text"
												placeholder="Masukan tempat kerja"
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
												type="text"
												placeholder="Tuliskan deskripsi singkat"
												className="block w-full h-[13vw] rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
										</div>
									</div>
								</article>

								<FormSkill
									dataSkill={data?.skill}
									handleChange={handleChange}
									handleAddSkill={handleAddSkill}
								/>

								<FormWorkExperience
									handleChange={handleChange}
									handleAddWorkExperience={handleAddWorkExperience}
								/>

								<FormPortfolio
									handleChange={handleChange}
									data={data}
									user_id={user_id}
								/>
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
