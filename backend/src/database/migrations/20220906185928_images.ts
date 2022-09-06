import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("images", (table) => {
		table.increments("id").primary();
		table.string("filename").notNullable();
		table.string("path").notNullable();
		table.integer("size").notNullable();
		table.string("mimetype").notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists("images");
}
