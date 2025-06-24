var Person = /** @class */ (function () {
    function Person(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Person.prototype.exibirPerson = function () {
        console.log("Nome: ".concat(this.nome, ", Idade: ").concat(this.idade));
    };
    return Person;
}());
var pessoa = new Person("Rafael", 38);
pessoa.exibirPerson();
