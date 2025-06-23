import { Request, response, Response } from 'express';
import express from 'express';


const app = express();
app.use(express.json());

app.post("/usuario", (req: Request, res: Response) => {
  const { nome, idade } = req.body;

 if (!nome || typeof idade !== "number" || idade < 0) {
   return res.status(400).json({ erro: "Dados inválidos!" });
 }

 return res.status(201).json({ mensagem: "Usuário criado com sucesso!", nome, idade });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
