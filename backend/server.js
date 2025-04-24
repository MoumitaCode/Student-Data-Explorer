import express from "express";
import "dotenv/config";
import * as db from "./db/index.js";
const requestHandler = express();
const port = process.env.PORT || 3001;
requestHandler.use(express.json());
import "dotenv/config"

requestHandler.get("/api/v1/get-template", (req, res) => {
    res.send("Hello World!");
  });
// Get ell data
requestHandler.get("/api/v1/language-data", async (req, res) => {
	const dbResponse = await db.query("select * from ell_data limit 5");
	console.log(dbResponse);
	res.send(dbResponse);
});

requestHandler.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
