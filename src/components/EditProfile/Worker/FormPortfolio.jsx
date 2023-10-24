import React, { useState } from "react";
import {
	ArrowDownLeftIcon,
	ArrowUpRightIcon,
	MapPinIcon,
	PhotoIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import http from "@/helpers/http";
import { baseUrl } from "@/helpers/baseUrl";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const FormPortfolio = ({ handleChange, data, user_id }) => {
	const router = useRouter();

	const [imagePortfolio, setImagePortfolio] = useState("");
	const [showImagePortfolio, setShowImagePortfolio] = useState("");

	const handleChangeImage = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			setShowImagePortfolio(reader?.result);
		};
		reader?.readAsDataURL(file);

		console.log(imagePortfolio);
		setImagePortfolio(e.target.files[0]);
	};

	const handleAddPortfolio = async (e) => {
		e.preventDefault();

		try {
			const formData = new FormData();
			formData.append("name", data?.portfolio_name);
			formData.append("type", data.portfolio_type);
			formData.append("link", data?.portfolio_link);
			formData.append("image", imagePortfolio);
			formData.append("user_id", user_id);

			const response = await http().post(`${baseUrl}/portfolio`, formData);

			if (response.data) {
				Swal.fire({
					title: "Add portfolio success",
					text: "Add portfolio success",
					icon: "success",
				});

				router.push(`/profile/worker/${user_id}`);

				setTimeout(() => {
					location.reload();
				}, 1000);
			}
		} catch (error) {
			console.log(error);
			Swal.fire({
				title: "Add portfolio error",
				text: "Add portfolio error",
				icon: "error",
			});
		}
	};

	return (
		<article className="bg-white rounded-lg pb-10 mt-8">
			<h1 className="pt-5 px-7 text-xl font-semibold ">Portofolio</h1>
			<div className="w-full bg-gray-300 h-[1px] mt-3"></div>

			<div className="px-7 mt-5 ">
				<div>
					<label className="block text-sm font-medium leading-6 text-gray-400">
						Nama aplikasi
					</label>

					<input
						name="portfolio_name"
						onChange={handleChange}
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
						name="portfolio_link"
						onChange={handleChange}
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
								name="portfolio_type"
								onChange={handleChange}
								value="mobile"
								id="repositoryYes"
								className="mr-2  checked:bg-red-500 checked:text-red-500 "
							/>
							<label className="text-gray-900">Aplikasi mobile</label>
						</div>

						<div className="border-[1.5px] border-gray-200 px-5 py-3 rounded-md">
							<input
								type="radio"
								name="portfolio_type"
								onChange={handleChange}
								value="web"
								id="repositoryNo"
								className="mr-2  checked:bg-red-500 checked:text-red-500"
							/>
							<label className="text-gray-900">Aplikasi web</label>
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

						{showImagePortfolio && (
							<div className="bg-gray-300 w-full h-full absolute">
								<Image
									src={showImagePortfolio ?? ""}
									alt=""
									fill
									className="absolute w-full h-full object-contain"
								/>
							</div>
						)}

						<input
							name="image"
							type="file"
							onChange={handleChangeImage}
							className="w-full h-[22vw] opacity-0 px-3 py-2 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="my-8 h-[1px] w-full bg-slate-200"></div>

				<button
					onClick={(e) => handleAddPortfolio(e)}
					className="rounded border-[#FBB017] border px-3.5 pt-2 pb-2.5 w-full text-sm font-semibold text-[#FBB017] shadow-sm hover:bg-[#FBB017] hover:text-white">
					Tambah portofolio
				</button>
			</div>
		</article>
	);
};

export default FormPortfolio;
