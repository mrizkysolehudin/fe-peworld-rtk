import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#5E50A1] min-h-[20vw] text-white px-16 py-12 text-sm w-screen">
			<Image src="/assets/icons/logo-white.png" alt="" width={150} height={150} />

			<p className="w-3/12 mt-6">
				Dibangun dengan dedikasi dan inovasi untuk masa depan Revolusi Industri 4.0.
			</p>

			<div className="h-[1px] w-full bg-white mt-12"></div>

			<div className="flex justify-between pt-6">
				<p>© 2020 Peworld. All right reserved</p>

				<div className="flex gap-16">
					<p>Telepon</p>
					<p>Email</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
