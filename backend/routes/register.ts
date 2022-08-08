import bcrypt from "bcryptjs";
import express from "express";
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
	try {
		const alreadyAccount = await User.query().findOne({
			email: req.body.email,
		});
		if (alreadyAccount) {
			return res.status(400).json("Email already exists");
		}

		const encryptPassword = await bcrypt.hash(req.body.password, 10);

		await User.query().insert({
			username: req.body.username,
			email: req.body.email.toLowerCase(),
			password: encryptPassword,
		});
		res.json("New account made successfully, please login");
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
