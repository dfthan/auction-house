import express from "express";
const router = express.Router();
const User = require("../models/User");

router.get("/", async (_req, res) => {
	const user = await User.query();
	res.json(user);
});

router.get("/:id", async (req, res) => {
	const user = await User.query().findById(req.params.id);
	const products = await User.relatedQuery("products").for(req.params.id);
	if (user) {
		res.json({ user, userProducts: products });
	} else {
		res.status(404).json({ message: "User not found" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		await User.query().deleteById(req.params.id);
		res.status(202).send(`User id ${req.params.id} deleted successfully`);
	} catch (err) {
		res.status(400).json({ err });
	}
});

module.exports = router;
