<?php

// I'm guessing these are variables
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'button_database';

// comments
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
mysqli_select_db($dbname, $conn);

$result = mysqli_query("select * from users", $conn);
//while ($row = mysqli_fetch(assoc($result)) {
//   print_r($row);
//}

print $result;
print $conn;
?>
