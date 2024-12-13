function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
  }
  
document.getElementById('loginBtn').addEventListener('click', function (e) {
    const npmInput = document.querySelector('input[placeholder="Masukkan NPM"]');
    const passwordInput = document.getElementById('password');
    
    if (!npmInput.value || !passwordInput.value) {
        e.preventDefault(); // Hentikan pengiriman form jika input kosong
        alert('Mohon isi semua field!');
        return;
    }

    this.classList.add('loading');
    this.querySelector('.spinner').style.display = 'inline-block';
});
