<?php
session_start();
include("classes.php");
$userinfo = new User();
$data = json_decode(file_get_contents('php://input'), true);
$result = $userinfo->getUserTweets($data["userid"]);
echo json_encode($result);