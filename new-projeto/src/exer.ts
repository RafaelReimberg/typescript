let nomes: string[] = ["Lucas", "Mariana", "Pedro",];

// Adicionando um novo nome no array
nomes.push("Fernanda");
console.log("Nome adicionado no final do array: " + nomes);

// Removendo o último nome do array
nomes.pop();
console.log("Último nome removido do array: " + nomes);

// Adicionando um nome no início do array
nomes.unshift("Gabriel");
console.log("Nome adicionado no início do array: " + nomes);

// Exibindo todos os nomes presentes no array
for (let i: number = 0; i < nomes.length; i++) {
    console.log(`O nome é ${nomes[i]}`);
}
