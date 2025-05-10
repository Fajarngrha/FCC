// Simulate fetching data (this can be replaced with an actual API call)
const stats = {
    users: 16,
    troubleshootMachine: 25,
    workingOrder: 6,
    historyMachine: 8
};

// Function to update dashboard stats
const updateStats = () => {
    document.querySelectorAll('.card-info p').forEach((elem, index) => {
        const key = Object.keys(stats)[index];
        elem.textContent = stats[key];
    });
};

// Call updateStats function to populate the dashboard with values
updateStats();
// Optional JavaScript for additional interactivity
document.querySelectorAll('.btn-sidebar').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Navigating to the respective page...');
        // You can also add custom actions, such as logging or tracking
    });
});
