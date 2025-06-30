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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, idade, salario, registro, adimissao) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.registro = registro;
        this.adimissao = adimissao;
    }
    Funcionario.prototype.trabalhando = function () {
        console.log("".concat(this.nome, " est\u00E1 trabalhando na \u00E1rea de contabilidade. Com idade de ").concat(this.idade, " anos."));
    };
    Funcionario.prototype.receberSalario = function () {
        console.log("Recebeu o sal\u00E1rio de R$".concat(this.salario, "."));
    };
    Funcionario.prototype.registrar = function () {
        console.log("Foi registrado com o n\u00FAmero ".concat(this.registro, " e adimitido(a) no ano ").concat(this.adimissao, "."));
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.ordem = function () {
        console.log("".concat(this.nome, " est\u00E1 coordenando a equipe com o novo projeto."));
    };
    return Gerente;
}(Funcionario));
var gerente = new Gerente('Natalia', 33, 12000, 'RA12345', 2016);
gerente.trabalhando();
gerente.ordem();
gerente.receberSalario();
gerente.registrar();
var funcionario = document.getElementById('funcionarios');
if (funcionario) {
    funcionario.innerHTML = "\n    <h2>Funcion\u00E1rios</h2>\n    <table>\n      <tr>\n        <th>Nome</th>\n        <th>Idade</th>\n        <th>Sal\u00E1rio</th>\n        <th>Registro</th>\n        <th>Admiss\u00E3o</th>\n      </tr>\n      <tr>\n        <td>".concat(gerente.nome, "</td>\n        <td>").concat(gerente.idade, "</td>\n        <td>R$").concat(gerente.salario, "</td>\n        <td>").concat(gerente.registro, "</td>\n        <td>").concat(gerente.adimissao, "</td>\n      </tr>\n    </table>\n  ");
}
var gerenteInfo = document.getElementById('gerente');
if (gerenteInfo) {
    gerenteInfo.innerHTML = "\n    ordem(".concat(gerente.ordem(), ")\n  ");
}
