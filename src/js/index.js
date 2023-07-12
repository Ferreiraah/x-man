const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removerSelecaoDoPersonagem(personagem);

    personagem.classList.add("selecionado");

    alterarImagemPersonagemSelecionado(personagem);

    alterarNomePersonaogem(personagem);

    alterarDescricaoPersonagem(personagem);
  });
});
function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById(
        "descricao__personagem"
    );
    descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonaogem(personagem) {
    const nomePersonagem = document.getElementById("nome__personagem");
    nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(
        ".personagem__grande"
    );
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `/src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

