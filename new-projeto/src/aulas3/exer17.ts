// Exemplo de código TypeScript com interfaces e classes
interface Animal {
  nome: string;
  falar(): void;
}

interface Voar {
  voar(): void;
}

class Cachorro implements Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  falar(): void {
    console.log(`${this.nome} faz au au`);
  }
}

class Gato implements Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  falar(): void {
    console.log(`${this.nome} faz miau`);
  }
}

class Papagaio implements Animal, Voar {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  falar(): void {
    console.log(`${this.nome} fala papagaio`);
  }

  voar(): void {
    console.log(`${this.nome} está voando`);
  }
}

class Morcego implements Animal, Voar {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} faz screech`);
  }

  voar() {
    console.log(`voando silenciosamente pela noite`);
  }

}

const animais: Animal[] = [
  new Cachorro("Grito"),
  new Gato("Mimi"),
  new Papagaio("Biscoito"),
  new Morcego("Noturno")
];

for (const animal of animais) {
  animal.falar();
}

function avesVoam(obj: any): obj is Voar {
  return typeof obj.voar === 'function';
}

function apresentarAnimal(animal: Animal) {
  if (animal instanceof Cachorro) {
    console.log(`Este é um cachorro chamado ${animal.nome}.`);
  } else if (animal instanceof Gato) {
    console.log(`Este é um gato chamado ${animal.nome}.`);
  } else if (animal instanceof Papagaio) {
    console.log(`Este é um papagaio chamado ${animal.nome}.`);
    if (avesVoam(animal)) {
      animal.voar();
    }
  } else if (animal instanceof Morcego) {
    console.log(`Este é um morcego chamado ${animal.nome}.`);
    if (avesVoam(animal)) {
      animal.voar();
    }
  }
}

apresentarAnimal(new Cachorro("Grito"));
apresentarAnimal(new Gato("Mimi"));
apresentarAnimal(new Papagaio("Biscoito"));
apresentarAnimal(new Morcego("Noturno"));
