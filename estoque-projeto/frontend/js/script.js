const API_URL = "http://localhost:3000/api/produtos";

async function carregarProdutos() {
  const res = await fetch(API_URL);
  const produtos = await res.json();

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  produtos.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `

      <div>
        <strong>${p.nome}</strong> (Lote: ${p.lote}) <br>
        Validade: ${p.dataValidade} <br>
        Quantidade: ${p.quantidade} | Min: ${p.quantidadeMinima} | Ideal: ${p.quantidadeIdeal}
      </div>

      <div>
        <button onclick="atualizarProduto(${p.id}, ${p.quantidade + 1})" class="add"> +1 </button>
        <button onclick="atualizarProduto(${p.id}, ${p.quantidade - 1})" class="remove"> -1 </button>
        <button onclick="removerProduto(${p.id})" class="delete"> Excluir </button>
      </div>
    `;
    lista.appendChild(li);
  });
}


async function adicionarProduto() {
  const nome = document.getElementById("nome").value;
  const lote = document.getElementById("lote").value;
  const dataValidade = document.getElementById("dataValidade").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const quantidadeMinima = parseInt(document.getElementById("quantidadeMinima").value);
  const quantidadeIdeal = parseInt(document.getElementById("quantidadeIdeal").value);

  if (!nome || !lote || !dataValidade || isNaN(quantidade) || isNaN(quantidadeMinima) || isNaN(quantidadeIdeal)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, lote, dataValidade, quantidade, quantidadeMinima, quantidadeIdeal })
  });

  limparCampos();
  carregarProdutos();
}

async function atualizarProduto(id, quantidade) {
  if (quantidade < 0) quantidade = 0;

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({ quantidade }),
  });

  carregarProdutos();
}

async function removerProduto(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  carregarProdutos();
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("lote").value = "";
  document.getElementById("dataValidade").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("quantidadeMinima").value = "";
  document.getElementById("quantidadeIdeal").value = "";
}

carregarProdutos();
