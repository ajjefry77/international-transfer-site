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


$reqname = $data['reqName'];
$name = $data['name'];
$email = $data['reqEmail'];
$phone = $data['reqPhone'];
$count = $data['reqCount'];

$type = $data['reqType'];


$token = token_builder(8, '0123456789');


if (isset($type)) {
    if ($type == "درخواست محصول"){

        // $result = $conn -> prepare("INSERT INTO homereq SET name=? , proname=? , type=? , count=? , email=? , phone=? , token=?");

        // $result -> bindValue(1 , $name);

        // $result -> bindValue(2 , $reqname);

        // $result -> bindValue(3 , $type);

        // $result -> bindValue(4 , $count);

        // $result -> bindValue(5 , $email);

        // $result -> bindValue(6 , $phone);

        // $result -> bindValue(7 , $token);

        // $result -> execute();
        
        echo json_encode(["message" => $token]);

    }else if($type == "حمل محصول"){
        
        $query = $data['query'];
        $destination = $data['destinationQuery'];
        
        $result = $conn -> prepare("INSERT INTO homereq SET name=? , proname=? , type=? , count=? , email=? , phone=? , token=? , query=? , destination=?");

        $result -> bindValue(1 , $name);

        $result -> bindValue(2 , $reqname);

        $result -> bindValue(3 , $type);

        $result -> bindValue(4 , $count);

        $result -> bindValue(5 , $email);

        $result -> bindValue(6 , $phone);

        $result -> bindValue(7 , $token);

        $result -> bindValue(8 , $query);

        $result -> bindValue(9 , $destination);

        $result -> execute();
        
        echo json_encode(["message" => $token]);
            
    }else if($type == "۰ تا ۱۰۰"){
        
        $query = $data['query'];
        $destination = $data['destinationQuery'];
        
        $result = $conn -> prepare("INSERT INTO homereq SET name=? , proname=? , type=? , count=? , email=? , phone=? , token=? , query=? , destination=?");

        $result -> bindValue(1 , $name);

        $result -> bindValue(2 , $reqname);

        $result -> bindValue(3 , $type);

        $result -> bindValue(4 , $count);

        $result -> bindValue(5 , $email);

        $result -> bindValue(6 , $phone);

        $result -> bindValue(7 , $token);

        $result -> bindValue(8 , $query);

        $result -> bindValue(9 , $destination);

        $result -> execute();
        
        echo json_encode(["message" => $token]);

    }
}




?>