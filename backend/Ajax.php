<?php
header( 'Access-Control-Allow-Origin: localhost:3000
Access-Control-Request-Headers: Content-Type, x-requested-with');
include 'config.inc.php';

$Action = $_POST['Action'];
$Command = $_POST['Command'];

if ($Action == 'Post' && $Command == 'Create') {
    // cleanse POST Data:
    foreach ($_POST as $key => $value) {
        $_POST[$key] = filter_var($value, FILTER_SANITIZE_SPECIAL_CHARS);
    }

    $conn -> query('INSERT INTO post SET title = \''.$_POST['title'].'\';');

    echo($_POST['title'].' inserted successfuly');  
}

?>