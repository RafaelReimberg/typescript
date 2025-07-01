"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ouvirAnimal = ouvirAnimal;
exports.apresentarAnimal = apresentarAnimal;
var classes_1 = require("./classes");
var animais = [
    new classes_1.Dog("Grito"),
    new classes_1.Cat("Mimi"),
    new classes_1.Papagaio("Biscoito")
];
for (var _i = 0, animais_1 = animais; _i < animais_1.length; _i++) {
    var animal = animais_1[_i];
    animal.speak();
}
function ouvirAnimal(animal) {
    animal.speak();
}
function isVoar(obj) {
    return typeof obj.voar === "function";
}
function apresentarAnimal(animal) {
    if (animal instanceof classes_1.Dog) {
        console.log("Este \u00E9 um cachorro chamado ".concat(animal.name, "."));
    }
    else if (animal instanceof classes_1.Cat) {
        console.log("Este \u00E9 um gato chamado ".concat(animal.name, "."));
    }
    else if (animal instanceof classes_1.Papagaio) {
        console.log("Este \u00E9 um papagaio chamado ".concat(animal.name, "."));
        if (isVoar(animal)) {
            animal.voar();
        }
    }
}
