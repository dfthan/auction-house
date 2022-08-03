import { Model } from "objection";

class Product extends Model {
	static get tableName() {
		return "products";
	}

	static get idColumn() {
		return "id";
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ["name", "price", "description", "image"],
			properties: {
				id: { type: "integer" },
				name: { type: "string", minLength: 1, maxLength: 255 },
				price: { type: "number" },
				image: { type: "string", minLength: 1, maxLength: 255 },
				description: { type: "string", minLength: 1, maxLength: 255 },
				owner_id: { type: "integer" },
			},
		};
	}

	/* TODO
	static relationMappings() {
		return {
			owner: {
				relation: Model.BelongsToOneRelation,
				modelClass: __dirname + "/User",
				join: {
					from: "products.user_id",
					to: "users.id",
				},
			},
		};
	}
	*/
}

module.exports = Product;
