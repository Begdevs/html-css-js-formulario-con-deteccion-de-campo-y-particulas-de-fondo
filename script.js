const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
        toggleBodyScroll();
    }
});

function toggleBodyScroll() {
    document.body.classList.toggle('active');
}

function ocultarRegistro() {
    // Oculta el formulario de registro, el botón "Sign In" y el botón "Sign Up"
    $signUp.style.display = 'none';
    $btnSignIn.style.display = 'none';
    $btnSignUp.style.display = 'none';
}

function validarFormulario(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[required]');

    for (const input of inputs) {
        if (!input.value.trim()) {
            alert('Todos los campos son obligatorios.');
            return false;
        }
    }

    // Redirige a la página principal si es el formulario de inicio de sesión
    if (formId === 'login-form') {
        window.location.href = '../principal.html';

        
    } else if (formId === 'signup-form') {
        // Ejecuta la animación y cambia entre formularios después de completar el registro
        toggleBodyScroll();
        $signIn.classList.add('active');
        $signUp.classList.remove('active');
        // Oculta el formulario de registro, el botón "Sign In" y el botón "Sign Up"
        ocultarRegistro();
    }

    return true;
}
