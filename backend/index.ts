import express from "express";
const { PORT } = require("./util/config");
const app = express();
const knexfile = require("./knexfile");
const { Model } = require("objection");
const knex = require("knex");
Model.knex(knex(knexfile.development));
app.use(express.json());

app.use("/api/products", require("./routes/products"));
app.use("/api/users", require("./routes/users"));
app.use("/api/register", require("./routes/register"));
app.use("/api/login", require("./routes/login"));

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
