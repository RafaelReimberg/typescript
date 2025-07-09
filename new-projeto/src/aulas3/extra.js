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
var Produto2 = /** @class */ (function () {
    function Produto2(nome, marca, ano, validade) {
        if (validade === void 0) { validade = 0; }
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
        this.validade = validade;
    }
    Produto2.prototype.exibirInfo = function () {
        console.log("Nome: ".concat(this.nome, ", Marca: ").concat(this.marca, ", Ano: ").concat(this.ano, ", Validade: ").concat(this.validade, " meses"));
    };
    return Produto2;
}());
var Lapis = /** @class */ (function (_super) {
    __extends(Lapis, _super);
    function Lapis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lapis.prototype.calcularIdade = function () {
        return new Date().getFullYear() - this.ano;
    };
    return Lapis;
}(Produto2));
var newLapis = new Lapis("Lápis de cor", "Faber-Castell", 2020, 3);
newLapis.exibirInfo();
console.log("Idade do l\u00E1pis: ".concat(newLapis.calcularIdade(), " anos, Validade: ").concat(newLapis.validade, " meses"));
