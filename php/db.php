<?php
  date_default_timezone_set("Asia/Tehran");
  Session_start();
  $servername = "localhost";
  $username_db = "root";
  $password = "";

  try {
    $conn = new PDO("mysql:host=$servername;dbname=myapp", $username_db, $password);
    $conn->query('SET NAMES utf8');
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully";
  } catch(PDOException $e) {
      // echo 'Not connected';
  }
  
//   if (isset($_COOKIE['email']) && isset($_COOKIE['password'])) {
//     $checkaccount = $conn -> prepare ("SELECT * FROM users WHERE email=? AND password=?");
//     $checkaccount -> bindValue(1 , $_COOKIE['email']);
//     $checkaccount -> bindValue(2 , $_COOKIE['password']);
//     $checkaccount -> execute();
    
//     if ($checkaccount -> rowCount() >= 1) {
//       $_SESSION ['login-verify'] = true;
//       $row = $checkaccount -> fetch( PDO::FETCH_ASSOC );
//       $_SESSION ['name'] = $row['name'];
//       $_SESSION ['username'] = $row['username'];
//       $_SESSION ['email'] = $row['email'];
//       $_SESSION ['password'] = $row['password'];
//       $_SESSION ['side'] = $row['side'];
//       $_SESSION ['ban'] = $row['ban'];
//       $_SESSION ['coin'] = $row['coin'];
//       $_SESSION ['image'] = $row['image'];
//       $_SESSION ['bio'] = $row['bio'];
//       $_SESSION ['present'] = false;
//     }
//   }