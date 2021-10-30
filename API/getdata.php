<?php
include('config.php');
if($_GET['id'] != ''){
   $res = mysqli_query($conn, "SELECT * FROM test WHERE c_id=".$_GET['id']);

   if($res->num_rows != 0){
  
   while ($row = mysqli_fetch_assoc($res)) {
      echo $row['data'];
   }
   }else{
echo '{"th1":"Auditted","th2":"Unauditted","th3":"Unaudit","th4":"Estimated","th5":"Unaudit","th6":"Projected","th7":"Projected","th8":"Projected",
   "a1":0,"a2":0,"a3":0,"a4":0,"a5":0,"a6":0,"a7":0,"a8":0,
   "b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,
   "c1":0,"c2":0,"c3":0,"c4":0,"c5":0,"c6":0,"c7":0,"c8":0,
   "d1":0,"d2":0,"d3":0,"d4":0,"d5":0,"d6":0,"d7":0,"d8":0,
   "e1":0,"e2":0,"e3":0,"e4":0,"e5":0,"e6":0,"e7":0,"e8":0,
   "f1":0,"f2":0,"f3":0,"f4":0,"f5":0,"f6":0,"f7":0,"f8":0,
   "g1":0,"g2":0,"g3":0,"g4":0,"g5":0,"g6":0,"g7":0,"g8":0,
   "h1":0,"h2":0,"h3":0,"h4":0,"h5":0,"h6":0,"h7":0,"h8":0,
   "t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0,"t8":0,
   "am1":0,"am2":0,"am3":0,"am4":0,"am5":0,"am6":0,"am7":0,"am8":0,
   "bm1":0,"bm2":0,"bm3":0,"bm4":0,"bm5":0,"bm6":0,"bm7":0,"bm8":0,
   "cm1":0,"cm2":0,"cm3":0,"cm4":0,"cm5":0,"cm6":0,"cm7":0,"cm8":0,
   "dm1":0,"dm2":0,"dm3":0,"dm4":0,"dm5":0,"dm6":0,"dm7":0,"dm8":0,
   "em1":0,"em2":0,"em3":0,"em4":0,"em5":0,"em6":0,"em7":0,"em8":0,
   "tm1":0,"tm2":0,"tm3":0,"tm4":0,"tm5":0,"tm6":0,"tm7":0,"tm8":0,
   "ac1":0,"ac2":0,"ac3":0,"ac4":0,"ac5":0,"ac6":0,"ac7":0,"ac8":0,
   "bc1":0,"bc2":0,"bc3":0,"bc4":0,"bc5":0,"bc6":0,"bc7":0,"bc8":0,
   "cc1":0,"cc2":0,"cc3":0,"cc4":0,"cc5":0,"cc6":0,"cc7":0,"cc8":0,
   "dc1":0,"dc2":0,"dc3":0,"dc4":0,"dc5":0,"dc6":0,"dc7":0,"dc8":0,
   "tc1":0,"tc2":0,"tc3":0,"tc4":0,"tc5":0,"tc6":0,"tc7":0,"tc8":0,
   "tl1":0,"tl2":0,"tl3":0,"tl4":0,"tl5":0,"tl6":0,"tl7":0,"tl8":0,
   "ch1":0,"ch2":0,"ch3":0,"ch4":0,"ch5":0,"ch6":0,"ch7":0,"ch8":0,
   "bb1":0,"bb2":0,"bb3":0,"bb4":0,"bb5":0,"bb6":0,"bb7":0,"bb8":0,
   "td1":0,"td2":0,"td3":0,"td4":0,"td5":0,"td6":0,"td7":0,"td8":0,
   "st1":0,"st2":0,"st3":0,"st4":0,"st5":0,"st6":0,"st7":0,"st8":0,
   "si1":0,"si2":0,"si3":0,"si4":0,"si5":0,"si6":0,"si7":0,"si8":0,
   "pe1":0,"pe2":0,"pe3":0,"pe4":0,"pe5":0,"pe6":0,"pe7":0,"pe8":0,
   "as1":0,"as2":0,"as3":0,"as4":0,"as5":0,"as6":0,"as7":0,"as8":0,
   "oa1":0,"oa2":0,"oa3":0,"oa4":0,"oa5":0,"oa6":0,"oa7":0,"oa8":0,
   "tca1":0,"tca2":0,"tca3":0,"tca4":0,"tca5":0,"tca6":0,"tca7":0,"tca8":0,
   "fa1":0,"fa2":0,"fa3":0,"fa4":0,"fa5":0,"fa6":0,"fa7":0,"fa8":0,
   "lt1":0,"lt2":0,"lt3":0,"lt4":0,"lt5":0,"lt6":0,"lt7":0,"lt8":0,
   "on1":0,"on2":0,"on3":0,"on4":0,"on5":0,"on6":0,"on7":0,"on8":0,
   "tf1":0,"tf2":0,"tf3":0,"tf4":0,"tf5":0,"tf6":0,"tf7":0,"tf8":0,
   "gd1":0,"gd2":0,"gd3":0,"gd4":0,"gd5":0,"gd6":0,"gd7":0,"gd8":0,
   "pr1":0,"pr2":0,"pr3":0,"pr4":0,"pr5":0,"pr6":0,"pr7":0,"pr8":0,
   "oi1":0,"oi2":0,"oi3":0,"oi4":0,"oi5":0,"oi6":0,"oi7":0,"oi8":0,
   "ti1":0,"ti2":0,"ti3":0,"ti4":0,"ti5":0,"ti6":0,"ti7":0,"ti8":0,
   "ta1":0,"ta2":0,"ta3":0,"ta4":0,"ta5":0,"ta6":0,"ta7":0,"ta8":0,
   "bal1":0,"bal2":0,"bal3":0,"bal4":0,"bal5":0,"bal6":0,"bal7":0,"bal8":0
}';
}
}
if($_GET['cid'] != ''){
   $c_res = mysqli_query($conn, "SELECT * FROM Companies WHERE id=".$_GET['cid']);
   while ($c_row = mysqli_fetch_assoc($c_res)) {
    $response[] = $c_row;
   }
   echo json_encode($response);
}


