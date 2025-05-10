document.getElementById("workingOrderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const reportedBy = document.getElementById("reportedBy").value;
    const date = document.getElementById("date").value;
    const hour = document.getElementById("hour").value;
    const shift = document.getElementById("shift").value;
    const machine = document.getElementById("machine").value;
    const section = document.getElementById("section").value;
    const trouble = document.getElementById("trouble").value;

    // Store data in localStorage (or you can send it to a server)
    localStorage.setItem("reportedBy", reportedBy);
    localStorage.setItem("date", date);
    localStorage.setItem("hour", hour);
    localStorage.setItem("shift", shift);
    localStorage.setItem("machine", machine);
    localStorage.setItem("section", section);
    localStorage.setItem("trouble", trouble);

    // Redirect to Troubleshoot page
    window.location.href = "Troubleshoot.html";
});

// Menyimpan data ke localStorage ketika form disubmit
// document.getElementById('workingOrderForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Mendapatkan nilai dari form
//     const reportedBy = document.getElementById('reportedBy').value;
//     const date = document.getElementById('date').value;
//     const hour = document.getElementById('hour').value;
//     const shift = document.getElementById('shift').value;
//     const machine = document.getElementById('machine').value;
//     const section = document.getElementById('section').value;
//     const trouble = document.getElementById('trouble').value;

//     // Membuat objek untuk data form
//     const workingOrderForm = {
//         reportedBy,
//         date,
//         hour,
//         shift,
//         machine,
//         section,
//         trouble
//     };

//     // Menyimpan data ke localStorage
//     localStorage.setItem('workingOrderForm', JSON.stringify(workingOrderForm));

//     // Opsional: Reset form setelah disubmit
//     document.getElementById('workingOrderForm').reset();

//     // Redirect to Troubleshoot page
//      window.location.href = "Troubleshoot.html";
// });