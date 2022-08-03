import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("products").del();

	// Inserts seed entries
	await knex("products").insert([
		{
			id: 23423412,
			name: "Testituote1 asdasdads",
			description: "Paras testaaja mitä tällä planeetalla on",
			image: "https://picsum.photos/500",
			price: 19.2,
			user_id: 9999999,
		},
		{
			id: 53409850,
			name: "Testituote2",
			description: "Paras testaaja mitä tällä planeetalla on",
			image: "https://picsum.photos/500",
			price: 19.2,
			user_id: 9999999,
		},
		{
			id: 23094582,
			name: "Testituote3 kpaweofkawepof",
			description: "Paras testaaja mitä tällä planeetalla on",
			image: "https://picsum.photos/500",
			price: 19.2,
			user_id: 9999999,
		},
		{
			id: 99999999,
			name: "ES energy drink",
			description: "Parasta maailmassa",
			image: "https://public.keskofiles.com/f/k-ruoka/product/6410405072863?w=480&h=480&fit=max&auto=format&fm=jpg&cs=srgb",
			price: 2,
			user_id: 9999999,
		},
	]);
}
