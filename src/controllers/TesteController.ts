import { Request, Response } from "express";

export const HomePage = (rreq: Request, res: Response) => {
  const user = {
    name: "Victor",
    age: 19,
    showWelcome: true,
  };

  return res.render("home", {
    user,
    products: [
      { title: "Panela", price: 10 },
      { title: "Produto X", price: 30 },
      { title: "Produto Y", price: 20 },
    ],
  });
};
