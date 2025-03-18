<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    include 'db.php';
    include 'token.php';

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    // دریافت داده‌های ارسال‌شده از React
    $data = json_decode(file_get_contents("php://input"), true);



    $phone = $data['phone'];
    $password = $data['password'];

    


    $result = $conn -> prepare ("SELECT * FROM users WHERE phone=? AND password=?");
    $result -> bindValue(1 , $phone);
    $result -> bindValue(2 , $password);
    $result -> execute();


    if ($result -> rowCount() >= 1) {

        $_SESSION ['login-verify'] = true;

        $row = $result -> fetch( PDO::FETCH_ASSOC );

        $_SESSION ['name'] = $row['fullname'];

        $_SESSION ['phone'] = $row['phone'];

        $_SESSION ['email'] = $row['email'];

        $_SESSION ['password'] = $row['password'];
            
        $_SESSION ['token'] = $row['token'];

        // setcookie('token2' , 1 , time() + 60*60*24*30 , "/");
        
        echo json_encode(["message" => $row['token']]);

        // setcookie('password' , $_SESSION['password'] , time() + 60*60*24*30 , "/");

        // exit(header("Location: ../../Dashboard/index.php"));
        

    }else{

        echo json_encode(["message" => false]);

    }

?>