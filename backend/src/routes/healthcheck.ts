import express from "express";
const router = express.Router();

router.get("/", (_req, res) => {
	return res.json({ message: "healthy" });
});

module.exports = router;
