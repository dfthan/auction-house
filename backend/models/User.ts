import { Model } from "objection";

class User extends Model {
	static get tableName() {
		return "users";
	}
	static get idColumn() {
		return "id";
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ["username", "email", "password"],
			properties: {
				id: { type: "integer" },
				username: { type: "string", minLength: 1, maxLength: 255 },
				email: { type: "string", minLength: 1, maxLength: 255 },
				password: { type: "string", minLength: 1, maxLength: 255 },
				token: { type: "string", minLength: 1, maxLength: 255 },
			},
		};
	}
}

module.exports = User;
