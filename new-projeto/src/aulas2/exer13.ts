class Veiculo {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  calcularAno(){
    return new Date().getFullYear() - this.ano;
  }
}

class Carro1 extends Veiculo {
  cor: string;

  constructor(marca: string, modelo: string, ano: number, cor: string) {
    super(marca, modelo, ano);
    this.cor = cor;
  }

  exibirInfo(){
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Idade: ${this.calcularAno()} anos, Cor: ${this.cor}`);
  }
}

const meuCarro1 = new Carro1("Honda", "HR-v", 2016, "Marrom");
meuCarro1.exibirInfo();
