import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterWorkerPage = () => {
	return (
		<>
			<Head>
				<title>Register | Peworld</title>
			</Head>

			<div className="px-20 pt-6 pb-10 flex w-[100vw] bg-[#F6F7F8] min-h-screen gap-16">
				<section
					style={{
						backgroundImage: "url('/assets/images/bg-loginregister.png')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						borderRadius: "10px",
						boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
					}}
					className="relative w-1/2 text-white grid justify-center items-center h-[95vh] ">
					<div className="bg-[#5E50A1]/80 absolute w-full h-full"></div>

					<div className="z-[1]">
						<div className="absolute top-0 flex m-4">
							<Image src="/assets/icons/logo.svg" alt="" width={24} height={24} />
							<p className="ml-2">Peworld</p>
						</div>
						<h1 className="text-3xl w-7/12 mx-auto font-bold leading-10">
							Temukan developer berbakat & terbaik di berbagai bidang keahlian
						</h1>
					</div>
				</section>

				<section className="w-1/2 h-[100%] ">
					<h3 className="text-2xl font-semibold mt-16">Halo, Pewpeople</h3>

					<p className="mt-2 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum
						et dui rhoncus auctor.
					</p>

					<form className="mt-10">
						<div>
							<label className="block text-sm font-medium leading-6 text-gray-400">
								Nama
							</label>

							<input
								name="name"
								type="text"
								required
								placeholder="Masukan nama panjang"
								className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>

						<div className="mt-5">
							<label className="block text-sm font-medium leading-6 text-gray-400">
								Email
							</label>

							<input
								name="email"
								type="email"
								required
								placeholder="Masukan alamat email"
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
								Kata Sandi
							</label>

							<input
								name="password"
								type="password"
								autoComplete="current-password"
								required
								placeholder="Masukan kata sandi"
								className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>

						<div className="mt-5">
							<label className="block text-sm font-medium leading-6 text-gray-400">
								konfirmasi Kata Sandi
							</label>

							<input
								name="password"
								type="password"
								autoComplete="current-password"
								required
								placeholder="Masukan konfirmasi kata sandi"
								className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>

						<button
							type="submit"
							className="flex w-full mt-10 justify-center rounded-md bg-[#FBB017] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FBB017]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Daftar
						</button>
					</form>

					<p className="text-center mt-6">
						Anda sudah punya akun?{" "}
						<Link href="/login" className="text-[#FBB017] hover:text-[#FBB017]/80">
							Masuk disini
						</Link>
					</p>
				</section>
			</div>
		</>
	);
};

export default RegisterWorkerPage;
