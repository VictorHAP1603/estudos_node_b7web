import { Router } from "express";

import productController from "../controllers/productController";
import pagesController from "../controllers/pagesController";
import userController from "../controllers/userController";

const routes = Router();

routes.get("/", pagesController.homePage);
routes.get("/sobre", pagesController.aboutPage);

routes.get("/produto/:id", productController.productPage);

routes.get("/cadastrar", userController.registerPage);
routes.post("/cadastrar", userController.register);

routes.use((req, res) => res.status(404).send("Pagina não encontrada"));

export default routes;
