import { Request, Response } from "express";
import Product from "../models/Product";

export default {
  productPage: (req: Request, res: Response) => {
    const { id } = req.params;

    let product = Product.getById(+id);

    product = {
      ...product,
      price: product.price.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
    };

    return res.render("pages/product", product);
  },
};
