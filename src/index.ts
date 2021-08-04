import express from "express";
import path from "path";
import mustache from "mustache-express";

import routes from "./routes";

const app = express();

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

app.use(express.static(path.join(__dirname, "../public")));

app.use(routes);

app.listen(3000);
