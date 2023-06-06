<?php

session_start();
include("classes.php");
$userService = new User();
$data = json_decode(file_get_contents('php://input'), true);
$result = $userService->kwak($data["message"], $_SESSION["id"]);
echo json_encode($data);