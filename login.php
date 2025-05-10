<?php
// login.php - handles form submission to login the user
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Database connection
    $conn = new mysqli("localhost", "root", "", "your_database");

    // Check for connection errors
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if user exists
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verify password
        if (password_verify($password, $user['password'])) {
            // Start session and store user data
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            // Redirect to home page
            header("Location: home.html");
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "User not found!";
    }

    $stmt->close();
    $conn->close();
}
?>
