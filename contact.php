<?php
require_once 'connect.php'; // Include your database connection file

header('Content-Type: text/plain'); // Ensure content type is set to plain text

// Check connection
if ($conn->connect_error) {
    echo 'Connection failed: ' . $conn->connect_error;
    exit;
}

// Check if POST request contains data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from POST request
    $name = isset($_POST['name']) ? trim($conn->real_escape_string($_POST['name'])) : '';
    $email = isset($_POST['email']) ? trim($conn->real_escape_string($_POST['email'])) : '';
    $message = isset($_POST['message']) ? trim($conn->real_escape_string($_POST['message'])) : '';

    // Validate input
    if (empty($name) || empty($email) || empty($message)) {
        echo 'Please fill in all fields.';
        exit;
    }

    // Prepare and execute a SQL query
    $sql = "INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        echo 'Prepare failed: ' . $conn->error;
        exit;
    }

    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        echo 'Message sent successfully!';
    } else {
        echo 'Execute failed: ' . $stmt->error;
    }

    $stmt->close();
} else {
    echo 'Invalid request method.';
}

$conn->close();
?>
