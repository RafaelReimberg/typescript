var produtos = [
    { nome: "Notebook", preco: 3000, disponivel: true },
    { nome: "Mouse", preco: 80, disponivel: false },
    { nome: "Teclado", preco: 150, disponivel: true },
    { nome: "Monitor", preco: 1500, disponivel: false },
];
// Filtrar só os produtos disponíveis
var disponiveis = produtos.filter(function (p) { return p.disponivel; });
var indiponiveis = produtos.filter(function (p) { return !p.disponivel; });
// Calcular preço total dos produtos disponíveis
var total = disponiveis.reduce(function (soma, p) { return soma + p.preco; }, 0);
console.log("Produtos disponíveis:");
console.log(disponiveis);
console.log("Produtos indisponíveis:");
console.log(indiponiveis);
console.log("Total: R$ ".concat(total));
