const express = require('express');
const router = express.Router();

let estoque = [];


router.get('/', (req, res) => {
    res.json(estoque);
});

router.post("/", (req, res) => {
  const { nome, lote, dataValidade, quantidade, quantidadeMinima, quantidadeIdeal } = req.body;

  if (!nome || !lote || !dataValidade || quantidade === undefined || quantidadeMinima === undefined || quantidadeIdeal === undefined) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  const novoProduto = {
    id: Date.now(),
    nome,
    lote,
    dataValidade,
    quantidade,
    quantidadeMinima,
    quantidadeIdeal
  };

  estoque.push(novoProduto);

  res.status(201).json({ mensagem: "Produto adicionado com sucesso!", produto: novoProduto });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, lote, dataValidade, quantidade, quantidadeMinima, quantidadeIdeal } = req.body;

  const produto = estoque.find(p => p.id == id);
  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  if (nome) produto.nome = nome;
  if (lote) produto.lote = lote;
  if (dataValidade) produto.dataValidade = dataValidade;
  if (quantidade !== undefined) produto.quantidade = quantidade;
  if (quantidadeMinima !== undefined) produto.quantidadeMinima = quantidadeMinima;
  if (quantidadeIdeal !== undefined) produto.quantidadeIdeal = quantidadeIdeal;

  res.json({ mensagem: "Produto atualizado com sucesso!", produto });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  estoque = estoque.filter(p => p.id != id);
  res.json({ message: 'Produto removido com sucesso', estoque });
});

module.exports = router;
