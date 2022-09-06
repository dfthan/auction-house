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
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

console.log(knexfile.development);

app.use("/health", require("./routes/healthcheck"));
app.use("/products", require("./routes/products"));
app.use("/users", require("./routes/users"));
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/logout", require("./routes/logout"));
app.use("/status", require("./routes/userStatus"));
app.use("/images", require("./routes/images"));

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
