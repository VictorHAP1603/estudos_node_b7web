import { Request, Response } from "express";

import Product from "../models/Product";

export default {
  homePage: (req: Request, res: Response) => {
    const user = {
      name: "Victor",
      age: 17,
      showWelcome: true,
    };

    const products = Product.getAll();

    return res.render("pages/home", {
      user,
      maiorDeIdade: false,
      products,
    });
  },

  aboutPage: (req: Request, res: Response) => {
    res.render("pages/sobre");
  },
};
