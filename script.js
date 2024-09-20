const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');
const eyeIcon = document.querySelector('.eye-icon');
const closeButton = document.querySelector('.icon-close');
const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');

// Alterna a visibilidade da senha
togglePassword.addEventListener('click', function() {
    const isPasswordHidden = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPasswordHidden ? 'text' : 'password');

    if (isPasswordHidden) {
        eyeIcon.classList.remove('eye-closed');
        eyeIcon.classList.add('eye-open');
    } else {
        eyeIcon.classList.add('eye-closed');
        eyeIcon.classList.remove('eye-open');
    }
});

// Fecha o pop-up ao clicar no botão de fechar
closeButton.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

// Abre o pop-up ao clicar no botão de login
btnPopup.addEventListener('click', () => {
    wrapper.style.display = 'flex'; // Define o pop-up para ser visível novamente
});

// Opcional: se quiser uma animação de abrir e fechar, pode usar classes CSS como .active-popup