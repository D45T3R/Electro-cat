<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Electro-cat";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$login = $_POST['login'];
$password = $_POST['password'];

$query = "SELECT * FROM Сотрудник WHERE login = '$login' AND password = '$password'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $post = $row['post'];
    echo "success|$post";
    session_start();
    $_SESSION['logged_in'] = true;
    $_SESSION['username'] = $login;
    $_SESSION['post'] = $post;
} else {
    // Check in "Пользователь" table
    $query = "SELECT * FROM Пользователь WHERE login = '$login' AND password = '$password'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        echo "success|user";
        session_start();
        $_SESSION['logged_in'] = true;
        $_SESSION['username'] = $login;
        $_SESSION['post'] = "user";
    } else {
        echo "error";
    }
}
?>