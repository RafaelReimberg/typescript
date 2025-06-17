var nomes = ["Lucas", "Mariana", "Pedro",];
// Adicionando um novo nome no array
nomes.push("Fernanda");
console.log("Nome adicionado no final do array: " + nomes);
// Removendo o último nome do array
nomes.pop();
console.log("Nome removido: " + nomes);
// Recuperando o primeiro nome do array com índice
nomes.unshift("Gabriel");
console.log("Nome adicionado no início do array: " + nomes);
// Recuperando o tamanho do array sem índice
for (var i = 0; i < nomes.length; i++) {
    console.log("O nome \u00E9 ".concat(nomes[i]));
}
