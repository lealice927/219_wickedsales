<?php

require_once('mysqlconnect.php');

$query = 'SELECT p.`id`, p.`name`, p.`price`,
i.`url` AS `images`
FROM `products` AS p
JOIN `images` AS i
ON p.`id` = i.`products_id`';

/*procedural*/
$result = mysqli_query($conn, $query);

$data = [];
$images = [];

while($row = mysqli_fetch_assoc($result)){
    $currentID = $row['id'];
    $image = $row['images'];
    if(isset($data[$currentID]) ){
        $data[$row['id']] ['images'] [] = $row['images'];
        $data[$currentID]['images'][]= $image; //new push way
        // array_push($data[$currentID] ['images'], $image ); //old push way
        // $data[$currentID]['images'][count($data[$currentID]['images'])] = $image //this is just mean
    } else {
        $image = $row['images'];
        $row['images'] = [$image];
        //the way i would write
        $row['price'] = intval($row['price']);
        $row['price'] = (int)$row['price'];

        $data[$currentID] = $row;
        
    }
}
$pureData = [];
foreach($data as $value){
    $pureData[] = $value;
}

$output = [
    'success' => true,
    'products' => $pureData,
];

$json_output = json_encode($output);

print($json_output);

// readfile('./data/getproducts.json');

require_once('mysqlconnect.php');

?>