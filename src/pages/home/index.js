import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import React, { useEffect, useState } from "react";
import {
	ChevronUpIcon,
	MagnifyingGlassIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { baseUrl } from "@/helpers/baseUrl";
import axios from "axios";
import NoResult from "@/components/Global/NoResult";

const HomePage = ({ data }) => {
	const hasWindow = typeof window !== "undefined";

	const [user_id, setUser_id] = useState(0);
	const [users, setUsers] = useState([]);
	const [skills, setSkills] = useState([]);
	const [sort, setSort] = useState("ASC");
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const limit = 3;

	const { pagination } = users;

	const getUsers = async (search, sort, page, limit) => {
		const response = await axios.get(
			`${baseUrl}/user/worker?search=${search}&sort=${sort}&page=${page}&limit=${limit}`,
		);
		setUsers(response.data);
	};

	const getSkills = async () => {
		const responseSkill = await axios.get(`${baseUrl}/skill`);

		setSkills(responseSkill.data.data);
	};

	useEffect(() => {
		if (hasWindow) {
			const peworld_user_id = localStorage.getItem("peworld_user_id");
			setUser_id(peworld_user_id);
		}

		getUsers(search, sort, page, limit);
		getSkills();
	}, [hasWindow, sort, page, search]);

	const handlePrevious = () => {
		if (page > 1) {
			setPage((prev) => prev - 1);
		}
	};

	const handleNext = () => {
		if (pagination?.totalPage > page) {
			setPage((prev) => prev + 1);
		}
	};

	const handleSearch = () => {
		setSearch(searchTerm);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<div>
			<Navbar />

			<main>
				<div className="bg-[#5E50A1] text-white  py-3">
					<h1 className="w-11/12 mx-auto px-6 text-2xl font-semibold">Top Jobs</h1>
				</div>

				<section className="pt-12 bg-[#F6F7F8] min-h-[100vh]">
					<div className="w-[87vw] px-10 rounded-sm justify-center  mx-auto grid h-13 py-1 items-center bg-white">
						<div className="flex">
							<div className="relative">
								<input
									onKeyDown={handleKeyPress}
									onChange={(e) => setSearchTerm(e.target.value)}
									type="text"
									placeholder="Search..."
									className="block w-[66vw] rounded-md px-4 h-full text-gray-900  placeholder:text-gray-400  focus:outline-none sm:text-sm sm:leading-6"
								/>

								<button className="hover:bg-gray-50 p-1 absolute right-0 top-2.5">
									<MagnifyingGlassIcon className="w-[1.5vw] h-[1.5vw] text-gray-400 " />
								</button>
							</div>

							<div className="flex -pl-2">
								<div className="h-11 w-[1px] ml-7 mr-2 bg-gray-300"></div>

								{sort === "ASC" ? (
									<button
										onClick={() => setSort("DESC")}
										className="flex font-semibold justify-center items-center bg-white hover:bg-gray-50 h-11 w-[8vw] gap-2 text-gray-500">
										<ChevronUpIcon className={`w-[1.1vw] h-[1.1vw] mt-1 `} />
										Sort
									</button>
								) : (
									<button
										onClick={() => setSort("ASC")}
										className="flex font-semibold justify-center items-center bg-white hover:bg-gray-50 h-11 w-[8vw] gap-2 text-gray-500">
										<ChevronDownIcon className={`w-[1.1vw] h-[1.1vw] mt-1 `} />
										Sort
									</button>
								)}

								<button
									onClick={handleSearch}
									className="rounded font-semibold flex justify-center items-center h-11 w-[8vw] ml-2 text-white bg-[#5E50A1] hover:bg-[#5E50A1]/90 ">
									Search
								</button>
							</div>
						</div>
					</div>

					<div className="divide-y mt-12 divide-gray-300 w-[88%] mx-auto rounded-md overflow-hidden min-h-[100vh]">
						{users?.data?.length > 0 ? (
							users?.data
								?.filter((item) => item?.user_id != user_id)
								?.map((item, index) => (
									<article
										key={index}
										className="flex justify-between bg-white px-6 py-9 items-center">
										<div className="flex items-center justify-center gap-7">
											<div className="w-[8vw] h-[8vw] relative mx-auto rounded-full ">
												<Image
													src={item?.photo}
													fill
													alt=""
													className="object-cover rounded-full absolute"
													style={{ objectPosition: "top" }}
												/>
											</div>

											<div className="text-sm">
												<h3 className="text-xl font-semibold capitalize">{item?.name}</h3>

												<p className="text-gray-400 mt-1">{item?.job_title}</p>
												<h6 className="flex items-center gap-1 text-gray-400 mt-1.5">
													<MapPinIcon className="w-[1.5vw] h-[1.5vw]" /> {item?.region}
												</h6>

												<div className="text-white flex flex-wrap gap-x-3 gap-y-4 pr-4 text-sm mt-5">
													{skills?.length > 0 &&
														skills
															?.filter((skillItem) => skillItem?.user_id === item?.user_id)
															?.map((skillItem, index) => (
																<span
																	key={index}
																	className="py-1 px-4 bg-[#fbb01799] hover:bg-[#FBB017] border border-[#FBB017] rounded">
																	{skillItem?.name}
																</span>
															))}
												</div>
											</div>
										</div>
										<Link
											href={`/profile/worker/${item?.user_id}`}
											className="rounded-sm mr-10 flex justify-center items-center h-9 w-[10vw] ml-2 text-white bg-[#5E50A1] hover:bg-[#5E50A1]/90 ">
											Lihat Profile
										</Link>
									</article>
								))
						) : (
							<NoResult />
						)}
					</div>

					<div className="w-full py-12 ">
						<div className="flex justify-center items-center gap-2">
							<button
								className="text-sm h-9 w-9 items-center flex justify-center hover:bg-indigo-50 bg-white border border-gray-200 rounded-sm text-gray-400"
								onClick={handlePrevious}>
								<ChevronLeftIcon className="w-5 h-5" />
							</button>
							{Array.from({ length: pagination?.totalPage }).map((_, index) => {
								let pageNumber = index + 1;

								return (
									<button
										className={`text-sm rounded-sm ${
											pagination?.currentPage === pageNumber
												? "bg-[#5E50A1] text-white"
												: "bg-white text-gray-400 hover:bg-indigo-50"
										} border border-gray-200 h-9 w-9`}
										onClick={() => setPage(pageNumber)}
										key={index}>
										{pageNumber}
									</button>
								);
							})}

							<button
								className="text-sm h-9 w-9 items-center flex justify-center hover:bg-indigo-50 bg-white border border-gray-200 rounded-sm text-gray-400"
								onClick={handleNext}>
								<ChevronRightIcon className="w-5 h-5" />
							</button>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default HomePage;
