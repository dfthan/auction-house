import express from "express";
const router = express.Router();

router.post("/", (_req, res) => {
	res.clearCookie("token").status(200).json({ message: "Logged out" }); // broken
});

module.exports = router;
