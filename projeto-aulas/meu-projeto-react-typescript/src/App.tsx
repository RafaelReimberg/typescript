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
  const usuariosComC = usuarios.filter((usuario) => usuario.startsWith('G'));

  return (
    <div className="App">
      <h1>Exemplo React + TypeScript com Arrays</h1>

      <h2>Lista completa de usuários (.map())</h2>
      <ul>
        {usuariosComSaudacao.map((usuario, index) => (
          <li key={index}>{usuario}</li>
        ))}
      </ul>

      <h2>Usuários com nome começando com "G" (.filter())</h2>
      <ul>
        {usuariosComC.map((usuario, index) => (
          <li key={index}>{usuario}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
