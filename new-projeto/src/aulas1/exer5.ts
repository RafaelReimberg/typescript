class Person {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  exibirPerson() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
  }
}

const pessoa = new Person("Rafael", 38);
pessoa.exibirPerson();


