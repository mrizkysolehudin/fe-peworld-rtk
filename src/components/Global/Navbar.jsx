import { logoutAction } from "@/redux/reducers/authSlice";
import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Navbar = () => {
	const dispatch = useDispatch();
	const hasWindow = typeof window !== "undefined";

	const [token, setToken] = useState("");
	const [role, setRole] = useState(null);
	const [user_id, setUser_id] = useState(null);
	const [isToggleOpen, setIsToggleOpen] = useState(false);

	useEffect(() => {
		if (hasWindow) {
			const peworld_token = localStorage.getItem("peworld_token");
			setToken(peworld_token);
			const peworld_role = localStorage.getItem("peworld_role");
			setRole(peworld_role);
			const peworld_user_id = localStorage.getItem("peworld_user_id");
			setUser_id(peworld_user_id);
		}
	}, [hasWindow]);

	return (
		<nav className="flex justify-between py-7 px-20 w-screen shadow-lg">
			<Link href="/">
				<Image src="/assets/icons/logo-indigo.svg" alt="" width={127} height={35} />
			</Link>

			{token ? (
				<div className="gap-9 flex text-gray-400">
					<button className="hover:bg-gray-50 px-1 rounded">
						<BellIcon className="w-[1.8vw] h-[1.8vw]" />
					</button>
					<button className="hover:bg-gray-50 px-1 rounded">
						<EnvelopeIcon className="w-[1.8vw] h-[1.8vw]" />
					</button>

					<div className="relative">
						<button
							onClick={() => setIsToggleOpen(!isToggleOpen)}
							className="rounded-full">
							<Image src="/assets/images/avatar3.png" alt="" width={35} height={35} />
						</button>

						{isToggleOpen && (
							<div className="grid bg-gray-300 absolute right-0 font-semibold rounded overflow-hidden">
								<Link
									href={`/profile/${role == 0 ? "company" : "worker"}/${user_id}`}
									className="pt-1 pb-1 px-5 hover:bg-gray-400  text-black">
									Profile
								</Link>
								<button
									onClick={() => dispatch(logoutAction())}
									className="bg-red-500 hover:bg-red-600 text-white pt-1 pb-2 px-5 cursor-pointer">
									Logout
								</button>
							</div>
						)}
					</div>
				</div>
			) : (
				<div className="gap-5 flex">
					<Link
						href="/login"
						className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#5E50A1] shadow-sm ring-1 ring-inset ring-[#5E50A1] hover:bg-gray-50">
						Masuk
					</Link>
					<Link
						href="/register/worker"
						className="rounded-md bg-[#5E50A1] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5E50A1]/90">
						Daftar
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
