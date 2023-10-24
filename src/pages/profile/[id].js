import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import React from "react";
import axios from "axios";
import { baseUrl } from "@/helpers/baseUrl";
import ProfileWorker from "@/components/Profile/ProfileWorker";
import ProfileCompany from "@/components/Profile/ProfileCompany";

const ProfilePage = ({ data }) => {
	const role =
		typeof window !== "undefined" ? localStorage.getItem("peworld_role") : null;

	return (
		<div>
			<Navbar />

			{role == 0 ? <ProfileCompany data={data} /> : <ProfileWorker data={data} />}

			<Footer />
		</div>
	);
};

export default ProfilePage;

export async function getServerSideProps(req, res) {
	const id = req.params.id;
	const response = await axios.get(`${baseUrl}/user/${id}`);
	const role = response.data.data[0].role;

	if (role === 1) {
		const responseSkill = await axios.get(`${baseUrl}/skill/user-skill/${id}`);
		const responsePortfolio = await axios.get(
			`${baseUrl}/portfolio/user-portfolio/${id}`,
		);
		const responseWorkExperience = await axios.get(
			`${baseUrl}/workexperience/user-workexperience/${id}`,
		);

		return {
			props: {
				data: {
					user: response.data.data[0],
					skill: responseSkill.data.data,
					portfolio: responsePortfolio.data.data,
					workExperience: responseWorkExperience.data.data,
				},
			},
		};
	}

	if (role === 0) {
		return {
			props: {
				data: response.data.data[0],
			},
		};
	}
}
