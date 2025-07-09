abstract class Veiculo1 {
  protected marca: string;
  protected modelo: string;
  protected ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInfo(): void {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
  }

  abstract calcularIdade(): number;
}

class Carro1 extends Veiculo1 {
  calcularIdade(): number {
    return new Date().getFullYear() - this.ano;
  }
}

class Moto1 extends Veiculo1 {
  calcularIdade(): number {
    let idade = new Date().getFullYear() - this.ano;
    return this.marca === "Honda" ? idade - 1 : idade;
  }
}

class Caminhao1 extends Veiculo1 {
  pesoToneladas: number;

  constructor(marca: string, modelo: string, ano: number, pesoToneladas: number) {
    super(marca, modelo, ano);
    this.pesoToneladas = pesoToneladas;
  }

  exibirInfo(): void {
    super.exibirInfo();
    console.log(`Peso: ${this.pesoToneladas} toneladas`);
  }

  calcularIdade(): number {
    const idade = new Date().getFullYear() - this.ano;
    return this.pesoToneladas > 10 ? idade - 2 : idade;
  }
}

const veiculos: Veiculo1[] = [
  new Carro1("Fiat", "Uno", 2015),
  new Moto1("Honda", "CG 160", 2020),
  new Caminhao1("Volvo", "FH 540", 2018, 14)
];

for (const v of veiculos) {
  v.exibirInfo();
  console.log(`Idade: ${v.calcularIdade()} anos`);
  console.log("-------------");
}
