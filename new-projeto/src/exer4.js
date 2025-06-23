"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/usuarios", function (req, res) {
    var _a = req.body, nome = _a.nome, idade = _a.idade;
    if (!nome || typeof idade !== "number" || idade < 0) {
        return res.status(400).json({ erro: "Dados inválidos!" });
    }
    return res.status(201).json({ mensagem: "Usuário criado com sucesso!", nome: nome, idade: idade });
});
app.listen(3000, function () { return console.log("Servidor rodando na porta 3000"); });
