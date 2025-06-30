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
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Veiculo.prototype.calcularAno = function () {
        return new Date().getFullYear() - this.ano;
    };
    return Veiculo;
}());
var Carro1 = /** @class */ (function (_super) {
    __extends(Carro1, _super);
    function Carro1(marca, modelo, ano, cor) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.cor = cor;
        return _this;
    }
    Carro1.prototype.exibirInfo = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Ano: ").concat(this.ano, ", Idade: ").concat(this.calcularAno(), " anos, Cor: ").concat(this.cor));
    };
    return Carro1;
}(Veiculo));
var meuCarro1 = new Carro1("Honda", "HR-v", 2016, "Marrom");
meuCarro1.exibirInfo();
