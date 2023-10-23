import { Pool } from "pg";

let db = new Pool({
	user: process.env.NEXT_PUBLIC_DB_USER,
	password: process.env.NEXT_PUBLIC_DB_PASSWORD,
	host: process.env.NEXT_PUBLIC_DB_HOST,
	port: process.env.NEXT_PUBLIC_DB_PORT,
	database: process.env.NEXT_PUBLIC_DB_NAME,
});

export default db;
