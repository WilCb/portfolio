function validaformulario(evento){
    var nome = document.getElementById("nome").Value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome == "" || email == "" || assunto == "" || mensagem == ""){
        evento.preventDefault()
        alert("Por favor, preencha todos os campos.");

    } else {
        alert('Marque a caixa a seguir para finalizar envio!')
    }

}

const botao = document.getElementById('btn_enviar');

botao.addEventListener('click', validaformulario);