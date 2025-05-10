window.onload = function() {
    // Ambil data sparepart dari localStorage
    const spareparts = JSON.parse(localStorage.getItem('spareparts')) || [];

    // Ambil elemen tabel
    const tableBody = document.getElementById('sparepartData').getElementsByTagName('tbody')[0];

    // Tambahkan data ke dalam tabel
    spareparts.forEach(sparepart => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${sparepart.locator}</td>
            <td>${sparepart.name}</td>
            <td>${sparepart.type}</td>
            <td>${sparepart.merk}</td>
            <td>${sparepart.quantity}</td>
            <td>${sparepart.for}</td>
            <td>${sparepart.remark}</td>
        `;
        tableBody.appendChild(row);
    });
};

// Fungsi untuk mencari data
function searchData() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const rows = document.getElementById('sparepartData').getElementsByTagName('tr');

    // Loop melalui semua baris tabel
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;

        // Loop melalui setiap kolom pada baris
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].innerText.toLowerCase().includes(searchValue)) {
                match = true;
                break; // Jika ditemukan kecocokan, keluar dari loop
            }
        }

        // Tampilkan atau sembunyikan baris berdasarkan pencarian
        if (match) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}
