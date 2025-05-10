const sql = require('mssql');

// Konfigurasi koneksi ke database SQL Server
const config = {
    user: 'your_sql_user',
    password: 'your_sql_password',
    server: 'your_server', // misalnya 'localhost' atau IP server
    database: 'register',
    options: {
        encrypt: true, // Jika menggunakan enkripsi
        trustServerCertificate: true // Hanya untuk pengujian
    }
};

async function connectDB() {
    try {
        let pool = await sql.connect(config);
        console.log("Koneksi Berhasil!");
        return pool;
    } catch (error) {
        console.error("Koneksi Gagal: ", error);
    }
}

module.exports = connectDB;
