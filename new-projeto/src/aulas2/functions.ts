// File: functions.ts
// importando as classes e funções necessárias
import { Animal, Voar } from './interface';
import { Dog, Cat, Papagaio } from './classes';

// Função para ouvir o som do animal
const animais: Animal[] = [
  new Dog("Grito"),
  new Cat("Mimi"),
  new Papagaio("Biscoito")
];

// Iterando sobre a lista de animais e chamando o método speak
for (const animal of animais) {
  animal.speak();
}

// Função para ouvir o som do animal
function ouvirAnimal(animal: Animal){
  animal.speak();
}

// Verifica se o objeto implementa a interface Voar
function isVoar(obj: any): obj is Voar {
  return typeof obj.voar === "function";
}

// Função para apresentar o animal
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

// Exportando as funções para uso em outros arquivos
export { ouvirAnimal, apresentarAnimal };
