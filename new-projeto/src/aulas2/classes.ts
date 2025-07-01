import { Animal, Voar } from './interface';

// Classes que implementam a interface Animal
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


export { Dog, Cat, Papagaio };