//função para validação do formulario

function validaformulario(evento){

    // pega os campos de input do html e valor inserido nele
    var nome = document.getElementById("nome").Value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    //junta todos em uma única variavel
    var inputs = [nome, email, assunto, mensagem]

    //se algum campo estiver vazio, pede para preencher
    if (inputs.length == ""){
        evento.preventDefault()
        alert("Por favor, preencha todos os campos.");

    } else {
        alert('Formulario encaminhado!')
    }

}
//busca o botão no enviar
const botao = document.getElementById('btn_enviar');


//ao evento de clicl no botão envia o formulario
botao.addEventListener('click', validaformulario);