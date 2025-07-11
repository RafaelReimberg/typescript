abstract class Veiculo {
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


class Carro extends Veiculo {
  calcularIdade(): number {
    return new Date().getFullYear() - this.ano;
  }
}

class Moto extends Veiculo {
  calcularIdade(): number {
    let idade = new Date().getFullYear() - this.ano;
    return this.marca === "Honda" ? idade - 1 : idade;
  }
}


const carro = new Carro("Toyota", "Corolla", 2015);
carro.exibirInfo();
console.log(`Idade do carro: ${carro.calcularIdade()} anos`);

const moto = new Moto("Honda", "CB500", 2018);
moto.exibirInfo();
console.log(`Idade da moto: ${moto.calcularIdade()} anos`);


class Caminhao extends Veiculo {
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

const caminhao = new Caminhao("Volvo", "FH 540", 2015, 12);
caminhao.exibirInfo();
console.log(`Idade do caminhão: ${caminhao.calcularIdade()} anos`);
