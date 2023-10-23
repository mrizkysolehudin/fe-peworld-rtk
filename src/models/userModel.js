import db from "@/configs/db";

// user
const selectAllusers = () => {
	return db.query(`
	SELECT * FROM users 
	`);
};

const selectUser = (user_id) => {
	return db.query(`SELECT * FROM users WHERE user_id=${user_id}`);
};

const deleteUser = (user_id) => {
	return db.query(`DELETE FROM users WHERE user_id=${user_id}`);
};

const findEmail = (email) => {
	return db.query(`SELECT * FROM users WHERE email='${email}'`);
};

const countDataUsers = () => {
	return db.query("SELECT COUNT(*) FROM users");
};

// recruiter
const selectRecruiter = (user_id) => {
	return db.query(`SELECT * FROM users WHERE ROLE=0 AND user_id=${user_id}`);
};

const insertRecruiter = (data) => {
	const {
		name,
		email,
		phone,
		password,
		confirmPassword,
		photo,
		perusahaan,
		jabatan,
	} = data;

	return db.query(
		`INSERT INTO users (name,email,phone,password,confirmPassword,photo,perusahaan,jabatan,role) VALUES( '${name}', '${email}', '${phone}', '${password}', '${confirmPassword}', '${photo}', '${perusahaan}','${jabatan}', ${0})`,
	);
};

const updateRecruiter = (data) => {
	const { user_id, name, email, phone, photo, perusahaan, jabatan } = data;
	return db.query(
		`UPDATE users SET name='${name}', email='${email}', phone='${phone}', photo='${photo}', perusahaan='${perusahaan}', jabatan='${jabatan}' WHERE ROLE=1 AND user_id=${user_id}`,
	);
};

// worker
const selectWorker = (user_id) => {
	return db.query(`SELECT * FROM users WHERE ROLE=1 AND user_id=${user_id}`);
};

const insertWorker = (data) => {
	const { name, email, phone, password, confirmPassword, photo } = data;

	return db.query(
		`INSERT INTO users (name,email,phone,password,confirmPassword,photo,role) VALUES( '${name}', '${email}', '${phone}', '${password}', '${confirmPassword}', '${photo}', ${1}')`,
	);
};

const updateWorker = (data) => {
	const { user_id, name, email, phone, photo } = data;
	return db.query(
		`UPDATE users SET name='${name}', email='${email}', phone='${phone}', photo='${photo}' WHERE ROLE=1 AND user_id=${user_id}`,
	);
};

module.exports = {
	selectAllusers,
	selectUser,
	deleteUser,
	findEmail,
	countDataUsers,
	selectRecruiter,
	insertRecruiter,
	updateRecruiter,
	selectWorker,
	insertWorker,
	updateWorker,
};
