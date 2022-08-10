const jwt = require("jsonwebtoken");
import { NextFunction, Request, Response } from "express";
const { JWT_SECRET } = require("../util/config");

const checkToken = (req: Request, res: Response, next: NextFunction) => {
	const tokenWithBearer = req.headers["authorization"];
	if (!tokenWithBearer) {
		return res.status(401).json({ message: "No auth provided" });
	}
	try {
		const token = tokenWithBearer.split(" ")[1];
		const userData = jwt.verify(token, JWT_SECRET);
		res.locals.userId = userData.id;
		next();
	} catch (err) {
		return res.status(401).json({ message: "Not authorized" });
	}
};

module.exports = checkToken;
