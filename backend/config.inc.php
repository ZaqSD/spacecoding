<?php

if ($_SERVER['HTTP_HOST'] == 'localhost') {
  define('LOCAL', true);
} else {
  define('LOCAL', false);
}

if (!LOCAL) {
  // connection doesnt work yet, have to check with Okle (access denied)
  $servername = 'g2.cfserver.ch';
  $username = 'dragonwebsql4';
  $password = '!F7yp3$aPq?dwXqK';

} else {
  $servername = 'localhost';
  $username = 'root';
  $password = '';
}

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
die('Connection failed: ' . $conn->connect_error);
}
echo 'Connected successfully';

?>