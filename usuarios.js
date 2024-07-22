document.addEventListener('DOMContentLoaded', () => {
    // Variables para almacenar datos de usuarios
    let usuarios = JSON.parse(sessionStorage.getItem('usuarios')) || [];

    // Manejo del formulario de registro
    const formularioRegistro = document.getElementById('formularioRegistro');
    if (formularioRegistro) {
        formularioRegistro.addEventListener('submit', (e) => {
            e.preventDefault();

            const correo = document.getElementById('correoRegistro').value;
            const contrasena = document.getElementById('contrasenaRegistro').value;
            const confirmarContrasena = document.getElementById('confirmarContrasena').value;

            // Validación de correo
            const correoValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(cl|com|net|org|edu|gov)$/;
            if (!correoValido.test(correo)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }

            // Verificar si las contraseñas coinciden
            if (contrasena !== confirmarContrasena) {
                alert('Las contraseñas no coinciden.');
                return;
            }

            // Verificar si el usuario ya existe
            const usuarioExistente = usuarios.find(usuario => usuario.correo === correo);
            if (usuarioExistente) {
                alert('El usuario ya existe.');
                return;
            }

            // Agregar nuevo usuario
            usuarios.push({ correo, contrasena });
            sessionStorage.setItem('usuarios', JSON.stringify(usuarios));
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            window.location.href = 'login.html';
        });
    }

    // Manejo del formulario de inicio de sesión
    const formularioInicioSesion = document.getElementById('formularioInicioSesion');
    if (formularioInicioSesion) {
        formularioInicioSesion.addEventListener('submit', (e) => {
            e.preventDefault();

            const correo = document.getElementById('correoInicio').value;
            const contrasena = document.getElementById('contrasenaInicio').value;

            // Verificar si el usuario y la contraseña son correctos
            const usuario = usuarios.find(usuario => usuario.correo === correo && usuario.contrasena === contrasena);
            if (!usuario) {
                alert('Correo electrónico o contraseña incorrectos.');
                return;
            }

            alert('Inicio de sesión exitoso.');
            window.location.href = 'proyecto.html'; // Redirigir a la página principal
        });
    }
});

