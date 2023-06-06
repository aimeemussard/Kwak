<?php

session_start();
include("classes.php");
$userService = new User();
$data = json_decode(file_get_contents('php://input'), true);
$result = $userService->connectUser($data);


if ($result != "L'email ou mot de passe incorrect") {
    $_SESSION["id"] = $result["id"];
    echo json_encode($_SESSION["id"]);
} else { 
    echo json_encode($result);
}