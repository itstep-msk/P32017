<b>bold font</b>
<ul>
	<li>a</li>
	<li>b</li>
</ul>
<meta charset="utf-8">
<?php
	echo "hello";
	echo 1 + 1;
	echo "<br>";
	$a = 10;
	echo $a;

	echo "Интерполяция $a";

	$b = 10;
	$c = 20;
	echo "<br>";
	echo "b: ".$b." c:".$c;
	echo "\$a";

	$apple = 10;
	$fruit = "apple";

	echo $$fruit; // 10

	$arr = [];
	// array_push(куда, что)
	$arr[0] = "a";
	$arr[1] = "b";
	$arr[] = "c";
	$arr["Moscow"] = 17000000;
	//echo $arr; // Array
	//var_dump($arr);
	echo "<br>";
	foreach($arr as $key => $value) {
		echo "Ключ: ".$key."<br>";
		// $arr[$key];
		echo "Значение:".$value."<br>";
	}

	$globalApple = 100;

	function testGlobalVar() {
		global $globalApple; // указываем, что ищем глобальную переменную

		echo $globalApple;
	}

	testGlobalVar();

	
?>