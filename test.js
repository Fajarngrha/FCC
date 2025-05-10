// Sample data for working orders
const workingOrders = [
    { id: 1, description: 'Order #1: Machine A needs repair' },
    { id: 2, description: 'Order #2: Section B troubleshooting' },
    { id: 3, description: 'Order #3: Machine C malfunction' },
    { id: 4, description: 'Order #4: Section D failure' }
];

// Populate working orders on page load
function displayWorkingOrders(orders) {
    const list = document.getElementById('working-order-list');
    list.innerHTML = ''; // Clear existing list
    orders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = order.description;
        list.appendChild(listItem);
    });
}

// Filter working orders based on search input
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredOrders = workingOrders.filter(order => 
        order.description.toLowerCase().includes(searchTerm)
    );
    displayWorkingOrders(filteredOrders);
});

// Initial load
displayWorkingOrders(workingOrders);

// Submit the troubleshoot form
document.getElementById('troubleshoot-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        reportedBy: document.getElementById('reportedBy').value,
        date: document.getElementById('date').value,
        hour: document.getElementById('hour').value,
        shift: document.getElementById('shift').value,
        machine: document.getElementById('machine').value,
        section: document.getElementById('section').value,
        trouble: document.getElementById('trouble').value
    };
    console.log('Troubleshoot Data:', formData);
    // Add form data submission logic here (e.g., via AJAX)
});
