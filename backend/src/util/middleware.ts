const jwt = require("jsonwebtoken");
import { NextFunction, Request, Response } from "express";
const { JWT_SECRET } = require("../util/config");

/* JWT in the header, going with cookies for now
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
*/

const auth = (req: Request, res: Response, next: NextFunction) => {
	const token = req.cookies.token;
	if (!token) {
		return res.status(401).json({ message: "No auth provided" });
	}
	try {
		const userData = jwt.verify(token, JWT_SECRET);
		res.locals.userId = userData.id;
		next();
	} catch (err) {
		return res.status(401).json({ message: "Not authorized" });
	}
};

module.exports = auth;
