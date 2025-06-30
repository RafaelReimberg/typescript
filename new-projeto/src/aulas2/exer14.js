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
var Funcionario1 = /** @class */ (function () {
    function Funcionario1(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario1.prototype.calcularSalario = function () {
        return this.salario * 12;
    };
    return Funcionario1;
}());
var funcionario1 = new Funcionario1("Rafael", 4200);
console.log("O ".concat(funcionario1.nome, " e recebe no ano o valor ").concat(funcionario1.calcularSalario(), " reais."));
var Gerente1 = /** @class */ (function (_super) {
    __extends(Gerente1, _super);
    function Gerente1(nome, salario, bonus) {
        var _this = _super.call(this, nome, salario) || this;
        _this.bonus = bonus;
        return _this;
    }
    Gerente1.prototype.calcularSalario = function () {
        return _super.prototype.calcularSalario.call(this) + this.bonus;
    };
    return Gerente1;
}(Funcionario1));
var gerente1 = new Gerente1("Natalia", 800, 350);
console.log("A gerente ".concat(gerente1.nome, " recebe R$ ").concat(gerente1.calcularSalario(), " por ano."));
