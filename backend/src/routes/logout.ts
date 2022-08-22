import express from "express";
const router = express.Router();

router.get("/", (_req, res) => {
	res.clearCookie("token").json({ message: "Logged out" }); // broken
});

module.exports = router;
