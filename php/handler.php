<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Methods, Access-Control-Request-Headers');

//$_GET = json_decode(file_get_contents('php://input'), true);
//echo $_GET['path'], 'sds';
if($_GET['path']){
  echo file_get_contents(".".$_GET['path']."/index.json");
}

