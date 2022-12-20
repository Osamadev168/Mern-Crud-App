import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Routes/routes.js";
import { Connection } from "./Database/db.js";
const App = express();
dotenv.config();
//middlwares
App.use(cors());
App.use(bodyParser.json({ extended: true }));
App.use(bodyParser.urlencoded({ extended: true }));
App.use("/", router);

const username = process.env.UserName;
const password = process.env.Password;
const port = "7000";
//server and database connection
Connection(username, password);
App.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
