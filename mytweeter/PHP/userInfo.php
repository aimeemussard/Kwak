<?php

session_start();
include("classes.php");

//$userService = new User();

//$result = $userService->userPage($data);
if (isset($_SESSION["id"])) {
    echo json_encode(1);
} else {
    echo json_encode(0);
}
