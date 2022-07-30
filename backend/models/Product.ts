const { Model } = require('objection');

class Product extends Model {
    static get tableName() {
        return 'products';
    }

    static get idColumn() {
        return 'id';
    }

}

module.exports = Product;