<?php
include('config.php');    
if($_POST['action_id'] == '1')
{

    
    $check = mysqli_query($conn, "SELECT * FROM test WHERE c_id=".$_POST['c_id']); 

    if($check->num_rows != 0){
      $u_res =  mysqli_query($conn, "UPDATE test SET data='".$_POST['a1']."'   WHERE c_id='".$_POST['c_id']."'");
        if($u_res){
            echo 1;
        }
    }else{
        $sql = " INSERT INTO test(id,data,c_id) VALUES ('".$_POST['id']."','".$_POST['a1']."','".$_POST['c_id']."')";
        $result = mysqli_query($conn, $sql);
           if($result){
               echo 1;
           }
           }
   
}

if($_POST['action_id'] == '2')
{
    $check_company = mysqli_query($conn, "SELECT * FROM companies WHERE user_name='".$_POST['name']."'"); 
    $check_company->num_rows;
   if($check_company->num_rows == 0){
    $csql = "INSERT INTO companies(user_name,company_name,facility, year,u_id) VALUES ('".$_POST['name']."','".$_POST['cname']."','".$_POST['type']."','".$_POST['Year']."','".$_POST['uid']."')";
        $cresult = mysqli_query($conn, $csql);
           if($cresult){
            $res = mysqli_query($conn, "SELECT id FROM companies WHERE user_name='".$_POST['name']."' || company_name = '".$_POST['cname']."'");
            while ($row = mysqli_fetch_assoc($res)) {
               echo $row['id'];
            }
        
           } 
      
}else{
    echo 0;
}

}

if($_POST['action_id'] == '3')
{
    $uid = $_POST['uid'];
    $res = mysqli_query($conn, "SELECT * FROM companies WHERE u_id ='$uid'");
    while ($row = mysqli_fetch_assoc($res)) {
        $response[] = $row;
    
    }
    echo json_encode($response);


}


if($_POST['action_id'] == '4')
{

    
    $check_pf = mysqli_query($conn, "SELECT * FROM profitloss WHERE c_id=".$_POST['c_id']); 

    if($check_pf->num_rows != 0){
      $u_res_pf =  mysqli_query($conn, "UPDATE profitloss SET data='".$_POST['a1']."'   WHERE c_id='".$_POST['c_id']."'");
        if($u_res_pf){
            echo 1;
        }
    }else{
        $sql_pf = " INSERT INTO profitloss(id,data,c_id) VALUES ('".$_POST['id']."','".$_POST['a1']."','".$_POST['c_id']."')";
        $result_pf = mysqli_query($conn, $sql_pf);
           if($result_pf){
               echo 1;
           }
           }
   
}

if($_POST['action_id'] == 'SAVE_KFR')
{
    
    $check_pf = mysqli_query($conn, "SELECT * FROM key_financial_and_ratios WHERE c_id=".$_POST['c_id']); 

    if($check_pf->num_rows != 0){
      $u_res_pf =  mysqli_query($conn, "UPDATE key_financial_and_ratios SET data='".$_POST['a1']."'   WHERE c_id='".$_POST['c_id']."'");
        if($u_res_pf){
            echo 1;
        }
    }else{
        $sql_pf = "INSERT INTO key_financial_and_ratios(id,data,c_id) VALUES ('".$_POST['id']."','".$_POST['a1']."','".$_POST['c_id']."')";
        $result_pf = mysqli_query($conn, $sql_pf);
           if($result_pf){
               echo 1;
           }
           }
   
}

if($_POST['action_id'] == '5')
{

    
    $check_id = mysqli_query($conn, "SELECT * FROM ds_is WHERE c_id=".$_POST['c_id']); 

    if($check_id->num_rows != 0){
      $u_res_di =  mysqli_query($conn, "UPDATE ds_is SET dscr='".$_POST['ds']."'   WHERE c_id='".$_POST['c_id']."'");
        if($u_res_di){
            echo 1;
        }
    }else{
        $sql_di = " INSERT INTO ds_is(dscr,c_id) VALUES ('".$_POST['ds']."','".$_POST['c_id']."')";
        $result_di = mysqli_query($conn, $sql_di);
           if($result_di){
               echo 1;
           }
           }
   
}

if($_POST['action_id'] == '6')
{

    
    $check_is = mysqli_query($conn, "SELECT * FROM iscr WHERE c_id=".$_POST['c_id']); 

    if($check_is->num_rows != 0){
      $u_res_is =  mysqli_query($conn, "UPDATE iscr SET iscr='".$_POST['is']."'   WHERE c_id='".$_POST['c_id']."'");
        if($u_res_is){
            echo 1;
        }
    }else{
        $sql_is = " INSERT INTO iscr(iscr,c_id) VALUES ('".$_POST['is']."','".$_POST['c_id']."')";
        $result_is = mysqli_query($conn, $sql_is);
           if($result_is){
               echo 1;
           }
           }
   
}


if($_POST['action_id'] == '7')
{
    $res_header = mysqli_query($conn, "SELECT * FROM header");
    while ($row_header = mysqli_fetch_assoc($res_header)) {
        $response[] = $row_header;
    
    }
    echo json_encode($response);


}

if($_POST['action_id'] == '8')
{

    
    $check_header = mysqli_query($conn, "SELECT * FROM header WHERE id=".$_POST['c_id']); 

    if($check_header->num_rows != 0){
      $u_res_is =  mysqli_query($conn, "UPDATE header SET iscr='".$_POST['is']."'   WHERE id='".$_POST['c_id']."'");
        if($u_res_is){
            echo 1;
        }
    }else{
        $sql_is = " INSERT INTO header(iscr,c_id) VALUES ('".$_POST['is']."','".$_POST['c_id']."')";
        $result_is = mysqli_query($conn, $sql_is);
           if($result_is){
               echo 1;
           }
           }
   
}


if($_POST['action_id'] == '9')
{  
   
        $del_sql = "DELETE fROM companies WHERE id ='".$_POST['id']."'";
        $result_del = mysqli_query($conn, $del_sql);
           if($result_del){
               echo 1;
           }
        
}

?>