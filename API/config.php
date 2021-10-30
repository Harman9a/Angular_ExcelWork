<?php
	error_reporting(0);
	header('Access-Control-Allow-Origin: *');

	$DB_host = "localhost";
    $DB_user = "root";
    $DB_pass = "";
    $DB_name = "angular_excel_work";
    $conn = mysqli_connect($DB_host , $DB_user , $DB_pass ,$DB_name );
?>