// script.js

// Manejador de envío del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validación básica
    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Simular el envío del formulario (aquí es donde enviarías los datos a un servidor real)
    alert('¡Gracias por tu mensaje, ' + name + '! Nos pondremos en contacto contigo pronto.');

    // Limpiar el formulario después de enviar
    document.getElementById('contactForm').reset();
});

// Función para manejar el scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
