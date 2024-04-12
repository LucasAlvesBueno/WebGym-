document.addEventListener('DOMContentLoaded', function () {
    var cadastroForm = document.getElementById('cadastro-form');
    var formularioCadastro = document.getElementById('formulario-cadastro');
    var infoUsuario = document.getElementById('info-usuario');
    var infoNome = document.getElementById('info-nome');
    var infoEmail = document.getElementById('info-email');
    var infoSorvete = document.getElementById('info-sorvete');
    var btnConfirmar = document.getElementById('btnConfirmar');

    var botoes = document.querySelectorAll('.botoes > div');

    botoes.forEach(function (botao) {
        botao.addEventListener('click', function () {
            cadastroForm.style.display = 'block';
            infoUsuario.style.display = 'none';
        });
    });

    formularioCadastro.addEventListener('submit', function (event) {
        event.preventDefault();

        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var sorvete = document.getElementById('sorvete').value;

        infoNome.textContent = 'Nome: ' + nome;
        infoEmail.textContent = 'E-mail: ' + email;
        infoSorvete.textContent = 'Sabor de sorvete favorito: ' + sorvete;

        cadastroForm.style.display = 'none';
        infoUsuario.style.display = 'block';
    });

    btnConfirmar.addEventListener('click', function () {
        alert('Informações confirmadas!');
        infoUsuario.style.display = 'none';
    });
});








