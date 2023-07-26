function validaformulario(evento){
    var nome = document.getElementById("nome").Value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;
    var inputs = [nome, email, assunto, mensagem]
    if (inputs.length == ""){
        evento.preventDefault()
        alert("Por favor, preencha todos os campos.");

    } else {
        alert('Formulario encaminhado!')
    }

}

const botao = document.getElementById('btn_enviar');

botao.addEventListener('click', validaformulario);