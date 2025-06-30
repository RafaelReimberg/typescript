const numeros: number[] = [10, 15, 20, 25, 30];

// Usando for...of para iterar sobre o array de numeros
for(let numero of numeros) {
    console.log(`Numero encontrado é ${numero}`);
}

const nomes: string[] = ["Rafael", "Natalia", "Gabriel", "Luíza"];

// Usando forEach para iterar sobre o array de nomes
nomes.forEach((nome, indice) => {
    console.log(`Nome encontrado na posicao ${indice}: ${nome}`);
});


const frutas: string[] = ["Maçã", "Banana", "Uva", "Manga", "Abacaxi"];

// Usando forEach para iterar sobre o array de frutas
frutas.forEach((fruta) => {
    console.log(`A fruta escolhida foi: ${fruta}`);
});

// Usando for...of para iterar sobre o array de frutas
for(let fruta of frutas) {
    console.log(`A fruta escolhida foi: ${fruta}`);
}
