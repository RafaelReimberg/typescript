var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " diz: Au Au!"));
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.speak = function () {
        console.log("".concat(this.name, " diz: Miau!"));
    };
    return Cat;
}());
var Papagaio = /** @class */ (function () {
    function Papagaio(name) {
        this.name = name;
    }
    Papagaio.prototype.speak = function () {
        console.log("".concat(this.name, " diz: Ol\u00E1!"));
    };
    Papagaio.prototype.voar = function () {
        console.log("".concat(this.name, " est\u00E1 voando!"));
    };
    return Papagaio;
}());
var animais = [
    new Dog("Grito"),
    new Cat("Mimi"),
    new Papagaio("Biscoito")
];
for (var _i = 0, animais_1 = animais; _i < animais_1.length; _i++) {
    var animal = animais_1[_i];
    animal.speak();
}
function ouvirAnimal(animal) {
    animal.speak();
}
ouvirAnimal(new Dog("Grito"));
ouvirAnimal(new Cat("Mimi"));
ouvirAnimal(new Papagaio("Biscoito"));
function isVoar(obj) {
    return typeof obj.voar === "function";
}
function apresentarAnimal(animal) {
    if (animal instanceof Dog) {
        console.log("Este \u00E9 um cachorro chamado ".concat(animal.name, "."));
    }
    else if (animal instanceof Cat) {
        console.log("Este \u00E9 um gato chamado ".concat(animal.name, "."));
    }
    else if (animal instanceof Papagaio) {
        console.log("Este \u00E9 um papagaio chamado ".concat(animal.name, "."));
        if (isVoar(animal)) {
            animal.voar();
        }
    }
}
apresentarAnimal(new Dog("Grito"));
apresentarAnimal(new Cat("Mimi"));
apresentarAnimal(new Papagaio("Biscoito"));
