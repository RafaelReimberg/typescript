interface Animal{
  nome: string;
  falar(): void;
}

class Cachorro implements Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} diz: Au Au!`);
  }
}

const meuCachorro = new Cachorro("Grilo");
meuCachorro.falar();
