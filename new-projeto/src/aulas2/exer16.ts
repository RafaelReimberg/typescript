interface Animal {
  name: string;
  speak(): void;
}

interface Voar {
  voar(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} diz: Au Au!`);
  }
}

class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} diz: Miau!`);
  }
}

class Papagaio implements Animal, Voar {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} diz: Olá!`);
  }

  voar() {
    console.log(`${this.name} está voando!`);
  }
}


const animais: Animal[] = [
  new Dog("Grito"),
  new Cat("Mimi"),
  new Papagaio("Biscoito")
];

for (const animal of animais) {
  animal.speak();
}

function ouvirAnimal(animal: Animal){
  animal.speak();
}

ouvirAnimal(new Dog("Grito"));
ouvirAnimal(new Cat("Mimi"));
ouvirAnimal(new Papagaio("Biscoito"));

function isVoar(obj: any): obj is Voar {
  return typeof obj.voar === "function";
}

function apresentarAnimal(animal: Animal){
  if (animal instanceof Dog) {
    console.log(`Este é um cachorro chamado ${animal.name}.`);
  } else if (animal instanceof Cat) {
    console.log(`Este é um gato chamado ${animal.name}.`);
  }
  else if (animal instanceof Papagaio) {
    console.log(`Este é um papagaio chamado ${animal.name}.`);
    if (isVoar(animal)) {
      animal.voar();
    }
  }
}

apresentarAnimal(new Dog("Grito"));
apresentarAnimal(new Cat("Mimi"));
apresentarAnimal(new Papagaio("Biscoito"));
