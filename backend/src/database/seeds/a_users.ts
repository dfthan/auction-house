import { Knex } from "knex";
const bcrypt = require("bcryptjs");

// Hash the password for login
const hashedPassword = bcrypt.hashSync("admin", 1);

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("users").del();

	// Inserts seed entries
	await knex("users").insert([
		{
			id: 9999999,
			username: "admin",
			password: hashedPassword,
			email: "admin@admin.com",
		},
	]);
}
