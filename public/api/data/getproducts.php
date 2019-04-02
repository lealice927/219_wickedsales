<?php
   // readfile('./data/getproducts.json');
require_once('mysqlconnect.php');
require_once('functions.php');

set_exception_handler('handleError');

   // $query = 'SELECT * FROM `products`';
$query = 'SELECT p.`id`, p.`name`, p.`price`, i.`url` AS `images` FROM `products` AS p JOIN `images` AS i ON p.`id` = i.`products_id` ORDER BY p.`id`';

/*procedural*/
$result = mysqli_query($conn, $query);

if(!$result){
throw new Exception('invalid query: '.mysqli_error($conn));
};

$data = [];
$images = [];

while($row = mysqli_fetch_assoc($result)){
    $currentID = $row['id'];
    $images = $row['images'];
    if(isset($data[$currentID])){
        $data[$currentID]['images'][] = $row['images'];
        $data[$currentID]['images'][] = $images;
// array_push($data[$currentID]['images'], $image); old push method
    }else{
        $row['images'] = [$images];
        $row['id'] = intval($row['id']);
        $row['price'] = intval($row['price']);
// $row['price'] = (int)$row['price']; using casting; popular in java and C
        $data[$currentID] = $row;
    };
};

$pureData = [];

foreach($data as $value){
    $pureData[] = $value;
};

$output = [
    'success' => true,
    'products' => $pureData
];

   // $output = [
   //     'success' => true,
   //     'products' => $data
   // ];

$json_output = json_encode($output);

print($json_output);
?>