import express from "express";
import path from "path";
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "images/" });
const Image = require("../models/Image");

router.post("/", upload.single("image"), async (req, res) => {
	// @ts-ignore
	const { filename, path, size, mimetype } = req.file;
	try {
		const image = await Image.query().insert({
			filename,
			path,
			size,
			mimetype,
		});
		console.log(image);

		res.json({ success: true, image });
	} catch (err) {
		res.status(400).json({ err });
	}
});

router.get("/:filename", async (req, res) => {
	const img = await Image.query().findOne({ filename: req.params.filename });
	const directoryname = path.resolve();
	const filepath = directoryname + "/images/" + req.params.filename;

	if (img) {
		res.type(img.mimetype).sendFile(filepath);
	} else {
		res.status(404).json({ message: "Image not found" });
	}
});

module.exports = router;
