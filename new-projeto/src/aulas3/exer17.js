var Cachorro = /** @class */ (function () {
    function Cachorro(nome) {
        this.nome = nome;
    }
    Cachorro.prototype.falar = function () {
        console.log("".concat(this.nome, " faz au au"));
    };
    return Cachorro;
}());
var Gato = /** @class */ (function () {
    function Gato(nome) {
        this.nome = nome;
    }
    Gato.prototype.falar = function () {
        console.log("".concat(this.nome, " faz miau"));
    };
    return Gato;
}());
var Papagaio = /** @class */ (function () {
    function Papagaio(nome) {
        this.nome = nome;
    }
    Papagaio.prototype.falar = function () {
        console.log("".concat(this.nome, " fala papagaio"));
    };
    Papagaio.prototype.voar = function () {
        console.log("".concat(this.nome, " est\u00E1 voando"));
    };
    return Papagaio;
}());
var animais = [
    new Cachorro("Grito"),
    new Gato("Mimi"),
    new Papagaio("Biscoito")
];
for (var _i = 0, animais_1 = animais; _i < animais_1.length; _i++) {
    var animal = animais_1[_i];
    animal.falar();
}
function avesVoam(obj) {
    return typeof obj.voar === 'function';
}
function apresentarAnimal(animal) {
    if (animal instanceof Cachorro) {
        console.log("Este \u00E9 um cachorro chamado ".concat(animal.nome, "."));
    }
    else if (animal instanceof Gato) {
        console.log("Este \u00E9 um gato chamado ".concat(animal.nome, "."));
    }
    else if (animal instanceof Papagaio) {
        console.log("Este \u00E9 um papagaio chamado ".concat(animal.nome, "."));
        if (avesVoam(animal)) {
            animal.voar();
        }
    }
}
apresentarAnimal(new Cachorro("Grito"));
apresentarAnimal(new Gato("Mimi"));
apresentarAnimal(new Papagaio("Biscoito"));
