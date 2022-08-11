import express from "express";
const router = express.Router();
const Product = require("../models/Product");
const auth = require("../util/middleware");

router.get("/", async (_req, res) => {
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

router.post("/", auth, async (req, res) => {
	try {
		//console.log(res.locals.userId); <-- user id from token check
		const item = await Product.query().insert({
			...req.body,
			user_id: res.locals.userId,
		});
		res.status(201).json(item);
	} catch (err) {
		res.status(400).json({ err });
	}
});

router.put("/:id", auth, async (req, res) => {
	try {
		await Product.query().findById(req.params.id).patch(req.body);
		res.status(202).send(`Item id ${req.params.id} updated successfully`);
	} catch (err) {
		res.status(400).json({ err });
	}
});

router.delete("/:id", auth, async (req, res) => {
	try {
		const product = await Product.query().findById(req.params.id);
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		if (product.user_id !== res.locals.userId) {
			return res.status(401).json({ message: "Unauthorized" });
		}
		await Product.query().deleteById(req.params.id);
		res.status(202).send(`Item id ${req.params.id} deleted successfully`);
	} catch (err) {
		res.status(400).json("Something went wrong: " + err);
	}
});

module.exports = router;
