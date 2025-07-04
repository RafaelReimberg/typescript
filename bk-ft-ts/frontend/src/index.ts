// frontend/src/index.ts

interface Usuario {
  id: number;
  nome: string;
  idade: number;
}

async function carregarUsuarios() {
  const response = await fetch("http://localhost:3000/usuarios");
  const usuarios: Usuario[] = await response.json();

  const lista = document.getElementById("lista-usuarios")!;
  lista.innerHTML = "";

  usuarios.forEach((usuario) => {
    const li = document.createElement("li");
    li.textContent = `${usuario.id} - Nome: ${usuario.nome} - Idade: ${usuario.idade}`;
    lista.appendChild(li);
  });
}

document.getElementById("btn-carregar")!.addEventListener("click", () => {
  carregarUsuarios();
});
