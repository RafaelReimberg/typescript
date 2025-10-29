var listaNomes = ["Lucas", "Mariana", "Pedro",];
// Adicionando um novo nome no array
listaNomes.push("Fernanda");
console.log("Nome adicionado no final do array: " + listaNomes);
// Removendo o último nome do array
listaNomes.pop();
console.log("Último nome removido do array: " + listaNomes);
// Adicionando um nome no início do array
listaNomes.unshift("Gabriel");
console.log("Nome adicionado no início do array: " + listaNomes);
// Exibindo todos os nomes presentes no array
for (var i = 0; i < listaNomes.length; i++) {
    console.log("O nome \u00E9 ".concat(listaNomes[i]));
}
