class Funcionario {
  nome: string;
  idade: number;
  salario: number;
  registro: string;
  adimissao: number;

  constructor(nome: string, idade: number, salario: number, registro: string, adimissao: number) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
    this.registro = registro;
    this.adimissao = adimissao;
  }

  trabalhando() {
    console.log(`${this.nome} está trabalhando na área de contabilidade. Com idade de ${this.idade} anos.`);
  }

  receberSalario() {
    console.log(`Recebeu o salário de R$${this.salario}.`);
  }

  registrar() {
    console.log(`Foi registrado com o número ${this.registro} e adimitido(a) no ano ${this.adimissao}.`);
  }
}

class Gerente extends Funcionario {
  ordem() {
    console.log(`${this.nome} está coordenando a equipe com o novo projeto.`);
  }
}

const gerente = new Gerente('Natalia', 33, 12000, 'RA12345', 2016);

gerente.trabalhando();
gerente.ordem();
gerente.receberSalario();
gerente.registrar();


const funcionario = document.getElementById('funcionarios');
  if (funcionario) {
    funcionario.innerHTML = `
    <h2>Funcionários</h2>
    <table>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Salário</th>
        <th>Registro</th>
        <th>Admissão</th>
      </tr>
      <tr>
        <td>${gerente.nome}</td>
        <td>${gerente.idade}</td>
        <td>R$${gerente.salario}</td>
        <td>${gerente.registro}</td>
        <td>${gerente.adimissao}</td>
      </tr>
    </table>
  `;
}
