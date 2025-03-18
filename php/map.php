<?php
error_reporting(E_ERROR | E_PARSE);
header("Access-Control-Allow-Origin: http://localhost:3000"); // اجازه فقط به React
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
include 'db.php';
include 'token.php';

$data = json_decode(file_get_contents("php://input"), true);


$query = $data['query'];
$destination = $data['destinationQuery'];
$cookies = $_COOKIE['token'];
$token = token_builder(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

if(!isset($query) || trim($query) == ''){

    // echo json_encode(["message1" => "لطفا تمام فیلد ها را کامل کنید!"]);

}else if(!isset($destination) || trim($destination) == ''){

    // echo json_encode(["message1" => "لطفا تمام فیلد ها را کامل کنید!"]);

} else{

    $result = $conn -> prepare("INSERT INTO req SET reqtoken=? , usertoken=? , mabda=? , maghsad=?");

    $result -> bindValue(1 , $token);

    $result -> bindValue(2 , $cookies);

    $result -> bindValue(3 , $query);

    $result -> bindValue(4 , $destination);

    $result -> execute();
    
    // echo json_encode(["message" => $tok]);
}
echo $cookies;
// if (isset($_COOKIE['token'])){
//     echo json_encode(["message" => $_COOKIE['token']]);
// }else{
//     echo json_encode(["message" => "session ndrid"]);
// }