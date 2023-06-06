<?php

session_start();
$data = $_SESSION["id"];
// $data = 2;
echo json_encode($data);
