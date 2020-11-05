<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Methods, Access-Control-Request-Headers');

//$_POST = json_decode(file_get_contents('php://input'), true);;

  if($_GET['model']){
    echo file_get_contents("video_bank/".$_GET['model'].".json");
  }
      
      

