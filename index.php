<? php

$dbhost = 'invisiblechairproject.com';
$dbuser = 'root';
$dbpass = '';

$conn = mysql_connect(($dbhost, $dbuser, $dbpass);
mysql_select_db($dbname, $conn);

$result = mysql_query("select * from users", $conn);

print $result;

print $conn;
