<?php

	include("db.php");
	include("goods.php");

	$from = $_GET["from"];
	$to = $_GET["to"];
	
	$db = new Db("database.json");
	$goods = new Goods($db->request("goods"));

	echo json_encode($goods->get($from,$to));
?>