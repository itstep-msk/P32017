<?php
	
	class Goods {
		function __construct($goods) {
			$this->goods = $goods;
		}

		function get($from, $to) {
			$result = [];

			for($i = $from; $i <= $to; $i++) {
				array_push($result, $this->goods[$i]);
			}

			return $result;
		}
	}
?>