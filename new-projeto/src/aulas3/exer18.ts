class Produto{
  public nome: string;
  private preco: number;

  constructor(nome: string, precoProduto: number) {
    this.nome = nome;
    this.preco = precoProduto;
  }

  aplicarDescontoPercentual(percentual: number) {
    if (percentual > 0) {
      this.preco -= this.preco * (percentual / 100);
    } else {
      console.log("Percentual deve ser maior que zero.");
    }
  }

  aplicarDescontoValor(valor: number) {
    if (valor > 0) {
      this.preco -= valor;
    } else {
      console.log("Valor do desconto deve ser maior que zero.");
    }
  }

  consultarPreco() {
    console.log(`O preço do produto ${this.nome} é R$ ${this.preco.toFixed(2)}`);

    return this.preco;
  }
}

class ProdutoDigital extends Produto {
  protected tamanhoMB: number;

  constructor(nome: string, precoProduto: number, tamanhoMB: number) {
    super(nome, precoProduto);
    this.tamanhoMB = tamanhoMB;
  }

  consultarTamanho() {
    console.log(`O tamanho do produto digital ${this.nome} é ${this.tamanhoMB} MB`);
    return this.tamanhoMB;
  }
}


const livro = new Produto("Livro de TypeScript", 150.00);
livro.aplicarDescontoPercentual(10);
livro.aplicarDescontoValor(5);
livro.consultarPreco();

const videoAula = new ProdutoDigital("Curso de TypeScript", 200.00, 500);
videoAula.aplicarDescontoPercentual(15);
videoAula.consultarPreco();
videoAula.consultarTamanho();
