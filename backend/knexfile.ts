import type { Knex } from "knex";
require("dotenv").config();
// db url cant be loaded from config file because db migrations wont work

const config: { [key: string]: Knex.Config } = {
	development: {
		client: "pg",
		connection: process.env.PG_CONNECTION_STRING,
		debug: true,
		migrations: {
			directory: __dirname + "/migrations/",
		},
	},
};

module.exports = config;
