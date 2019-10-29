<?php

	class Db {
		function __construct($db) {
			$this->db = $db;
		}

		function request($query) {
			$data = json_decode($this->open(), true);

			return $data[$query];
		}

		private function open() {
			return file_get_contents($this->db);
		}
	}
?>