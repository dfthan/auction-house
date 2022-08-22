import express from "express";
const router = express.Router();
const auth = require("../util/middleware");

router.get("/", auth, async (_req, res) => {
	try {
		res.json(true);
	} catch (err) {
		res.status(400).json({ err });
	}
});

module.exports = router;
