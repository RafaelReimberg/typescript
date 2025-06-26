var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.calcular = function () {
        console.log("Calculando...");
    };
    return Calculadora;
}());
var calc = new Calculadora();
calc.calcular();
