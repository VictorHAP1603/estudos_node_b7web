import { Request, Response } from "express";

export default {
  registerPage: (req: Request, res: Response) => {
    res.render("pages/cadastrar");
  },

  register: (req: Request, res: Response) => {
    const { name, password } = req.body;
    let message = "";

    if (name && password) {
      message = "Cadastro efetuado com sucesso";
    } else {
      message = "Erro ao cadastrar, tente novamente";
    }

    return res.render("pages/cadastrar", { message });
  },
};
