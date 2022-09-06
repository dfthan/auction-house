import { Model } from "objection";

class Image extends Model {
	static get tableName() {
		return "images";
	}

	static get idColumn() {
		return "id";
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ["filename", "path", "size", "mimetype"],
			properties: {
				id: { type: "integer" },
				filename: { type: "string", minLength: 1, maxLength: 255 },
				path: { type: "string", minLength: 1, maxLength: 255 },
				size: { type: "integer", minLength: 1, maxLength: 255 },
				mimetype: { type: "string", minLength: 1, maxLength: 255 },
			},
		};
	}
}

module.exports = Image;
