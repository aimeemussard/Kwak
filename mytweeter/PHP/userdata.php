<?php

session_start();
include("classes.php");
$userService = new User();
$data = json_decode(file_get_contents('php://input'), true);
if ($data["userid"] == "user") {
    $result = $userService->allUserData($_SESSION["id"]);
} else {
    $result = $userService->allUserData($data["userid"]);
}


echo json_encode($result);