import type { Knex } from "knex";
// knex + dotenv works horribly, must tell the path to the .env file
require("dotenv").config({ path: "../../.env" });

// db url cant be loaded from config file because db migrations wont work

const config: { [key: string]: Knex.Config } = {
	development: {
		client: "pg",
		connection: process.env.PG_CONNECTION_STRING,
		debug: true,
		migrations: {
			directory: __dirname + "/migrations/",
		},
		seeds: {
			directory: __dirname + "/seeds/",
		},
	},
};

module.exports = config;
