<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Electro-cat";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to retrieve employee data
$sql = "SELECT id, post, name, second_name, series, number, login, password FROM Сотрудник";
$result = $conn->query($sql);

// Create an array to store the employee data
$employees = array();

// Fetch the employee data and store it in the array
while ($row = $result->fetch_assoc()) {
    $employees[] = $row;
}

// Close the database connection
$conn->close();

// Output the employee data in JSON format
header('Content-Type: application/json');
echo json_encode($employees);
?>