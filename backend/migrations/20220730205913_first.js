exports.up = (knex) => {
    return knex.schema
        .createTable('products', table => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('description').notNullable();
            table.string('image').notNullable();
            table.decimal('price').notNullable();
        })
};

exports.down = (knex) => {
    return knex.schema
        .dropTableIfExists('products')
};
