<?php
	include('config.php');

	function moveData($name){
		$uploaded_data = [];
		$status = true;
		$count = $_POST[$name.'L'];
		if ($count != 0) {
			for ($i=0; $i < $count ; $i++) {
		        $tmp_name = $_FILES[$name.$i]["tmp_name"];
		        $name_File = $_FILES[$name.$i]["name"];
		        $uploads_dir = 'upload';
				move_uploaded_file($tmp_name, "$uploads_dir/$name_File");
				$uploaded_data[] = $name_File;
			}
			return $uploaded_data;;
		}
	}

	if($_POST['action_id'] == 'ADD_USER') {
		$username = $_POST['username'];
		$email = $_POST['email'];
		$password = $_POST['password'];
		$res = mysqli_query($conn, "INSERT INTO users(username,email,password,role) VALUES('".$username."','".$email."','".$password."','user')");
		echo json_encode($res);
	}

	if($_POST['action_id'] == 'LOGIN_USER') {
		$username = $_POST['username'];
		$password = $_POST['password'];

		$res = mysqli_query($conn, "SELECT * FROM users WHERE username='".$username."' AND password='".$password."' ");
		
		if(mysqli_num_rows($res) != 0){		
	        while ($row = mysqli_fetch_assoc($res)) {
		 	   $response[] = $row;
		    }
		    echo json_encode($response);
		}else{
			echo json_encode(0);
		}

	}

	if($_POST['action_id'] == 'GET_FINAL_DATA_FIN_ANA') {
		$res = mysqli_query($conn, "SELECT * FROM key_financial_and_ratios");
	    while ($row = mysqli_fetch_assoc($res)) {
	        $response[] = $row;
	    }
	    echo json_encode($response);
	}


	if($_POST['action_id'] == 'UPLOAD_USER_DATA') {
		$res[] = moveData('pop');
		$res[] = moveData('op');
		$res[] = moveData('fp');
		$res[] = moveData('gp');
		$res[] = moveData('cp');
		$res[] = moveData('fv');
		$res[] = moveData('gv');
		$res[] = moveData('cv');
		echo json_encode($res);
	}


	if($_POST['action_id'] == 'SAVE_FIN_ANA') {
		$c_id = $_POST['c_id'];
		$year = $_POST['year'];
		$data = $_POST['data'];

		$res = mysqli_query($conn, "SELECT * FROM step_2 WHERE c_id='$c_id'");

		if(mysqli_num_rows($res) == 0){
			$res = mysqli_query($conn, "INSERT INTO step_2(c_id, year, FinAna, ManApp, ownership, MarkInd, TechProf, CollGua, dataUpload, SuperRating, iScore, RatPara, FRatReport) VALUES ('$c_id','$year','$data','null','null','null','null','null','null','null','null','null','null')");
		}else{
			$res = mysqli_query($conn, "UPDATE step_2 SET FinAna='$data' WHERE c_id='$c_id' ");
		}

		echo json_encode($res);
	}


	if($_POST['action_id'] == 'SAVE_MAN_APP') {
		$c_id = $_POST['c_id'];
		$year = $_POST['year'];
		$data = $_POST['data'];

		$res = mysqli_query($conn, "UPDATE step_2 SET ManApp='$data' WHERE c_id='$c_id' ");
		echo json_encode($res);
	}

	if($_POST['action_id'] == 'SAVE_OWNERSHIP') {
		$c_id = $_POST['c_id'];
		$year = $_POST['year'];
		$data = $_POST['data'];

		$res = mysqli_query($conn, "UPDATE step_2 SET ownership='$data' WHERE c_id='$c_id' ");
		echo json_encode($res);
	}	

	if($_POST['action_id'] == 'SAVE_MARK_IND') {
		$c_id = $_POST['c_id'];
		$year = $_POST['year'];
		$data = $_POST['data'];

		$res = mysqli_query($conn, "UPDATE step_2 SET MarkInd='$data' WHERE c_id='$c_id' ");
		echo json_encode($res);
	}

	if($_POST['action_id'] == 'SAVE_TECH_PROF') {
		$c_id = $_POST['c_id'];
		$year = $_POST['year'];
		$data = $_POST['data'];

		$res = mysqli_query($conn, "UPDATE step_2 SET TechProf='$data' WHERE c_id='$c_id' ");
		echo json_encode($res);
	}	

	if($_POST['action_id'] == 'SAVE_COLL_GUA') {
		$c_id = $_POST['c_id'];
		$year = $_POST['year'];
		$data = $_POST['data'];

		$res = mysqli_query($conn, "UPDATE step_2 SET CollGua='$data' WHERE c_id='$c_id' ");
		echo json_encode($res);
	}

	if($_POST['action_id'] == 'SAVE_DATA_UPLOAD') {
		$c_id = $_POST['c_id'];
		$year = $_POST['year'];
		$data = $_POST['data'];

		$res = mysqli_query($conn, "UPDATE step_2 SET dataUpload='$data' WHERE c_id='$c_id' ");
		echo json_encode($res);
	}

	if($_POST['action_id'] == 'SAVE_SUPER_RATING') {
		$c_id = $_POST['c_id'];
		$year = $_POST['year'];
		$data = $_POST['data'];

		$res = mysqli_query($conn, "UPDATE step_2 SET SuperRating='$data' WHERE c_id='$c_id' ");
		echo json_encode($res);
	}	

	if($_POST['action_id'] == 'SAVE_iScore') {
		$c_id = $_POST['c_id'];
		$year = $_POST['year'];
		$data = $_POST['data'];

		$res = mysqli_query($conn, "UPDATE step_2 SET iScore='$data' WHERE c_id='$c_id' ");
		echo json_encode($res);
	}

	if($_POST['action_id'] == 'SAVE_RAT_PARA') {
		$c_id = $_POST['c_id'];
		$year = $_POST['year'];
		$data = $_POST['data'];

		$res = mysqli_query($conn, "UPDATE step_2 SET RatPara='$data' WHERE c_id='$c_id' ");
		echo json_encode($res);
	}

	if($_POST['action_id'] == 'CHECK_FINAL_DATA_FIN_ANA'){
		$c_id = $_POST['c_id'];
		$res = mysqli_query($conn, "SELECT * FROM step_2 WHERE c_id='$c_id'");
		while ($row = mysqli_fetch_assoc($res)) {
	        $response[] = $row;
	    }
	    echo json_encode($response);
	}
?>
