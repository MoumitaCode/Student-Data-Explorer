import express from "express";
import "dotenv/config";
const requestHandler = express();
const port = process.env.PORT;
requestHandler.use(express.json());
import "dotenv/config"
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });