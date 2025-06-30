var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    Carro.prototype.exibirInfo = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, " Ano: ").concat(this.ano, ", Idade: ").concat(this.calcularAno(), " anos da, Cor: ").concat(this.cor));
    };
    Carro.prototype.calcularAno = function () {
        var anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    };
    return Carro;
}());
var meuCarro = new Carro("Honda", "HR-v", 2016, "Marrom");
meuCarro.exibirInfo();
//console.log(`Idade do carro: ${meuCarro.calcularAno()} anos`);
