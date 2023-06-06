<?php
session_start();
include("classes.php");
$userinfo = new User();
$data = json_decode(file_get_contents('php://input'), true);
$userinfo->likekwak($data["tweetid"], $_SESSION["id"]);
echo json_encode($data);