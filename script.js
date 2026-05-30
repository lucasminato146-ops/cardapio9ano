function mostrarDescricao() {
    const descricao = document.getElementById("descricao");

    if(descricao.style.display === "block"){
        descricao.style.display = "none";
    }else{
        descricao.style.display = "block";
    }
}
