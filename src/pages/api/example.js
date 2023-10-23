export default function handler(req, res) {
	const body = req.body;

	if (req.method !== "POST") {
		res.status(405).json({ message: "Only POST requests allowed" });
	}

	if (!body.email) {
		res.status(404).json({ message: "Email not found" });
	}
	if (!body.password) {
		res.status(404).json({ message: "Password not found" });
	}

	if (body.email === "bim" && body.password === "1212") {
		res.status(200).json({ message: "login success" });
	} else {
		res.status(404).json({ message: "Email or password is wrong" });
	}
}
