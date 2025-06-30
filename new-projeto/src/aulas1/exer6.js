var Product = /** @class */ (function () {
    function Product() {
        this.quantidade = 0;
    }
    Product.prototype.entrada = function (valor) {
        this.quantidade += valor;
    };
    Product.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    return Product;
}());
var entradaEstoque = new Product();
entradaEstoque.entrada(10);
console.log("Quantidade em estoque: ".concat(entradaEstoque.getQuantidade()));
