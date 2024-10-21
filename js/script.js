// inicio login
const pass = '123456';
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formPassword = document.querySelector('#password').value;

    if (pass === formPassword) {
        window.location.href = 'administrator.html';
    } else {
        alert('Você precisa de uma permissão para acessar a página')
        document.querySelector('#password').focus();
    }
})
// fim login

// início formulário
document.getElementById('btnAbrirModal').addEventListener('click', function () {
    var form = document.getElementById('formulario');

    // Verifica se o formulário é válido
    if (form.checkValidity()) {
        var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    } else {
        form.reportValidity();
    }
});

// Reset do formulário
var exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('hidden.bs.modal', function () {
    document.getElementById('formulario').reset();
});
// fim formulário