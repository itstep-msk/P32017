<form action="post.php" method="POST">
	<input type="text" name="apple" placeholder="post">
	<input type="submit">
</form>

<form action="get.php" method="GET">
	<input type="text" name="orange" placeholder="get">
	<input type="submit">
</form>

<?php
//localhost/19.09.15/post-get.php?apple=10&orange=20
	// $_GET
	// $_POST
	// $_FILES
	// $_REQUEST
	// $_SERVER

	// $_GET["apple"] // 10
	// $_GET["orange"] // 20

	/*
	<form action="ссылка на обработчик" methods="POST">
		<input type="text" name="apple">
		<input type="text" name="orange">
		<input type="submit">
	</form>

	$_POST["apple"] // 10
	$_POST["orange"] // 20
	*/
	
	//var_dump($_GET);
?>