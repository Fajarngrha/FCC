document.getElementById('sparepartForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data dari form
    const locator = document.getElementById('locator').value;
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const merk = document.getElementById('merk').value;
    const quantity = document.getElementById('quantity').value;
    const forField = document.getElementById('for').value;
    const remark = document.getElementById('remark').value;

    // Buat objek data sparepart
    const sparepartData = {
        locator: locator,
        name: name,
        type: type,
        merk: merk,
        quantity: quantity,
        for: forField,
        remark: remark
    };

    // Simpan data ke localStorage
    let spareparts = JSON.parse(localStorage.getItem('spareparts')) || [];
    spareparts.push(sparepartData);
    localStorage.setItem('spareparts', JSON.stringify(spareparts));

    // Reset form setelah submit
    document.getElementById('sparepartForm').reset();

    // Tampilkan pop-up pemberitahuan
    alert('Data telah ditambahkan!');

    // Arahkan pengguna ke halaman data sparepart
    window.location.href = 'datasparepart.html';
});
