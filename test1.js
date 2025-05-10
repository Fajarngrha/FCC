// Function to generate a unique ticket number (using timestamp)
const generateTicketNo = () => {
    return 'TICKET-' + new Date().getTime(); // Generate a unique ticket number based on timestamp
};

// Show the success modal with ticket number
const showSuccessModal = (ticketNo) => {
    const modal = document.getElementById('successModal');
    const ticketNoElement = document.getElementById('ticketNoSuccess');
    ticketNoElement.textContent = ticketNo; // Display the ticket number
    modal.style.display = 'block'; // Show the modal
};

// Close the success modal
const closeModal = () => {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none'; // Hide the modal
};

// Redirect to the view results page
const goToResults = () => {
    window.location.href = 'test.html'; // Redirect to the "View Working Orders" page
};

// Event listener for the form submission
document.getElementById('workingOrderForm').onsubmit = function(e) {
    e.preventDefault();

    // Get form values
    const reportedBy = document.getElementById('reportedBy').value;
    const date = document.getElementById('date').value;
    const hour = document.getElementById('hour').value;
    const shift = document.getElementById('shift').value;
    const machine = document.getElementById('machine').value;
    const section = document.getElementById('section').value;
    const trouble = document.getElementById('trouble').value;

    // Generate unique ticket number
    const ticketNo = generateTicketNo();

    // Save data to localStorage
    const newOrder = {
        ticketNo,
        reportedBy,
        date,
        hour,
        shift,
        machine,
        section,
        trouble
    };

    let savedOrders = JSON.parse(localStorage.getItem('workingOrders')) || [];
    savedOrders.push(newOrder);
    localStorage.setItem('workingOrders', JSON.stringify(savedOrders));

    // Show success popup
    showSuccessModal(ticketNo);

    // Reset form
    document.getElementById('workingOrderForm').reset();
};

// Event listener for closing the modal
document.querySelector('.close-btn').onclick = closeModal;

// Event listener for going to the results page
document.getElementById('goToResults').onclick = goToResults;
