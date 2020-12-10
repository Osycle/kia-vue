<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Methods, Access-Control-Request-Headers');

//$_GET = json_decode(file_get_contents('php://input'), true);
//echo $_GET['path'], 'sds';
if($_GET['path']){
  echo file_get_contents(".".$_GET['path']."/index.json");
}
if($_GET['complectations']){
  $complectationsJson = file_get_contents("models/overviews/3515cd01-a834-4112-89b1-604fcfb6c71e/index.json");
  $arr = [];
  $complectationsId = $_GET['complectations'];
  $jsonCom = json_decode('['.$complectationsJson.']', true);
  $complectationsArr = $jsonCom[0]["content"]["complectations"];
  //foreach ($jsonCom[0]["content"]["complectations"] as $key => $value) {
  //  print_r($value["id"]);
  //}
  $currentComplectation;

  //print_r($currentComplectation);
  for ($i=0; $i < count($complectationsId); $i++) { 
    for ($o=0; $o < count($complectationsArr); $o++) { 
      if( $complectationsArr[$o]["id"] == $complectationsId[$i])
        array_push($arr, $complectationsArr[$o]);
    }
  }
  echo json_encode($arr);
}
