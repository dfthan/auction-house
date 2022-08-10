import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("products", (table) => {
		table.increments("id").primary();
		table.string("name").notNullable();
		table.string("description").notNullable();
		table.string("image").notNullable();
		table.decimal("price").notNullable();
		table
			.integer("user_id")
			.unsigned()
			.references("id")
			.inTable("users")
			.onDelete("CASCADE");
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table.timestamp("updated_at").defaultTo(knex.fn.now());
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists("products");
}
