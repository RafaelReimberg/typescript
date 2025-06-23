function validarFormulario(dados) {
    var erros = [];
    if (dados.nome.trim().length === 0) {
        erros.push("Nome é obrigatório.");
    }
    if (dados.idade <= 0 || isNaN(dados.idade)) {
        erros.push("Idade inválida.");
    }
    if (!dados.email.includes("@")) {
        erros.push("E-mail inválido.");
    }
    return erros;
}
var resultado = validarFormulario({ nome: "Rafael", idade: 0, email: "teste@teste.com" });
console.log(resultado);
