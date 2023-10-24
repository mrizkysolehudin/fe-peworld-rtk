import { data } from "autoprefixer";
import React from "react";

const FormSkill = ({ handleChange, dataSkill, handleAddSkill }) => {
	return (
		<article className="bg-white rounded-lg pb-10 mt-7">
			<h1 className="pt-5 px-7 text-xl font-semibold ">Skill</h1>
			<div className="w-full bg-gray-300 h-[1px] mt-3"></div>

			<div className="flex gap-3 px-7 mt-7">
				<input
					name="skill"
					onChange={handleChange}
					value={dataSkill}
					type="text"
					required
					placeholder="Java"
					className="block w-11/12 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>

				<button
					onClick={(e) => handleAddSkill(e)}
					className="flex w-2.5/12  justify-center rounded-md bg-[#FBB017] px-3 pt-2 pb-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FBB017]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					Simpan
				</button>
			</div>
		</article>
	);
};

export default FormSkill;
