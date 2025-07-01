interface Animal1 {
  nome: string;
  falar(): void;
}

class Cachorro1 implements Animal1 {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} diz: Au Au!`);
  }
}

const meuCachorro1 = new Cachorro1("Grilo");
meuCachorro1.falar();
