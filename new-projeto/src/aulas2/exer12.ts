class Carro {
  marca: string;
  modelo: string;
  ano: number;
  cor: string;

  constructor(marca: string, modelo: string, ano: number, cor: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  }

  exibirInfo(){
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo} Ano: ${this.ano}, Idade: ${this.calcularAno()} anos da, Cor: ${this.cor}`);
  }

  calcularAno(){
    const anoAtual = new Date().getFullYear();
    return anoAtual - this.ano;
  }

}

const meuCarro = new Carro("Honda", "HR-v", 2016, "Marrom");
meuCarro.exibirInfo();
console.log(`Idade do carro: ${meuCarro.calcularAno()} anos`);
