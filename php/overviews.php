<?

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Methods, Access-Control-Request-Headers');

if($_GET['complectations'] && $_GET['id']){
  $complectationsId = $_GET['complectations'];
  $modelId = $_GET['id'];
  $complectationsJson = file_get_contents("models/overviews/".$modelId."/index.json");
  $arr = [];
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