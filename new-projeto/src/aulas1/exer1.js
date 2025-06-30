var numeros = [10, 15, 20, 25, 30];
// Usando for...of para iterar sobre o array de numeros
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var numero = numeros_1[_i];
    console.log("Numero encontrado \u00E9 ".concat(numero));
}
var nomes = ["Rafael", "Natalia", "Gabriel", "Luíza"];
// Usando forEach para iterar sobre o array de nomes
nomes.forEach(function (nome, indice) {
    console.log("Nome encontrado na posicao ".concat(indice, ": ").concat(nome));
});
var frutas = ["Maçã", "Banana", "Uva", "Manga", "Abacaxi"];
// Usando forEach para iterar sobre o array de frutas
frutas.forEach(function (fruta) {
    console.log("A fruta escolhida foi: ".concat(fruta));
});
// Usando for...of para iterar sobre o array de frutas
for (var _a = 0, frutas_1 = frutas; _a < frutas_1.length; _a++) {
    var fruta = frutas_1[_a];
    console.log("A fruta escolhida foi: ".concat(fruta));
}
