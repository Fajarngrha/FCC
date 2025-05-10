// Simulasi nama pengguna yang sudah login (ini bisa digantikan dengan data login dari server atau session storage)
const userName = "username"; // Misalnya, nama pengguna ini diambil setelah login

// Menampilkan nama pengguna di bagian profile
document.getElementById('user-name').textContent = userName;

document.getElementById('dataSparePartBtn').addEventListener('click', function () {
    document.getElementById('dataSparePartPage').classList.toggle('hidden');
});

// Pastikan untuk menambahkan event listener setelah DOM dimuat
document.addEventListener('DOMContentLoaded', function() {
    const dataSparePartBtn = document.getElementById('dataSparePartBtn');

    // Ketika tombol diklik, arahkan ke halaman baru
    dataSparePartBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah aksi default (misalnya jika ada link)
        window.location.href = 'datasparepart.html'; // Ganti dengan URL yang sesuai
    });
});

//workingorder

document.getElementById('workingorderBtn').addEventListener('click', function () {
    document.getElementById('WorkingorderPage').classList.toggle('hidden');
});

// Pastikan untuk menambahkan event listener setelah DOM dimuat
document.addEventListener('DOMContentLoaded', function() {
    const workingorderBtn = document.getElementById('workingorderBtn');

    // Ketika tombol diklik, arahkan ke halaman baru
    workingorderBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah aksi default (misalnya jika ada link)
        window.location.href = 'Workingorder.html'; // Ganti dengan URL yang sesuai
    });
});

//Troubleshoot

document.getElementById('TroubleshootBtn').addEventListener('click', function () {
    document.getElementById('TroubleshootPage').classList.toggle('hidden');
});

// Pastikan untuk menambahkan event listener setelah DOM dimuat
document.addEventListener('DOMContentLoaded', function() {
    const TroubleshootBtn = document.getElementById('TroubleshootBtn');

    // Ketika tombol diklik, arahkan ke halaman baru
    TroubleshootBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah aksi default (misalnya jika ada link)
        window.location.href = 'Troubleshoot.html'; // Ganti dengan URL yang sesuai
    });
});