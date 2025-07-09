import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/form", (req, res) => {
  const { nome, email } = req.body;
  console.log("Dados recebidos:", nome, email);
  res.json({ message: "Formulário recebido com sucesso!" });
});

app.listen(3000, () => {
  console.log("Backend rodando em http://localhost:3000");
});
