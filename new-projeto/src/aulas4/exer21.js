var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Endereco = /** @class */ (function () {
    function Endereco(logradouro, cidade, estado, cep) {
        this.logradouro = logradouro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }
    return Endereco;
}());
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    return Produto;
}());
var Livro = /** @class */ (function (_super) {
    __extends(Livro, _super);
    function Livro(nome, preco, autor) {
        var _this = _super.call(this, nome, preco) || this;
        _this.autor = autor;
        return _this;
    }
    Livro.prototype.resumo = function () {
        console.log("Livro: ".concat(this.nome, ", Autor: ").concat(this.autor, ", Pre\u00E7o: R$").concat(this.preco));
    };
    return Livro;
}(Produto));
var Eletronico = /** @class */ (function (_super) {
    __extends(Eletronico, _super);
    function Eletronico(nome, preco, marca) {
        var _this = _super.call(this, nome, preco) || this;
        _this.marca = marca;
        return _this;
    }
    Eletronico.prototype.resumo = function () {
        console.log("Eletr\u00F4nico: ".concat(this.nome, ", Marca: ").concat(this.marca, ", Pre\u00E7o: R$").concat(this.preco));
    };
    return Eletronico;
}(Produto));
var Cliente = /** @class */ (function () {
    function Cliente(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.compras = [];
    }
    Cliente.prototype.adcionarCompra = function (produto) {
        this.compras.push(produto);
    };
    Cliente.prototype.exibirResumo = function () {
        console.log("Cliente: ".concat(this.nome));
        console.log("Endere\u00E7o: ".concat(this.endereco.logradouro, ", ").concat(this.endereco.cidade, ", ").concat(this.endereco.estado, ", ").concat(this.endereco.cep));
        console.log('Compras:');
        this.compras.forEach(function (compra) { return compra.resumo(); });
    };
    return Cliente;
}());
// Exemplo de uso
var endereco = new Endereco('Rua Emmanuel', 'Cidade São Paulo', 'SP', '04843-120');
var cliente = new Cliente('Rafael', endereco);
var livro = new Livro('Aprendendo TypeScript', 59.90, 'Gabriel Reimberrg');
var eletronico = new Eletronico('Smartphone 15', 999.90, 'Iphnone');
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
