document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    const mensajeError = document.getElementById('mensajeError');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Previene el envío del formulario para poder validarlo con Javascript

        let email = document.getElementById('email').value;
        let pass = document.getElementById('password').value;

        if (email.trim() === '') {
            mensajeError.innerText = 'El campo email no puede estar vacío.';
            return;
        }

        if (!validarEmail(email)) {
            mensajeError.innerText = 'El formato del email no es válido.';
            return;
        }

        if (pass === '') {
            mensajeError.innerText = 'La contraseña no puede estar en blanco.';
            return;
        }

        let val = checkPasswordStrength(pass);
        mensajeError.innerText = val;
        
        // Si todo está correcto, se puede proceder a enviar el formulario o hacer alguna otra acción
        if (val === '') {
            mensajeError.innerText = '';
            formulario.submit(); // Envía el formulario si todas las validaciones son exitosas
        }
    });

    function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function checkPasswordStrength(password) {
        // Initialize variables
        var strength = 0;
        var tips = "";
      
        // Check password length
        if (password.length < 8) {
          tips += "Deberías alargar la contraseña(min 8). ";
        } else {
          strength += 1;
        }
      
        // Check for mixed case
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
          strength += 1;
        } else {
          tips += "Utilice letras minúsculas y mayúsculas. ";
        }
      
        // Check for numbers
        if (password.match(/\d/)) {
          strength += 1;
        } else {
          tips += "Incluya al menos un número. ";
        }
      
        // Check for special characters
        if (password.match(/[^a-zA-Z\d]/)) {
          strength += 1;
        } else {
          tips += "Incluya al menos un caracter especial. ";
        }
      
        return tips; // Devuelve el mensaje de error o cadena vacía si no hay errores
    }
});
