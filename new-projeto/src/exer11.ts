class Endereco {
  lougradouro: string;


  constructor(lougradouro: string) {
    this.lougradouro = lougradouro;
  }
}

class Cliente {
  endereco: Endereco;

  constructor(endereco: Endereco) {

    this.endereco = endereco;
  }

  exibirEndereco() {
    console.log(`Endereço: ${this.endereco.lougradouro}`);
  }
}

const novoEndereco = new Endereco("Rua Emmaneul Chabrier, n 166b, Bairro Parque Brasil, São Paulo, SP, 04843-120");
const enderecoCliente = new Cliente(novoEndereco);
enderecoCliente.exibirEndereco();
