import bcrypt from "bcryptjs";
import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();
const User = require("../models/User");
const { JWT_SECRET } = require("../util/config");

router.post("/", async (req, res) => {
	try {
		const user = await User.query().findOne({
			email: req.body.email,
		});
		if (!user) {
			return res.status(400).json({
				message: "Invalid credentials",
			});
		}
		const correctPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!(user && correctPassword)) {
			console.log(user);
			return res.status(400).json("Invalid email or password");
		}
		if (user.token) {
			return res.json({ token: user.token });
		}

		const tokenUser = {
			id: user.id,
			email: user.email,
		};
		const token = jwt.sign(tokenUser, JWT_SECRET, {
			expiresIn: "1h",
		});
		user.token = token;
		await User.query().findById(user.id).patch({ token: token });
		res.json({ token });
	} catch (err) {
		res.status(400).json("Something went wrong: " + err);
	}
});

module.exports = router;
