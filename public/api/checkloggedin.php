<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

//if not empty, grab token from SESSION to pass it in
if(!empty($_SESSION['user_data'])){
    $token = $_SESSION['user_data']['token'];
} else {
    $json_input = file_get_contents("php://input"); //php://input is grabbing the token from the body of the request packet
    $input = json_decode($json_input, true); //input comes from the body which is inputted from the client
    if(empty($input['token'])){
        throw new Exception('token is required');
    }
    $token = addslashes($input['token'])
}
$login_check_query = "SELECT * FROM `user_connections` WHERE `token`= '$token' ";

$login_result = mysqli_query($conn, $login_check_query);

if(!$login_result){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($login_result) !==1){
    throw new Exception('not logged in');
}

$data = mysqli_fetch_assoc($login_results);
$output['success']=true;

if(!empty($_SESSION['user_data'])){
    $_SESSION['user_data'] = [
        'id' => $data['id'],
        'token' => $token
    ];
}

$json_output = json_encode($output);

print($json_output);

?>