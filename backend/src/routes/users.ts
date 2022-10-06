import express from "express";
const router = express.Router();
const User = require("../models/User");

router.get("/", async (_req, res) => {
	const user = await User.query();
	res.json(user);
});

router.get("/:id", async (req, res) => {
	const user = await User.query().findById(req.params.id);
	let { username, created_at } = user;
	//const products = await User.relatedQuery("products").for(req.params.id);
	created_at = created_at.toLocaleDateString();
	if (user) {
		res.json({ username: username, created_at: created_at });
	} else {
		res.status(404).json({ message: "User not found" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		await User.query().deleteById(req.params.id);
		res.status(202).json(`User id ${req.params.id} deleted successfully`);
	} catch (err) {
		res.status(400).json({ err });
	}
});

module.exports = router;
