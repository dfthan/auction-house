import express from "express";
const router = express.Router();
const auth = require("../util/middleware");

router.get("/", auth, (_req, res) => {
	return res.clearCookie("token").json({ message: "Logged out" });
});

module.exports = router;
