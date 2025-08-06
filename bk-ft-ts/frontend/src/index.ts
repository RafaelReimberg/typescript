// frontend/src/index.ts

interface Usuario {
  id: number;
  nome: string;
  idade: number;
}

// Variável para controlar a visibilidade da lista de usuários
// Inicialmente, a lista não está visível
let usuarioVisivel = false;

// Função para carregar usuários do backend
// Esta função faz uma requisição para o backend para obter a lista de usuários
async function carregarUsuarios() {
  const lista = document.getElementById("lista-usuarios")!;

  // Se a lista já está visível, esvaziamos o conteúdo e definimos usuarioVisivel como false
  // Isso permite que o usuário possa alternar a visibilidade da lista
  if (usuarioVisivel) {
    lista.innerHTML = "";
    usuarioVisivel = false;
    return;
  }

  // Faz uma requisição GET para o endpoint /usuarios do backend
  // O fetch retorna uma Promise que resolve com a resposta da requisição
  const response = await fetch("http://localhost:3000/usuarios");
  const usuarios: Usuario[] = await response.json();

    lista.innerHTML = "";

  usuarios.forEach((usuario) => {
    const li = document.createElement("li");
    li.innerHTML = `ID: <strong>${usuario.id}</strong> - Nome: <strong>${usuario.nome}</strong> - Idade: <strong>${usuario.idade}</strong>`;
    lista.appendChild(li);
  });

  usuarioVisivel = true;
}

// Adiciona um evento de clique ao botão "Carregar Usuários"
// Quando o botão é clicado, a função carregarUsuarios é chamada
document.getElementById("btn-carregar")!.addEventListener("click", () => {
  carregarUsuarios();
});

interface Carro {
  id: number;
  modelo: string;
  ano: number;
}

let carroVisivel = false;

async function carregarCarros() {
  const lista = document.getElementById("lista-carros")!;

  if (carroVisivel){
    lista.innerHTML = "";
    carroVisivel = false;
    return;
  }

  const response = await fetch("http://localhost:3000/carros");
  const carros: Carro[] = await response.json();

  lista.innerHTML = "";

  carros.forEach((carro) => {
    const li = document.createElement("li");
    li.textContent = `${carro.id} - Modelo: ${carro.modelo} - Ano: ${carro.ano}`;
    lista.appendChild(li);
  });

  carroVisivel = true;
}

document.getElementById("btn-carregar-carros")!.addEventListener("click", () => {
  carregarCarros();
 });

// document.addEventListener("DOMContentLoaded", () => {
//   carregarUsuarios();
//   carregarCarros();
// });
