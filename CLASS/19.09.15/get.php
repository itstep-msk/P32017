<?php
	$num = $_GET["num"];

	function bellard($n) {
	    $pi = 0;
	    $k = 0;

	    while ($k < $n) {
			$pi += (-1**$k/(1024**$k))*(256/(10*$k+1) + 1/(10*$k+9) - 64/(10*$k+3) - 32/(4*$k+1) - 4/(10*$k+5) - 4/(10*$k+7) - 1/(4*$k+3));
			$k += 1;
	  	}

	    $pi = $pi * 1/(2**6);

	    return number_format($pi * -1, $n, '.', '');

	}
	echo bellard($num);
?>