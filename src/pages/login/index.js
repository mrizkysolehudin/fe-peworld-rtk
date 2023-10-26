import { loginAction } from "@/redux/reducers/authSlice";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
	const router = useRouter();

	const dispatch = useDispatch();
	const { isLoading, isLogin } = useSelector((state) => state.userAuth);

	const token =
		typeof window !== "undefined" ? localStorage.getItem("peworld_token") : false;

	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		dispatch(loginAction(data));
	};

	useEffect(() => {
		if (token) {
			router.push("/");
		}
	}, [isLoading, isLogin, token]);

	return (
		<>
			<Head>
				<title>Login | Peworld</title>
			</Head>

			<div className="px-5 sm:px-20 pt-7 pb-10 flex w-[100vw] bg-[#F6F7F8] min-h-screen gap-16 relative">
				<section
					style={{
						backgroundImage: "url('/assets/images/bg-loginregister.png')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						borderRadius: "10px",
						boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
					}}
					className="relative sm:w-1/2 text-white grid justify-center items-center h-[95vh] ">
					<div className="bg-[#5E50A1]/80 absolute w-full h-full"></div>

					<div className="z-[1]">
						<div className="absolute top-0 flex m-4">
							<Image src="/assets/icons/logo.svg" alt="" width={24} height={24} />
							<p className="ml-2">Peworld</p>
						</div>
						<h1 className="text-3xl w-7/12 mx-auto font-semibold hidden sm:block">
							Temukan developer berbakat & terbaik di berbagai bidang keahlian
						</h1>
					</div>
				</section>

				<section className="sm:w-1/2 h-[90%] sm:h-[100%] sm:relative absolute pr-5 sm:pr-0">
					<h3 className="text-2xl font-semibold mt-20">Halo, Pewpeople</h3>

					<p className="mt-2 text-sm ">
						Kami siap membantu Anda mencari talenta terbaik untuk proyek-proyek Anda.
						Ayo mulai!
					</p>

					<form onSubmit={handleLogin} className="mt-10">
						<div>
							<label className="block text-sm font-medium leading-6 text-gray-400">
								Email
							</label>

							<input
								type="text"
								name="email"
								onChange={handleChange}
								required
								placeholder="Masukan alamat email"
								className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>

						<div className="mt-5">
							<label className="block text-sm font-medium leading-6 text-gray-400">
								Kata Sandi
							</label>

							<input
								type="password"
								name="password"
								onChange={handleChange}
								autoComplete="current-password"
								required
								placeholder="Masukan kata sandi"
								className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>

						<button
							onClick={(e) => handleLogin(e)}
							type="submit"
							className="flex w-full mt-16 justify-center rounded-md bg-[#FBB017] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FBB017]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Masuk
						</button>
					</form>

					<p className="text-center mt-6">
						Anda belum punya akun?{" "}
						<Link
							href="/register/worker"
							className="text-[#FBB017] hover:text-[#FBB017]/80">
							Daftar disini
						</Link>
					</p>
				</section>
			</div>
		</>
	);
};

export default LoginPage;
