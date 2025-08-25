const form = document.getElementById("meuForm") as HTMLFormElement;
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = (document.getElementById("nome") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;

  try {
    const resposta = await fetch("http://localhost:3000/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email }),
    });

    const dados = await resposta.json();
      alert(dados.message);
      // if (dados && dados.message) {
      // dados.addEventListener("click", () => {
      //   alert(dados.message && resposta.ok ? "Formulário enviado com sucesso!" : "Erro ao enviar formulário.");
      // }); 
      // }

    form.reset();
  } catch (error) {
    console.error("Erro ao enviar:", error);
    alert("Erro ao enviar formulário.");
  }
});
