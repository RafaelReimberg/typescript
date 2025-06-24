class Funcionario {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  trabalhando(){
    console.log(`${this.nome} está trabalhando.`);
  }

}

class Gerente extends Funcionario {
  ordem(){
    console.log(`${this.nome} e está dando ordens.`);
  }
}

const gerente = new Gerente("Gabriel");
gerente.trabalhando();
gerente.ordem();
