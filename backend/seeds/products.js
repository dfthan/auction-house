/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    { id: 23423412, name: "Markku Testaaja", description: "Paras testaaja mitä tällä planeetalla on", image: 'https://picsum.photos/500', price: 19.20 },
    { id: 53409850, name: "Jooseppi Testaaja", description: "Paras testaaja mitä tällä planeetalla on", image: 'https://picsum.photos/500', price: 19.20 },
    { id: 23094582, name: "Jaakko Testaaja", description: "Paras testaaja mitä tällä planeetalla on", image: 'https://picsum.photos/500', price: 19.20 }
  ]);
};
