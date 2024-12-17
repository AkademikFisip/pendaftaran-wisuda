function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "🙈"; // Ikon mata tertutup
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁️"; // Ikon mata terbuka
    }
}

document.getElementById('loginBtn').addEventListener('click', function (e) {
    const npmInput = document.getElementById('npm');
    const passwordInput = document.getElementById('password');
    
    if (!npmInput.value.trim() || !passwordInput.value.trim()) {
        e.preventDefault();
        alert('Mohon isi NPM dan Password!');
    }
});
