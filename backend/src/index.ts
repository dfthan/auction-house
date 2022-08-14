import cors from "cors";
import express from "express";
const { PORT } = require("./util/config");
const cookieParser = require("cookie-parser");
const app = express();
const knexfile = require("./database/knexfile");
const { Model } = require("objection");
const knex = require("knex");
Model.knex(knex(knexfile.development));
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "http://172.31.23.43:3000", credentials: true }));

app.use("/api/products", require("./routes/products"));
app.use("/api/users", require("./routes/users"));
app.use("/api/register", require("./routes/register"));
app.use("/api/login", require("./routes/login"));
app.use("/api/logout", require("./routes/logout"));

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
