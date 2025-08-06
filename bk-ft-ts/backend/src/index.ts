// backend/src/index.ts
import express from "express";
import cors from "cors";

// Criação do servidor Express
// O Express é um framework para Node.js que facilita a criação de APIs e servidores web
const app = express();
const port = 3000;

// Configuração do CORS
// Permite que o frontend acesse os recursos do backend
app.use(cors());

// Definição de dados fictícios
// Esses dados serão usados para simular um banco de dados
// Aqui, estamos criando dois arrays: um para usuários e outro para carros
// Esses arrays contêm objetos com propriedades como id, nome, idade, modelo e ano
// Esses dados serão retornados quando o frontend fizer requisições para os endpoints definidos abaixo
const usuarios = [
  { id: 1,
    nome: "Rafael",
    idade: 38
  },
  { id: 2,
    nome: "Natalia",
    idade: 33
  },
  { id: 3,
    nome: "Gabriel",
    idade: 7
  },
  { id: 4,
    nome: "Luíza",
    idade: 4
  },
];

const carros = [
  { id: 1, modelo: "Fit",   ano: 2008 },
  { id: 2, modelo: "Civic", ano: 2010 },
  { id: 3, modelo: "CRV",   ano: 2012 },
  { id: 4, modelo: "HR-v",  ano: 2016 },
];

// Endpoint GET /usuarios
// Este endpoint retorna a lista de usuários em formato JSON
// Quando o frontend fizer uma requisição GET para /usuarios, o servidor responderá com o array de usuários
// O método res.json() converte o array de usuários em JSON e envia como resposta
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/carros", (req, res) => {
  res.json(carros);
});

// Início do servidor
// O servidor começa a escutar na porta definida (3000)
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
