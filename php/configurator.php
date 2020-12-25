<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Methods, Access-Control-Request-Headers');

$_POST = json_decode(file_get_contents('php://input'), true);;
$ss = file_get_contents("configurator_codes.json");
$jsonCom = json_decode($ss, true);
echo json_encode($jsonCom);
// if($_POST['complectation']){
//   echo file_get_contents("configurator_codes.json");
// }
    