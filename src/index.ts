import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import { connectToDB } from "./db";
import { createUser, getUser } from "./controllers/user.controller";
import { getLogging } from "./controllers/logging.controller";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
config();

connectToDB([{ dbName: "db2", uri: process.env.MONGO_URI2 as string }]);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.route("/user").post(createUser).get(getUser);
app.route("/logging").get(getLogging);

app.listen(3000, () => {
  console.info("Server is running on port http://localhost:3000");
});
