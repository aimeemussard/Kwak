<?php
session_start();
include("classes.php");
$userinfo = new User();
$postinfo = file_get_contents("php://input");

$tweetid = json_decode($postinfo, true);
$likescount = $userinfo->getTweetLikesCount($tweetid["tweetid"]);
$retweetcount = $userinfo->getTweetRetweetsCount($tweetid["tweetid"]);
// if ($likescount["countlikes"] == "" || $retweetcount["countretweets"] == "") {
//     if ($likescount["countlikes"] != "") {
//         echo json_encode($likescount);
//     } else if ($retweetcount["countretweets"] != "") {
//         echo json_encode($retweetcount);
//     }
// } else if($likescount["countlikes"] != "" && $retweetcount["countretweets"] != "") {
//     echo json_encode($likescount + $retweetcount);
// }
echo json_encode($tweetid);
// echo $postinfo;