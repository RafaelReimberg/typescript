Posso continuar agora com o tópico:
"Percorrer Arrays com for...of e forEach – maneiras modernas de leitura"

Quer que eu siga?




<!-- // Aulas de TypeScript -->

tabuada de multiplicação
let num: number = 5;
for (let i: number = 0; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

contador de 1 a 10
let num: number = 1;
while (num <= 10) {
    console.log(`O número é ${num}`);
    num++;
}



realizando uma check de idade -- usando if/else
let idade: number = 18;
if (idade <= 18) {
    console.log("Menor de idade");
}else {
    console.log("Maior de idade");
}



percorrendo um array de números -- usando for
let num: number[] = [2, 4, 6, 8, 10];
for (let i: number = 0; i < num.length; i++) {
    console.log(`O número é ${num[i]}`);
}



percorrendo um array de nomes -- usando for
let nomes: Array<string> = ["Rafael", "Natalia", "Gabriel", "Luíza"];
recuperando o primeiro nome do array com indice
console.log("Nome: " + nomes[0]);

recuperando o tamanho do array sem indice
console.log("Nomes: " + nomes);

percorrendo o array com for
for (let i: number = 0; i < nomes.length; i++) {
console.log(`O nome é ${nomes[i]}`);
}


manipulando um array de frutas -- usando push, pop, unshift e shift
let frutas: string[] = ["Maçã", "Banana", "Laranja"];
adicionando um novo nome no array
frutas.push("Uva");
console.log("Frutas: " + frutas);


let frutaRemovida: string | undefined = frutas.pop() || "Nenhuma fruta removida";
removendo o último nome do array
frutas.pop();
console.log("Frutas: " + frutas);
console.log(`Fruta removida: ${frutaRemovida}`);


frutas.unshift("Abacaxi");
console.log("Frutas após adicionar Abacaxi: " + frutas);

let primeiraFruta: string | undefined = frutas.shift() || "Nenhuma fruta disponível";
console.log(`Fruta removida: ${primeiraFruta}`);
console.log(frutas);

frutas[1] = "Morango";
console.log("Frutas após substituir Banana por Morango: " + frutas);
