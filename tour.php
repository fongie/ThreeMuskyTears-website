
<?php
header("Content-Type: application/json; charset=UTF-8");

$pdo = new pdo("mysql:host=localhost;dbname=onvmlend_threemuskytears;charset=utf8mb4", "root", "papegoja");

$query = 'SELECT 
            DATE_FORMAT(date, "%e/%c %Y") AS date, 
            place, 
            city, 
            event 
        FROM tourItems';

$tour_array=array();
foreach($pdo->query($query) as $row) {

    $temp_array=array(
        "date" => $row['date'],
        "place" => $row['place'],
        "city" => $row['city'],
    );
    if ($row['event'] != null) {
        $temp_array["event"] = $row['event'];
    }

    array_push($tour_array, $temp_array);

}

echo json_encode($tour_array);

?>
