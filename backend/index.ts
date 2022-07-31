import express from "express";
const { PORT } = require("./util/config");
const app = express();
const knexfile = require("./knexfile");
const { Model } = require("objection");
const knex = require("knex");
Model.knex(knex(knexfile.development));
const productsRouter = require("./routes/products");
app.use(express.json());

app.use("/api/products", productsRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
