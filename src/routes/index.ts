import { Router } from "express";

import { HomePage } from "../controllers/TesteController";

const routes = Router();

routes.get("/", HomePage);

routes.use((req, res) => res.status(404).send("Pagina não encontrada"));
export default routes;
