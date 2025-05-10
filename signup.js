document.getElementById('register').addEventListener('submit-btn', function(e) {
    e.preventDefault();

    // Fungsi untuk mengganti gambar latar belakang
function changeBackground() {
    const body = document.body;
    body.style.backgroundImage = "url('images/bg_1.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center center";
    body.style.backgroundAttachment = "fixed";
}

alert('Akun berhasil didaftarkan!');
window.location.href = 'login.html'; // Alihkan ke halaman login setelah berhasil mendaftar
// Menambahkan event listener untuk mengganti gambar saat tombol di klik (opsional)
document.getElementById('change-bg-btn').addEventListener('click', changeBackground);

    // Ambil data dari form
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Simpan data akun ke localStorage
    if (username && email && password) {
        let userData = {
            username: username,
            email: email,
            password: password
        };

        // Cek apakah akun sudah terdaftar
        if (localStorage.getItem('users')) {
            let users = JSON.parse(localStorage.getItem('users'));
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            let users = [userData];
            localStorage.setItem('users', JSON.stringify(users));
        }

       
    } else {
        alert('Harap isi semua field!');
    }
});






