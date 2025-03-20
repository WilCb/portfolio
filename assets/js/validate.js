const validacaoPreenchimento = e => {
    e.preventDefault();

    const nome = document.getElementById("nome").Value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome == "" || email == "" || assunto == "" || mensagem == ""){
        alert("Obrigatiorio Preencher todos os campos.");
    }
}

document.querySelector("form").addEventListener("submit", validacaoPreenchimento);