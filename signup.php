<?php
// signup.php - handles form submission to register the user
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Encrypt password

    // Database connection (assuming you have MySQL database)
    $conn = new mysqli("localhost", "root", "", "your_database");

    // Check for connection errors
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert user into database
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $password);
    
    if ($stmt->execute()) {
        // Redirect to login page after successful registration
        header("Location: login.html");
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
