document.addEventListener('DOMContentLoaded', () => {
    // Variables to hold user data
    let users = JSON.parse(sessionStorage.getItem('users')) || [];

    // Registration form handler
    const registroForm = document.getElementById('registroForm');
    if (registroForm) {
        registroForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }

            const userExists = users.some(user => user.email === email);
           
