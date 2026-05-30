function mostrarDescricao() {

    const descricao = document.getElementById("descricao");
    const botao = document.getElementById("infoBtn");

    descricao.style.display = "block";

    botao.style.opacity = "0";

    setTimeout(() => {
        botao.style.display = "none";
    }, 300);

}
