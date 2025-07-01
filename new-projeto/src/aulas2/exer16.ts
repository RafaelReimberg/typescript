// File: exer16.ts
// importando as classes e funções necessárias
import { Dog, Cat, Papagaio } from "./classes";
import { ouvirAnimal, apresentarAnimal } from "./functions";

// Criando uma lista de animais
ouvirAnimal(new Dog("Grito"));
ouvirAnimal(new Cat("Mimi"));
ouvirAnimal(new Papagaio("Biscoito"));

// Apresentando os animais
apresentarAnimal(new Dog("Grito"));
apresentarAnimal(new Cat("Mimi"));
apresentarAnimal(new Papagaio("Biscoito"));
