import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('products', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('image').notNullable();
    table.boolean('available').defaultTo(true);
    table.integer('category_id').notNullable();

    table.foreign('category_id')
      .references('id')
      .inTable('categories')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('products');
}