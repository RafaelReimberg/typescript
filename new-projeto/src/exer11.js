var Endereco = /** @class */ (function () {
    function Endereco(lougradouro) {
        this.lougradouro = lougradouro;
    }
    return Endereco;
}());
var Cliente = /** @class */ (function () {
    function Cliente(endereco) {
        this.endereco = endereco;
    }
    Cliente.prototype.exibirEndereco = function () {
        console.log("Endere\u00E7o: ".concat(this.endereco.lougradouro));
    };
    return Cliente;
}());
var novoEndereco = new Endereco("Rua Emmaneul Chabrier, n 166b, Bairro Parque Brasil, São Paulo, SP, 04843-120");
var enderecoCliente = new Cliente(novoEndereco);
enderecoCliente.exibirEndereco();
