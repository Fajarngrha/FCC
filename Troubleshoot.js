// Simulate getting the role of the user (could be set from login data)
const userRole = 'Maintenance'; // Change this value to 'Other' to simulate non-maintenance users

// Function to display the saved working orders from localStorage
const displayOrders = () => {
    const savedOrders = JSON.parse(localStorage.getItem('workingOrders')) || [];
    const tableBody = document.querySelector('#workingOrdersTable tbody');
    tableBody.innerHTML = ''; // Clear any previous content

    if (savedOrders.length === 0) {
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = `<td colspan="9" style="text-align: center;">No working orders submitted yet.</td>`;
        tableBody.appendChild(noDataRow);
    } else {
        savedOrders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.ticketNo}</td>
                <td>${order.reportedBy}</td>
                <td>${order.date}</td>
                <td>${order.hour}</td>
                <td>${order.shift}</td>
                <td>${order.machine}</td>
                <td>${order.section}</td>
                <td>${order.trouble}</td>
                <td>
                    ${userRole === 'Maintenance' ? 
                        `<select>
                            <option value="Open" ${order.status === 'Open' ? 'selected' : ''}>Open</option>
                            <option value="In Progress" ${order.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                            <option value="Closed" ${order.status === 'Closed' ? 'selected' : ''}>Closed</option>
                        </select>` 
                        : `<span>${order.status}</span>`
                    }
                </td>
            `;
            tableBody.appendChild(row);

            // Add event listener for changing the status if the role is Maintenance
            if (userRole === 'Maintenance') {
                const selectStatus = row.querySelector('select');
                selectStatus.addEventListener('change', (e) => {
                    order.status = e.target.value;
                    localStorage.setItem('workingOrders', JSON.stringify(savedOrders)); // Update localStorage
                });
            }
        });
    }
};

// Call displayOrders function to populate the table when the page loads
document.addEventListener('DOMContentLoaded', displayOrders);

// Function to handle search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#workingOrdersTable tbody tr');

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
