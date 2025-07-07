// backend/src/index.ts

import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

// Dados simulados
const usuarios = [
  { id: 1, nome: "Rafael", idade: 38},
  { id: 2, nome: "Natalia", idade: 33},
  { id: 3, nome: "Gabriel", idade: 7},
  { id: 4, nome: "Luíza", idade: 4},
]; 

// Endpoint GET /usuarios
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
