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
    Veiculo.prototype.exibirInfo = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Ano: ").concat(this.ano));
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carro.prototype.calcularIdade = function () {
        return new Date().getFullYear() - this.ano;
    };
    return Carro;
}(Veiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moto.prototype.calcularIdade = function () {
        var idade = new Date().getFullYear() - this.ano;
        return this.marca === "Honda" ? idade - 1 : idade;
    };
    return Moto;
}(Veiculo));
var carro = new Carro("Toyota", "Corolla", 2015);
carro.exibirInfo();
console.log("Idade do carro: ".concat(carro.calcularIdade(), " anos"));
var moto = new Moto("Honda", "CB500", 2018);
moto.exibirInfo();
console.log("Idade da moto: ".concat(moto.calcularIdade(), " anos"));
var Caminhao = /** @class */ (function (_super) {
    __extends(Caminhao, _super);
    function Caminhao(marca, modelo, ano, pesoToneladas) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.pesoToneladas = pesoToneladas;
        return _this;
    }
    Caminhao.prototype.exibirInfo = function () {
        _super.prototype.exibirInfo.call(this);
        console.log("Peso: ".concat(this.pesoToneladas, " toneladas"));
    };
    Caminhao.prototype.calcularIdade = function () {
        var idade = new Date().getFullYear() - this.ano;
        return this.pesoToneladas > 10 ? idade - 2 : idade;
    };
    return Caminhao;
}(Veiculo));
var caminhao = new Caminhao("Volvo", "FH 540", 2015, 12);
caminhao.exibirInfo();
console.log("Idade do caminh\u00E3o: ".concat(caminhao.calcularIdade(), " anos"));
