<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // اجازه فقط به React
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
include 'db.php';
include 'token.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// دریافت داده‌های ارسال‌شده از React
$data = json_decode(file_get_contents("php://input"), true);



$name = $data['fullName'];
$email = $data['email'];
$phone = $data['phone'];
$password = $data['password'];
$token = token_builder(12, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');


$selectdb = $conn -> prepare ("SELECT * FROM users");
$selectdb -> execute();


$email_exist = $conn -> prepare ("SELECT * FROM users WHERE email=?");
$email_exist -> bindValue(1 , $email);
$email_exist -> execute();


$phone_exist = $conn -> prepare ("SELECT * FROM users WHERE phone=?");
$phone_exist -> bindValue(1 , $phone);
$phone_exist -> execute();


$phonelength = htmlspecialchars($phone);
$length = 11;


if (strlen($phonelength) != $length) {

    echo json_encode(["message" => 4]);

}else{

    if ($phone_exist -> rowCount() >= 1) {

        echo json_encode(["message" => 3]);

    }else {
        if ($email_exist -> rowCount() >= 1  || !isset($email) || trim($email) == '') {

            echo json_encode(["message" => 2]);

        }else{

            $_SESSION ['login-verify'] = true;
            
            $_SESSION ['token'] = $token;

            $_SESSION ['name'] = $name;

            $_SESSION ['phone'] = $phone;

            $_SESSION ['email'] = $email;

            $_SESSION ['password'] = $password;

            $result = $conn -> prepare("INSERT INTO users SET token=? , fullname=? , phone=? , email=? , password=?");

            $result -> bindValue(1 , $token);

            $result -> bindValue(2 , $name);

            $result -> bindValue(3 , $phone);

            $result -> bindValue(4 , $email);

            $result -> bindValue(5 , $password);

            $result -> execute();
            
            echo json_encode(["message" => $token]);

            // setcookie('email' , $_SESSION['email'] , time() + 60*60*24*30 , "/");

            // setcookie('password' , $_SESSION['password'] , time() + 60*60*24*30 , "/");

            // exit(header("Location: ../../Dashboard/index.php"));

        }

    }

}

?>