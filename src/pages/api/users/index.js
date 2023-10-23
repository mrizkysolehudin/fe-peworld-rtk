import userModel from "@/models/userModel";

export default async function handler(req, res) {
	if (req.method === "GET") {
		userModel
			.selectAllusers()
			.then((result) => {
				return res.json({ message: "get users success", data: result.rows });
			})
			.catch((error) => {
				return res.json({ message: "error", error: error });
			});
	}

	if (req.method === "POST") {
		const { name, email, phone } = req.body;

		const data = {
			name: name,
			email: email,
			phone: phone,
		};

		userModel
			.insertRecruiter(data)
			.then(() => {
				return res.json({ message: "create user success", data });
			})
			.catch((error) => {
				return res.json({ message: "error", error });
			});
	}
}
