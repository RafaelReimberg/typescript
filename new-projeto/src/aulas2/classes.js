"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Papagaio = exports.Cat = exports.Dog = void 0;
// Classes que implementam a interface Animal
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " diz: Au Au!"));
    };
    return Dog;
}());
exports.Dog = Dog;
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.speak = function () {
        console.log("".concat(this.name, " diz: Miau!"));
    };
    return Cat;
}());
exports.Cat = Cat;
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
exports.Papagaio = Papagaio;
