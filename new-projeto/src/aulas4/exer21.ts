interface Compravel{
  resumo(): void;
}

class Endereco{
  constructor(
    public logradouro: string,
    public cidade: string,
    public estado: string,
    public cep: string
  ){}
}

abstract class Produto implements Compravel {
  constructor(public nome: string, public preco: number) {}

  abstract resumo(): void;
}

class Livro extends Produto {
  constructor(nome: string, preco: number, public autor: string) {
    super(nome, preco);
  }

  resumo(){
    console.log(`Livro: ${this.nome}, Autor: ${this.autor}, Preço: R$${this.preco}`);

  }
}

class Eletronico extends Produto {
  constructor(nome: string, preco: number, public marca: string) {
    super(nome, preco);
  }

  resumo(){
    console.log(`Eletrônico: ${this.nome}, Marca: ${this.marca}, Preço: R$${this.preco}`);
  }
}

class Cliente {
  public compras: Produto[] = [];

  constructor(public nome: string, public endereco: Endereco) {}

  adcionarCompra(produto: Produto) {
    this.compras.push(produto);
  }

  exibirResumo(){
    console.log(`Cliente: ${this.nome}`);
    console.log(`Endereço: ${this.endereco.logradouro}, ${this.endereco.cidade}, ${this.endereco.estado}, ${this.endereco.cep}`);
    console.log('Compras:');
    this.compras.forEach(compra => compra.resumo());
  }
}

// Exemplo de uso
const endereco = new Endereco('Rua Emmanuel', 'Cidade São Paulo', 'SP', '04843-120');
const cliente = new Cliente('Rafael', endereco);
const livro = new Livro('Aprendendo TypeScript', 59.90, 'Gabriel Reimberrg');
const eletronico = new Eletronico('Smartphone 15', 999.90, 'Iphnone');


cliente.adcionarCompra(livro);
cliente.adcionarCompra(eletronico);
cliente.exibirResumo();

// Saída esperada:
// Cliente: Rafael
// Endereço: Rua Emmanuel, Cidade São Paulo, SP, 04843-120
// Compras:
// Livro: Aprendendo TypeScript, Autor: Gabriel Reimberrg, Preço: R$59.90
// Eletrônico: Smartphone 15, Marca: Iphnone
// Preço: R$999.90

