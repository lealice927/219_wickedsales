<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

if(empty($_SESSION['user_data']['token'])){
    $output['success'] = true;
    $output['message'] = "User already logged out";
    $json_output = json_encode($output);
    print($json_output);
    exit();
}

$token = $_SESSION['user_data']['token'];

$query = "DELETE FROM `user_connections` WHERE `token` = '$token'
";

$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception(mysqli_error($conn) ); //if query fails we get this message
};

if(mysqli_affected_rows($conn) !== 1){
    throw new Exception('failed to logout');
};

unset($_SESSION['user_data']);

$output['success'] = true;

$json_output = json_encode($output);
print($json_output);


?>
