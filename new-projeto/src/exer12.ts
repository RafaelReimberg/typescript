import e from "express";

class Produto {
  private produto: string;

  constructor(produto: string) {
    this.produto = produto;
  }

  exibirProduto() {
    console.log(`Produto: ${this.produto}`);
  }

  entrada(valor: number) {
    this.produto += valor;
  }

  getProduto(){
    return this.produto;
  }
}



class Categoria extends Produto {
  public categoria: string;

  constructor(categoria: string) {
    super(""); // Passe um valor padrão ou ajuste conforme necessário
    this.categoria = categoria;
  }

  exibirCategoria() {
    console.log(`Categoria: ${this.categoria}`);
  }
}
