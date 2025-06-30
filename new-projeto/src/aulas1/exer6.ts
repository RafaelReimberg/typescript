class Product {
  private quantidade: number = 0;

  entrada(valor: number){
    this.quantidade += valor;
  }

  getQuantidade(){
    return this.quantidade;
  }
}

const entradaEstoque = new Product();
entradaEstoque.entrada(10);
console.log(`Quantidade em estoque: ${entradaEstoque.getQuantidade()}`);

