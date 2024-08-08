import express from "express";
import { connectToDB } from "./db/dbConnection.js";
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json

app.get("/", (req, res) => res.send("Express is ready"));

connectToDB();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
