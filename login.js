
// const express = require('express');
// const bodyParser = require('body-parser');
// const connectDB = require('./db');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const pool = await connectDB();
//     const result = await pool.request()
//         .input('username', sql.VarChar, username)
//         .input('password', sql.VarChar, password)
//         .query('SELECT * FROM users WHERE username = @username AND password = @password');

//     if (result.recordset.length > 0) {
//         res.send('Login Sukses');
//     } else {
//         res.send('Username atau Password salah');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server berjalan di http://localhost:${port}`);
// })

// Fungsi untuk mengganti gambar latar belakang
function changeBackground() {
    const body = document.body;
    body.style.backgroundImage = "url('images/bg-2.jpg')"; // Ganti dengan path gambar yang diinginkan
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center center";
    body.style.backgroundAttachment = "fixed";
}

// document.getElementById('login-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Ambil data dari form login
//     let username = document.getElementById('login-username').value;
//     let password = document.getElementById('login-password').value;

//     // Ambil data pengguna dari localStorage
//     let users = JSON.parse(localStorage.getItem('users'));

//     // Cek apakah ada pengguna dengan username dan password yang sesuai
//     let userFound = users && users.find(user => user.username === username && user.password === password);

//     if (userFound) {
//         alert('Login berhasil!');
//         window.location.href = 'home.html'; // Alihkan ke halaman home setelah login berhasil
//     } else {
//         alert('Username atau Password salah!');
//     }
// });

document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data dari form login
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Cek apakah ada data pengguna di localStorage
    if (localStorage.getItem('users')) {
        let users = JSON.parse(localStorage.getItem('users'));
        
        // Cari pengguna yang sesuai dengan username dan password
        let user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            alert('Login berhasil!');
            window.location.href = 'home.html'; // Alihkan ke halaman dashboard setelah login berhasil
        } else {
            alert('Username atau password salah!');
        }
    } else {
        alert('Belum ada pengguna yang terdaftar.');
    }
});




