<!DOCTYPE html>
<html>
<head>
	<title>Site</title>
</head>
<body>

<a href="http://localhost/19.09.15/multipage/">Главная</a>
<a href="http://localhost/19.09.15/multipage/index.php?page=news">Новости</a>
<a href="http://localhost/19.09.15/multipage/index.php?page=gallery">Галерея</a>

<?php
	if($_GET) {
		$page = $_GET["page"];
	} else {
		$page = null;
	}

	if($page) {
		if(file_exists("pages/".$page.".php")) {

			var_dump(scandir("pages/"));

			include("pages/".$page.".php");
		} else {
			echo "<h1>404</h1>";
		}
	}

?>

</body>
</html>