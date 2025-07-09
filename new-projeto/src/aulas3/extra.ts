abstract class Produto2{
  nome : string;
  marca : string;
  ano : number;
  validade : number;

  constructor(nome: string, marca: string, ano: number, validade: number = 0) {
    this.nome = nome;
    this.marca = marca;
    this.ano = ano;
    this.validade = validade;
  }

  exibirInfo(): void {
    console.log(`Nome: ${this.nome}, Marca: ${this.marca}, Ano: ${this.ano}, Validade: ${this.validade} meses`);
  }

  abstract calcularIdade(): number;
}

class Lapis extends Produto2 {
  calcularIdade(): number {
    return new Date().getFullYear() - this.ano;
  }
}

const newLapis = new Lapis("Lápis de cor", "Faber-Castell", 2020, 3);
newLapis.exibirInfo();
console.log(`Idade do lápis: ${newLapis.calcularIdade()} anos, Validade: ${newLapis.validade} meses`);
