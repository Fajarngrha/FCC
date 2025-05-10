window.onload = function() {
    // Mengambil data dari localStorage
    const workingOrderForm = JSON.parse(localStorage.getItem('workingOrderForm'));

    // Menampilkan data yang diambil dari localStorage
    if (workingOrderForm) {
        document.getElementById('date').value = workingOrderForm.date;
        document.getElementById('hour').value = workingOrderForm.hour;  // 'time' diganti menjadi 'hour' sesuai dengan id input form
        document.getElementById('shift').value = workingOrderForm.shift;
        document.getElementById('machine').value = workingOrderForm.machine;
        document.getElementById('section').value = workingOrderForm.section;
        document.getElementById('trouble').value = workingOrderForm.trouble;
        document.getElementById('reportedBy').value = workingOrderForm.reportedBy;
    }
};