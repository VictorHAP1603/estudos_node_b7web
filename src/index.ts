import express from "express";
import path from "path";
import mustache from "mustache-express";
import dotenv from "dotenv";

import routes from "./routes";

dotenv.config();

const app = express();

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

app.engine("mustache", mustache());

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(process.env.PORT);
