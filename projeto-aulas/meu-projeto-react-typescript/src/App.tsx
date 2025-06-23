/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {

  const [usuarios, setUsuarios] = useState<string[]>(['Rafael', 'Natalia', 'Gabriel', 'Luíza']);

  // Exemplo de forEach
  useEffect(() => {
    console.log('Lista de usuários (logado com .forEach):');

    usuarios.forEach((usuario) => {
      console.log(`Usuário: ${usuario}`);
    });
  }, [usuarios]);

  // Exemplo de map - criando uma saudação
  const usuariosComSaudacao = usuarios.map((usuario) => `Olá, ${usuario}!`);

  // Exemplo de filter - pegando usuários com a letra G
  const usuariosComG = usuarios.filter((usuario) => usuario.startsWith('G'));

  // Exemplo de filter - pegando usuários com a letra R
  const usuariosComR = usuarios.filter((usuario) => usuario.startsWith('R'));


  const precos: number[] = [100, 200, 300, 400];

  const precosSemDesconto = [...precos];

  // Aplicando desconto de 10% a cada preço
  const precosComDesconto = precos.map((preco) => preco * 0.9);

  return (
    <div className="App">
      <h1 className='apresentacao'>Exemplo React + TypeScript com Arrays</h1>

      {/* Exibindo usuários com saudação */}
      <h2>Lista completa de usuários (.map())</h2>
      <ul>
        {usuariosComSaudacao.map((usuario, index) => (
          <li className="key" key={index}>{usuario}</li>
        ))}
      </ul>

      {/* Exibindo usuários com a letra G */}
      <h2>Usuários com nome começando com "G" (.filter())</h2>
      <ul>
        {usuariosComG.map((usuario, index) => (
          <li className="key" key={index}>{usuario}</li>
        ))}
      </ul>

      {/* Exibindo usuários com nome começando com "R" */}

      <h2>Usuários com nome começando com "R" (.filter())</h2>
      <ul>
        {usuariosComR.map((usuario, index) => (
          <li className="key" key={index}>{usuario}</li>
        ))}
      </ul>

      {/* Exibindo preços originais e com desconto */}

      <h2>Preços originais</h2>
      <ul>
        {precosSemDesconto.map((preco, index) => (
          <li className="key" key={index}>R$ {preco.toFixed(2)}</li>
        ))}
      </ul>
      <h2>Preços com desconto de 10% (.map())</h2>
      <ul>
        {precosComDesconto.map((preco, index) => (
          <li className="key" key={index}>R$ {preco.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
