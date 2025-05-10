// Modal functionality
const addSparepartBtn = document.getElementById('addSparepartBtn');
const addSparepartModal = document.getElementById('addSparepartModal');
const closeModalBtn = document.querySelector('.close-btn');
const addSparepartForm = document.getElementById('addSparepartForm');

// Open modal
addSparepartBtn.onclick = () => {
    addSparepartModal.style.display = 'block';
};

// Close modal
closeModalBtn.onclick = () => {
    addSparepartModal.style.display = 'none';
};

// Add sparepart form submission
addSparepartForm.onsubmit = (e) => {
    e.preventDefault();
    
    const newSparepart = {
        locator: document.getElementById('locator').value,
        name: document.getElementById('name').value,
        type: document.getElementById('type').value,
        merk: document.getElementById('merk').value,
        quantity: document.getElementById('quantity').value,
        for: document.getElementById('for').value,
        remark: document.getElementById('remark').value,
    };
    
    addSparepartToTable(newSparepart);
    addSparepartModal.style.display = 'none';
    addSparepartForm.reset();
};

// Function to add sparepart to table
const addSparepartToTable = (sparepart) => {
    const tableBody = document.getElementById('tableBody');
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
};

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr');
    
    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        let matchFound = false;
        
        Array.from(cells).forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchTerm)) {
                matchFound = true;
            }
        });
        
        if (matchFound) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