if($_GET['pfid'] != ''){
   $res_pf = mysqli_query($conn, "SELECT * FROM profitloss WHERE c_id=".$_GET['pfid']);
  
   if($res_pf->num_rows != 0){
  
   while ($rowpf = mysqli_fetch_assoc($res_pf)) {
      echo $rowpf['data'];
   }

   }else{
echo'{"th1":"Auditted","th2":"Unauditted","th3":"Unaudit","th4":"Estimated","th5":"Unaudit","th6":"Projected","th7":"Projected","th8":"Projected",
   "a1":0,"a2":0,"a3":0,"a4":0,"a5":0,"a6":0,"a7":0,"a8":0,
   "b1":0,"b2":0,"b3":0,"b4":0,"b5":0,"b6":0,"b7":0,"b8":0,
   "t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0,"t8":0,
   "r1":0,"r2":0,"r3":0,"r4":0,"r5":0,"r6":0,"r7":0,"r8":0,
   "os1":0,"os2":0,"os3":0,"os4":0,"os5":0,"os6":0,"os7":0,"os8":0,
   "pf1":0,"pf2":0,"pf3":0,"pf4":0,"pf5":0,"pf6":0,"pf7":0,"pf8":0,
   "dl1":0,"dl2":0,"dl3":0,"dl4":0,"dl5":0,"dl6":0,"dl7":0,"dl8":0,
   "rt1":0,"rt2":0,"rt3":0,"rt4":0,"rt5":0,"rt6":0,"rt7":0,"rt8":0,
   "dp1":0,"dp2":0,"dp3":0,"dp4":0,"dp5":0,"dp6":0,"dp7":0,"dp8":0,
   "od1":0,"od2":0,"od3":0,"od4":0,"od5":0,"od6":0,"od7":0,"od8":0,
   "st1":0,"st2":0,"st3":0,"st4":0,"st5":0,"st6":0,"st7":0,"st8":0,
   "ao1":0,"ao2":0,"ao3":0,"ao4":0,"ao5":0,"ao6":0,"ao7":0,"ao8":0,
   "dc1":0,"dc2":0,"dc3":0,"dc4":0,"dc5":0,"dc6":0,"dc7":0,"dc8":0,
   "cp1":0,"cp2":0,"cp3":0,"cp4":0,"cp5":0,"cp6":0,"cp7":0,"cp8":0,
   "ga1":0,"ga2":0,"ga3":0,"ga4":0,"ga5":0,"ga6":0,"ga7":0,"ga8":0,
   "cs1":0,"cs2":0,"cs3":0,"cs4":0,"cs5":0,"cs6":0,"cs7":0,"cs8":0,
   "op1":0,"op2":0,"op3":0,"op4":0,"op5":0,"op6":0,"op7":0,"op8":0,
   "ib1":0,"ib2":0,"ib3":0,"ib4":0,"ib5":0,"ib6":0,"ib7":0,"ib8":0,
   "il1":0,"il2":0,"il3":0,"il4":0,"il5":0,"il6":0,"il7":0,"il8":0,
   "ti1":0,"ti2":0,"ti3":0,"ti4":0,"ti5":0,"ti6":0,"ti7":0,"ti8":0,
   "on1":0,"on2":0,"on3":0,"on4":0,"on5":0,"on6":0,"on7":0,"on8":0,
   "sb1":0,"sb2":0,"sb3":0,"sb4":0,"sb5":0,"sb6":0,"sb7":0,"sb8":0,
   "ii1":0,"ii2":0,"ii3":0,"ii4":0,"ii5":0,"ii6":0,"ii7":0,"ii8":0,
   "oi1":0,"oi2":0,"oi3":0,"oi4":0,"oi5":0,"oi6":0,"oi7":0,"oi8":0,
   "ts1":0,"ts2":0,"ts3":0,"ts4":0,"ts5":0,"ts6":0,"ts7":0,"ts8":0,
   "pb1":0,"pb2":0,"pb3":0,"pb4":0,"pb5":0,"pb6":0,"pb7":0,"pb8":0,
   "pt1":0,"pt2":0,"pt3":0,"pt4":0,"pt5":0,"pt6":0,"pt7":0,"pt8":0,
   "np1":0,"np2":0,"np3":0,"np4":0,"np5":0,"np6":0,"np7":0,"np8":0,
   "dw1":0,"dw2":0,"dw3":0,"dw4":0,"dw5":0,"dw6":0,"dw7":0,"dw8":0,
   "rp1":0,"rp2":0,"rp3":0,"rp4":0,"rp5":0,"rp6":0,"rp7":0,"rp8":0 }';


}
}
   
if($_GET['di'] != ''){
   $res_di = mysqli_query($conn, "SELECT * FROM ds_is WHERE c_id=".$_GET['di']);
   while ($rowdi = mysqli_fetch_assoc($res_di)) {
      echo $rowdi['dscr'];

   }

}

   
if($_GET['is'] != ''){
   $res_is = mysqli_query($conn, "SELECT * FROM iscr WHERE c_id=".$_GET['is']);
   while ($rowis = mysqli_fetch_assoc($res_is)) {
      echo $rowis['iscr'];

   }

}




    ?>