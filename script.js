document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulação de validação do usuário e senha (substitua por lógica real)
        if (username === 'Daniel' && password === '1234') {
            // Redireciona para a página de gerenciamento de reservas (ou outra página)
            window.location.href = 'gerenciarReserva.html';
        } else {
            loginError.textContent = 'Usuário ou senha incorretos. Por favor, tente novamente.';
        }
    });
});
