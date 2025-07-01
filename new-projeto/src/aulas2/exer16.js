"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var functions_1 = require("./functions");
// Criando uma lista de animais
(0, functions_1.ouvirAnimal)(new classes_1.Dog("Grito"));
(0, functions_1.ouvirAnimal)(new classes_1.Cat("Mimi"));
(0, functions_1.ouvirAnimal)(new classes_1.Papagaio("Biscoito"));
// Apresentando os animais
(0, functions_1.apresentarAnimal)(new classes_1.Dog("Grito"));
(0, functions_1.apresentarAnimal)(new classes_1.Cat("Mimi"));
(0, functions_1.apresentarAnimal)(new classes_1.Papagaio("Biscoito"));
