import express from "express";
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
	const item = await Product.query();
	res.json(item);
});

router.get("/:id", async (req, res) => {
	const item = await Product.query().findById(req.params.id);
	if (item) {
		res.json(item);
	} else {
		res.status(404).json({ message: "Product not found" });
	}
});

router.post("/", async (req, res) => {
	try {
		const item = await Product.query().insert(req.body);
		res.status(201).json(item);
	} catch (err) {
		res.status(400).json({ err });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const item = await Product.query()
			.findById(req.params.id)
			.patch(req.body);
		res.status(202).send(`Item id ${req.params.id} updated successfully`);
	} catch (err) {
		res.status(400).json({ err });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const item = await Product.query().deleteById(req.params.id);
		res.status(202).send(`Item id ${req.params.id} deleted successfully`);
	} catch (err) {
		res.status(400).json({ err });
	}
});

module.exports = router;
