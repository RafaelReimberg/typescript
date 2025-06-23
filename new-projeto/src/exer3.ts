type Produto = {
  nome: string;
  preco: number;
  disponivel: boolean;
};

const produtos: Produto[] = [
  { nome: "Notebook", preco: 3000, disponivel: true },
  { nome: "Mouse", preco: 80, disponivel: false },
  { nome: "Teclado", preco: 150, disponivel: true },
  { nome: "Monitor", preco: 1500, disponivel: false },
];

// Filtrar só os produtos disponíveis
const disponiveis = produtos.filter(p => p.disponivel);

const indiponiveis = produtos.filter(p => !p.disponivel);

// Calcular preço total dos produtos disponíveis
const total = disponiveis.reduce((soma, p) => soma + p.preco, 0);

console.log("Produtos disponíveis:");
console.log(disponiveis);

console.log("Produtos indisponíveis:");
console.log(indiponiveis);
console.log(`Total: R$ ${total}`);
