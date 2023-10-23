import userModel from "@/models/userModel";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const user_id = req.query.id;

		userModel
			.selectUser(user_id)
			.then((result) => {
				if (!result.rowCount) {
					return res.json({ message: "error", error: "User id is not found" });
				}

				return res.json({ message: "get user success", data: result.rows });
			})
			.catch((error) => {
				return res.json({ message: "error", error: error });
			});
	}

	if (req.method === "PUT") {
		const user_id = req.query.id;

		const { rowCount } = await userModel.selectUser(user_id);
		if (!rowCount) {
			return res.json({ message: "error", error: "User id is not found" });
		}

		const { name, email, phone } = req.body;

		const data = {
			user_id,
			name: name,
			email: email,
			phone: phone,
		};

		userModel
			.updateWorker(data)
			.then(() => {
				return res.json({ message: "create user success", data });
			})
			.catch((error) => {
				return res.json({ message: "error", error });
			});
	}

	if (req.method === "DELETE") {
		const user_id = req.query.id;

		const { rowCount } = await userModel.selectUser(user_id);
		if (!rowCount) {
			return res.json({ message: "error", error: "User id is not found" });
		}

		userModel
			.deleteUser(user_id)
			.then(() => {
				return res.json({ message: `delete user ${user_id} success` });
			})
			.catch((error) => {
				return res.json({ message: "error", error });
			});
	}
}
