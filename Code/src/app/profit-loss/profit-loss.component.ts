import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import jsPDF from 'jspdf'
import autoTable from  'jspdf-autotable'

@Component({
  selector: 'app-profit-loss',
  templateUrl: './profit-loss.component.html',
  styleUrls: ['./profit-loss.component.css']
})
export class ProfitLossComponent implements OnInit {
  id:any;
  c_id:any;
  data:any;
  data2:any;
  arr2:[];
  a1: number = 0;  a2 : number = 0;  a3 : number = 0;  a4 : number = 0;   a5 : number = 0; a6 : number = 0; a7:number=0; a8:number=0;
  b1: number = 0; b2: number = 0; b3: number = 0; b4: number = 0; b5: number = 0;  b6: number = 0;b7:number=0; b8:number=0;
  t1: number = 0; t2: number = 0; t3: number = 0; t4: number = 0; t5: number = 0; t6: number = 0;t7:number=0; t8:number=0;
  r1: number = 0;  r2 : number = 0;  r3 : number = 0;  r4 : number = 0;   r5 : number = 0; r6 : number = 0; r7:number=0; r8:number=0;
  os1: number = 0;  os2 : number = 0;  os3 : number = 0;  os4 : number = 0;   os5 : number = 0; os6 : number = 0; os7:number=0; os8:number=0;
  
  pf1: number = 0;  pf2 : number = 0;  pf3 : number = 0;  pf4 : number = 0;   pf5 : number = 0; pf6 : number = 0; pf7:number=0; pf8:number=0;
  dl1: number = 0;  dl2 : number = 0;  dl3 : number = 0;  dl4 : number = 0;   dl5 : number = 0; dl6 : number = 0; dl7:number=0; dl8:number=0;
  rt1: number = 0;  rt2 : number = 0;  rt3 : number = 0;  rt4 : number = 0;   rt5 : number = 0; rt6 : number = 0; rt7:number=0; rt8:number=0;
  dp1: number = 0;  dp2 : number = 0;  dp3 : number = 0;  dp4 : number = 0;   dp5 : number = 0; dp6 : number = 0; dp7:number=0; dp8:number=0;
  od1: number = 0;  od2 : number = 0;  od3 : number = 0;  od4 : number = 0;   od5 : number = 0; od6 : number = 0; od7:number=0; od8:number=0;
 
  st1: number = 0;  st2 : number = 0;  st3 : number = 0;  st4 : number = 0;   st5 : number = 0; st6 : number = 0; st7:number=0; st8:number=0;
  dc1: number = 0;  dc2 : number = 0;  dc3 : number = 0;  dc4 : number = 0;   dc5 : number = 0; dc6 : number = 0; dc7:number=0; dc8:number=0;
  ao1: number = 0;  ao2 : number = 0;  ao3 : number = 0;  ao4 : number = 0;   ao5 : number = 0; ao6 : number = 0; ao7:number=0; ao8:number=0;
  cp1: number = 0;  cp2 : number = 0;  cp3 : number = 0;  cp4 : number = 0;   cp5 : number = 0; cp6 : number = 0; cp7:number=0; cp8:number=0;
  ga1: number = 0;  ga2 : number = 0;  ga3 : number = 0;  ga4 : number = 0;   ga5 : number = 0; ga6 : number = 0; ga7:number=0; ga8:number=0;
  
  cs1: number = 0;  cs2 : number = 0;  cs3 : number = 0;  cs4 : number = 0;   cs5 : number = 0; cs6 : number = 0; cs7:number=0; cs8:number=0;
  op1: number = 0;  op2 : number = 0;  op3 : number = 0;  op4 : number = 0;   op5 : number = 0; op6 : number = 0; op7:number=0; op8:number=0;
  ib1: number = 0;  ib2 : number = 0;  ib3 : number = 0;  ib4 : number = 0;   ib5 : number = 0; ib6 : number = 0; ib7:number=0; ib8:number=0;
  il1: number = 0;  il2 : number = 0;  il3 : number = 0;  il4 : number = 0;   il5 : number = 0; il6 : number = 0; il7:number=0; il8:number=0;
  ti1: number = 0;  ti2 : number = 0;  ti3 : number = 0;  ti4 : number = 0;   ti5 : number = 0; ti6 : number = 0; ti7:number=0; ti8:number=0;
  
  on1: number = 0;  on2 : number = 0;  on3 : number = 0;  on4 : number = 0;   on5 : number = 0; on6 : number = 0; on7:number=0; on8:number=0;
  sb1: number = 0;  sb2 : number = 0;  sb3 : number = 0;  sb4 : number = 0;   sb5 : number = 0; sb6 : number = 0; sb7:number=0; sb8:number=0;
  ii1: number = 0;  ii2 : number = 0;  ii3 : number = 0;  ii4 : number = 0;   ii5 : number = 0; ii6 : number = 0; ii7:number=0; ii8:number=0;
  oi1: number = 0;  oi2 : number = 0;  oi3 : number = 0;  oi4 : number = 0;   oi5 : number = 0; oi6 : number = 0; oi7:number=0; oi8:number=0;
  ts1: number = 0;  ts2 : number = 0;  ts3 : number = 0;  ts4 : number = 0;   ts5 : number = 0; ts6 : number = 0; ts7:number=0; ts8:number=0;
 
  pb1: number = 0;  pb2 : number = 0;  pb3 : number = 0;  pb4 : number = 0;   pb5 : number = 0; pb6 : number = 0; pb7:number=0; pb8:number=0;
  pt1: number = 0;  pt2 : number = 0;  pt3 : number = 0;  pt4 : number = 0;   pt5 : number = 0; pt6 : number = 0; pt7:number=0; pt8:number=0;
  np1: number = 0;  np2 : number = 0;  np3 : number = 0;  np4 : number = 0;   np5 : number = 0; np6 : number = 0; np7:number=0; np8:number=0;
  dw1: number = 0;  dw2 : number = 0;  dw3 : number = 0;  dw4 : number = 0;   dw5 : number = 0; dw6 : number = 0; dw7:number=0; dw8:number=0;
  rp1: number = 0;  rp2 : number = 0;  rp3 : number = 0;  rp4 : number = 0;   rp5 : number = 0; rp6 : number = 0; rp7:number=0; rp8:number=0;

  th1: string; th2:string; th3:string; th4:string; th5:string; th6:string; th7:string; th8:string;

  constructor(private router: Router, private route:ActivatedRoute, private ds: DataService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
this.update();
this.getpfdata();
  }


  getcdata(){
    this.c_id =localStorage.getItem('c_id');

    this.ds.getcdata(this.c_id).subscribe(response=>{
      console.log(response);
      this.arr2=response;
      for(var i =0; i<=this.arr2.length; i++)
      {
        //console.log(response[i]['user_name']);
        if(this.arr2[i]['facility'] =='Floating')
        {
          this.router.navigateByUrl('/iscr/'+this.id);
        }else{
          this.router.navigateByUrl('/dscr/'+this.id);
        }


      }
    });

  }

  getpfdata(){
    this.c_id =localStorage.getItem('c_id');
    this.ds.getpfdata(this.c_id).subscribe(res=>{
      this.data=res;
console.log(res);

      if(this.data.a1 || this.data.a2 || this.data.a3 || this.data.a4 ||this.data.a5 || this.data.a6 || this.data.a7 || this.data.a8 ||
        this.data.b1 || this.data.b2 || this.data.b3 || this.data.b4 ||this.data.b5 || this.data.b6 || this.data.b7 || this.data.b8 ||
        this.data.t1 || this.data.t2 || this.data.t3 || this.data.t4 ||this.data.t5 || this.data.t6 || this.data.t7 || this.data.t8 ||
        this.data.r1 || this.data.r2 || this.data.r3 || this.data.r4 ||this.data.r5 || this.data.r6 || this.data.r7 || this.data.r8 ||
        this.data.os1 || this.data.os2 || this.data.os3 || this.data.os4 || this.data.os5 ||  this.data.os6 || this.data.os7 || this.data.os8 ||
        
        this.data.pf1 || this.data.pf2 || this.data.pf3 || this.data.pf4 || this.data.pf5 ||  this.data.pf6 || this.data.pf7 || this.data.pf8 ||
        this.data.dl1 || this.data.dl2 || this.data.dl3 || this.data.dl4 || this.data.dl5 ||  this.data.dl6 || this.data.dl7 || this.data.dl8 ||
        this.data.rt1 || this.data.rt2 || this.data.rt3 || this.data.rt4 || this.data.rt5 ||  this.data.rt6 || this.data.rt7 || this.data.rt8 ||
        this.data.dp1 || this.data.dp2 || this.data.dp3 || this.data.dp4 || this.data.dp5 ||  this.data.dp6 || this.data.dp7 || this.data.dp8 ||
        this.data.od1 || this.data.od2 || this.data.od3 || this.data.od4 || this.data.od5 ||  this.data.od6 || this.data.od7 || this.data.od8 ||

        this.data.st1 || this.data.st2 || this.data.st3 || this.data.st4 || this.data.st5 ||  this.data.st6 || this.data.st7 || this.data.st8 ||
        this.data.dc1 || this.data.dc2 || this.data.dc3 || this.data.dc4 || this.data.dc5 ||  this.data.dc6 || this.data.dc7 || this.data.dc8 ||
        this.data.ao1 || this.data.ao2 || this.data.ao3 || this.data.ao4 || this.data.ao5 ||  this.data.ao6 || this.data.ao7 || this.data.ao8 ||
        this.data.cp1 || this.data.cp2 || this.data.cp3 || this.data.cp4 || this.data.cp5 ||  this.data.cp6 || this.data.cp7 || this.data.cp8 ||
        this.data.ga1 || this.data.ga2 || this.data.ga3 || this.data.ga4 || this.data.ga5 ||  this.data.ga6 || this.data.ga7 || this.data.ga8 ||

        this.data.cs1 || this.data.cs2 || this.data.cs3 || this.data.cs4 || this.data.cs5 ||  this.data.cs6 || this.data.cs7 || this.data.cs8 ||
        this.data.op1 || this.data.op2 || this.data.op3 || this.data.op4 || this.data.op5 ||  this.data.op6 || this.data.op7 || this.data.op8 ||
        this.data.ib1 || this.data.ib2 || this.data.ib3 || this.data.ib4 || this.data.ib5 ||  this.data.ib6 || this.data.ib7 || this.data.ib8 ||
        this.data.il1 || this.data.il2 || this.data.il3 || this.data.il4 || this.data.il5 ||  this.data.il6 || this.data.il7 || this.data.il8 ||
        this.data.ti1 || this.data.ti2 || this.data.ti3 || this.data.ti4 || this.data.ti5 ||  this.data.ti6 || this.data.ti7 || this.data.ti8 ||
        this.data.on1 || this.data.on2 || this.data.on3 || this.data.on4 || this.data.on5 ||  this.data.on6 || this.data.on7 || this.data.on8 ||
        this.data.sb1 || this.data.sb2 || this.data.sb3 || this.data.sb4 || this.data.sb5 ||  this.data.sb6 || this.data.sb7 || this.data.sb8 ||
        this.data.ii1 || this.data.ii2 || this.data.ii3 || this.data.ii4 || this.data.ii5 ||  this.data.ii6 || this.data.ii7 || this.data.ii8 ||
        this.data.oi1 || this.data.oi2 || this.data.oi3 || this.data.oi4 || this.data.oi5 ||  this.data.oi6 || this.data.oi7 || this.data.oi8 ||
        this.data.ts1 || this.data.ts2 || this.data.ts3 || this.data.ts4 || this.data.ts5 ||  this.data.ts6 || this.data.ts7 || this.data.ts8 ||
        this.data.pb1 || this.data.pb2 || this.data.pb3 || this.data.pb4 || this.data.pb5 ||  this.data.pb6 || this.data.pb7 || this.data.pb8 ||
        this.data.pt1 || this.data.pt2 || this.data.pt3 || this.data.pt4 || this.data.pt5 ||  this.data.pt6 || this.data.pt7 || this.data.pt8 ||
        this.data.np1 || this.data.np2 || this.data.np3 || this.data.np4 || this.data.np5 ||  this.data.np6 || this.data.np7 || this.data.np8 ||
        this.data.dw1 || this.data.dw2 || this.data.dw3 || this.data.dw4 || this.data.dw5 ||  this.data.dw6 || this.data.dw7 || this.data.dw8 ||
       
        this.data.th1 || this.data.th2 || this.data.th3 || this.data.th4 ||this.data.th5 || this.data.th6 || this.data.th7 || this.data.th8 ||

        this.data.rp1 || this.data.rp2 || this.data.rp3 || this.data.rp4 || this.data.rp5 ||  this.data.rp6 || this.data.rp7 || this.data.rp8 

       
       
        ){
          this.th1 = this.data.th1; this.th8 = this.data.th8; this.th2 = this.data.th2; this.th3 = this.data.th3; this.th4 = this.data.th4; this.th5 = this.data.th5; this.th6 = this.data.th6;  this.th7 = this.data.th7;  

          this.a1=this.data.a1; this.a2=this.data.a2; this.a3=this.data.a3;   this.a4=this.data.a4;   this.a5=this.data.a5;    this.a6=this.data.a6;   this.a7=this.data.a7;   this.a8=this.data.a8;
      this.b1=this.data.b1;   this.b2=this.data.b2;   this.b3=this.data.b3;   this.b4=this.data.b4;   this.b5=this.data.b5;    this.b6=this.data.b6;   this.b7=this.data.b7;   this.b8=this.data.b8;
      this.t1=this.data.t1;   this.t2=this.data.t2;   this.t3=this.data.t3;   this.t4=this.data.t4;   this.t5=this.data.t5;    this.t6=this.data.t6;   this.t7=this.data.t7;   this.t8=this.data.t8;
      this.r1=this.data.r1;   this.r2=this.data.r2;   this.r3=this.data.r3;   this.r4=this.data.r4;   this.r5=this.data.r5;    this.r6=this.data.r6;   this.r7=this.data.r7;   this.r8=this.data.r8;
      this.os1=this.data.os1;   this.os2=this.data.os2;   this.os3=this.data.os3;   this.os4=this.data.os4;   this.os5=this.data.os5;    this.os6=this.data.os6;   this.os7=this.data.os7;   this.os8=this.data.os8;
      
      this.t1 =  Math.round((this.data.t1 + Number.EPSILON) * 100) / 100
      this.t2 =  Math.round((this.data.t2 + Number.EPSILON) * 100) / 100;
      this.t3 =  Math.round((this.data.t3 + Number.EPSILON) * 100) / 100;
      this.t4 =  Math.round((this.data.t4 + Number.EPSILON) * 100) / 100;
      this.t5 =  Math.round((this.data.t5 + Number.EPSILON) * 100) / 100;
      this.t6 =  Math.round((this.data.t6 + Number.EPSILON) * 100) / 100;
      this.t7 =  Math.round((this.data.t7 + Number.EPSILON) * 100) / 100;
      this.t8 =  Math.round((this.data.t8 + Number.EPSILON) * 100) / 100;
  
      this.pf1=this.data.pf1;   this.pf2=this.data.pf2;   this.pf3=this.data.pf3;   this.pf4=this.data.pf4;   this.pf5=this.data.pf5;    this.pf6=this.data.pf6;   this.pf7=this.data.pf7;   this.pf8=this.data.pf8;
      this.dl1=this.data.dl1;   this.dl2=this.data.dl2;   this.dl3=this.data.dl3;   this.dl4=this.data.dl4;   this.dl5=this.data.dl5;    this.dl6=this.data.dl6;   this.dl7=this.data.dl7;   this.dl8=this.data.dl8;
      this.rt1=this.data.rt1;   this.rt2=this.data.rt2;   this.rt3=this.data.rt3;   this.rt4=this.data.rt4;   this.rt5=this.data.rt5;    this.rt6=this.data.rt6;   this.rt7=this.data.rt7;   this.rt8=this.data.rt8;
      this.dp1=this.data.dp1;   this.dp2=this.data.dp2;   this.dp3=this.data.dp3;   this.dp4=this.data.dp4;   this.dp5=this.data.dp5;    this.dp6=this.data.dp6;   this.dp7=this.data.dp7;   this.dp8=this.data.dp8;
      this.od1=this.data.od1;   this.od2=this.data.od2;   this.od3=this.data.od3;   this.od4=this.data.od4;   this.od5=this.data.od5;    this.od6=this.data.od6;   this.od7=this.data.od7;   this.od8=this.data.od8;
      
      this.st1=this.data.st1;   this.st2=this.data.st2;   this.st3=this.data.st3;   this.st4=this.data.st4;   this.st5=this.data.st5;    this.st6=this.data.st6;   this.st7=this.data.st7;   this.st8=this.data.st8;
      this.dc1=this.data.dc1;   this.dc2=this.data.dc2;   this.dc3=this.data.dc3;   this.dc4=this.data.dc4;   this.dc5=this.data.dc5;    this.dc6=this.data.dc6;   this.dc7=this.data.dc7;   this.dc8=this.data.dc8;
      this.ao1=this.data.ao1;   this.ao2=this.data.ao2;   this.ao3=this.data.ao3;   this.ao4=this.data.ao4;   this.ao5=this.data.ao5;    this.ao6=this.data.ao6;   this.ao7=this.data.ao7;   this.ao8=this.data.ao8;
      this.cp1=this.data.cp1;   this.cp2=this.data.cp2;   this.cp3=this.data.cp3;   this.cp4=this.data.cp4;   this.cp5=this.data.cp5;    this.cp6=this.data.cp6;   this.cp7=this.data.cp7;   this.cp8=this.data.cp8;
      this.ga1=this.data.ga1;   this.ga2=this.data.ga2;   this.ga3=this.data.ga3;   this.ga4=this.data.ga4;   this.ga5=this.data.ga5;    this.ga6=this.data.ga6;   this.ga7=this.data.ga7;   this.ga8=this.data.ga8;
      
      this.cs1=this.data.cs1;   this.cs2=this.data.cs2;   this.cs3=this.data.cs3;   this.cs4=this.data.cs4;   this.cs5=this.data.cs5;    this.cs6=this.data.cs6;   this.cs7=this.data.cs7;   this.cs8=this.data.cs8;
      this.op1=this.data.op1;   this.op2=this.data.op2;   this.op3=this.data.op3;   this.op4=this.data.op4;   this.op5=this.data.op5;    this.op6=this.data.op6;   this.op7=this.data.op7;   this.op8=this.data.op8;
      this.ib1=this.data.ib1;   this.ib2=this.data.ib2;   this.ib3=this.data.ib3;   this.ib4=this.data.ib4;   this.ib5=this.data.ib5;    this.ib6=this.data.ib6;   this.ib7=this.data.ib7;   this.ib8=this.data.ib8;
      this.il1=this.data.il1;   this.il2=this.data.il2;   this.il3=this.data.il3;   this.il4=this.data.il4;   this.il5=this.data.il5;    this.il6=this.data.il6;   this.il7=this.data.il7;   this.il8=this.data.il8;
      this.ti1=this.data.ti1;   this.ti2=this.data.ti2;   this.ti3=this.data.ti3;   this.ti4=this.data.ti4;   this.ti5=this.data.ti5;    this.ti6=this.data.ti6;   this.ti7=this.data.ti7;   this.ti8=this.data.ti8;
     
      this.op1 =  Math.round((this.data.op1 + Number.EPSILON) * 100) / 100
      this.op2 =  Math.round((this.data.op2 + Number.EPSILON) * 100) / 100;
      this.op3 =  Math.round((this.data.op3 + Number.EPSILON) * 100) / 100;
      this.op4 =  Math.round((this.data.op4 + Number.EPSILON) * 100) / 100;
      this.op5 =  Math.round((this.data.op5 + Number.EPSILON) * 100) / 100;
      this.op6 =  Math.round((this.data.op6 + Number.EPSILON) * 100) / 100;
      this.op7 =  Math.round((this.data.op7 + Number.EPSILON) * 100) / 100;
      this.op8 =  Math.round((this.data.op8 + Number.EPSILON) * 100) / 100;


      this.on1=this.data.on1;   this.on2=this.data.on2;   this.on3=this.data.on3;   this.on4=this.data.on4;   this.on5=this.data.on5;    this.on6=this.data.on6;   this.on7=this.data.on7;   this.on8=this.data.on8;
      this.sb1=this.data.sb1;   this.sb2=this.data.sb2;   this.sb3=this.data.sb3;   this.sb4=this.data.sb4;   this.sb5=this.data.sb5;    this.sb6=this.data.sb6;   this.sb7=this.data.sb7;   this.sb8=this.data.sb8;
      this.ii1=this.data.ii1;   this.ii2=this.data.ii2;   this.ii3=this.data.ii3;   this.ii4=this.data.ii4;   this.ii5=this.data.ii5;    this.ii6=this.data.ii6;   this.ii7=this.data.ii7;   this.ii8=this.data.ii8;
      this.oi1=this.data.oi1;   this.oi2=this.data.oi2;   this.oi3=this.data.oi3;   this.oi4=this.data.oi4;   this.oi5=this.data.oi5;    this.oi6=this.data.oi6;   this.oi7=this.data.oi7;   this.oi8=this.data.oi8;
      this.ts1=this.data.ts1;   this.ts2=this.data.ts2;   this.ts3=this.data.ts3;   this.ts4=this.data.ts4;   this.ts5=this.data.ts5;    this.ts6=this.data.ts6;   this.ts7=this.data.ts7;   this.ts8=this.data.ts8;
     
      this.pb1=this.data.pb1;   this.pb2=this.data.pb2;   this.pb3=this.data.pb3;   this.pb4=this.data.pb4;   this.pb5=this.data.pb5;    this.pb6=this.data.pb6;   this.pb7=this.data.pb7;   this.pb8=this.data.pb8;
      this.pt1=this.data.pt1;   this.pt2=this.data.pt2;   this.pt3=this.data.pt3;   this.pt4=this.data.pt4;   this.pt5=this.data.pt5;    this.pt6=this.data.pt6;   this.pt7=this.data.pt7;   this.pt8=this.data.pt8;
      this.np1=this.data.np1;   this.np2=this.data.np2;   this.np3=this.data.np3;   this.np4=this.data.np4;   this.np5=this.data.np5;    this.np6=this.data.np6;   this.np7=this.data.np7;   this.np8=this.data.np8;
      this.dw1=this.data.dw1;   this.dw2=this.data.dw2;   this.dw3=this.data.dw3;   this.dw4=this.data.dw4;   this.dw5=this.data.dw5;    this.dw6=this.data.dw6;   this.dw7=this.data.dw7;   this.dw8=this.data.dw8;
      this.rp1=this.data.rp1;   this.rp2=this.data.rp2;   this.rp3=this.data.rp3;   this.rp4=this.data.rp4;   this.rp5=this.data.rp5;    this.rp6=this.data.rp6;   this.rp7=this.data.rp7;   this.rp8=this.data.rp8;
     
      this.rp1 =  Math.round((this.data.rp1 + Number.EPSILON) * 100) / 100
      this.rp2 =  Math.round((this.data.rp2 + Number.EPSILON) * 100) / 100;
      this.rp3 =  Math.round((this.data.rp3 + Number.EPSILON) * 100) / 100;
      this.rp4 =  Math.round((this.data.rp4 + Number.EPSILON) * 100) / 100;
      this.rp5 =  Math.round((this.data.rp5 + Number.EPSILON) * 100) / 100;
      this.rp6 =  Math.round((this.data.rp6 + Number.EPSILON) * 100) / 100;
      this.rp7 =  Math.round((this.data.rp7 + Number.EPSILON) * 100) / 100;
      this.rp8 =  Math.round((this.data.rp8 + Number.EPSILON) * 100) / 100;
    
      this.np1 =  Math.round((this.data.np1 + Number.EPSILON) * 100) / 100
      this.np2 =  Math.round((this.data.np2 + Number.EPSILON) * 100) / 100;
      this.np3 =  Math.round((this.data.np3 + Number.EPSILON) * 100) / 100;
      this.np4 =  Math.round((this.data.np4 + Number.EPSILON) * 100) / 100;
      this.np5 =  Math.round((this.data.np5 + Number.EPSILON) * 100) / 100;
      this.np6 =  Math.round((this.data.np6 + Number.EPSILON) * 100) / 100;
      this.np7 =  Math.round((this.data.np7 + Number.EPSILON) * 100) / 100;
      this.np8 =  Math.round((this.data.np8 + Number.EPSILON) * 100) / 100;

      this.pb1 =  Math.round((this.data.pb1 + Number.EPSILON) * 100) / 100
      this.pb2 =  Math.round((this.data.pb2 + Number.EPSILON) * 100) / 100;
      this.pb3 =  Math.round((this.data.pb3 + Number.EPSILON) * 100) / 100;
      this.pb4 =  Math.round((this.data.pb4 + Number.EPSILON) * 100) / 100;
      this.pb5 =  Math.round((this.data.pb5 + Number.EPSILON) * 100) / 100;
      this.pb6 =  Math.round((this.data.pb6 + Number.EPSILON) * 100) / 100;
      this.pb7 =  Math.round((this.data.pb7 + Number.EPSILON) * 100) / 100;
      this.pb8 =  Math.round((this.data.pb8 + Number.EPSILON) * 100) / 100;
    
    
    }else{
          this.a1=0;  this.a2=0; this.a3=0;  this.a4=0; this.a5=0;  this.a6=0; this.a7=0;  this.a8=0;
          this.b1=0;  this.b2=0; this.b3=0;  this.b4=0; this.b5=0;  this.b6=0; this.b7=0;  this.b8=0;
          this.r1=0;  this.r2=0; this.r3=0;  this.r4=0; this.r5=0;  this.r6=0; this.r7=0;  this.r8=0;

          this.t1=0;  this.t2=0; this.t3=0;  this.t4=0; this.t5=0;  this.t6=0; this.t7=0;  this.t8=0;
          this.os1=this.data.os1;   this.os2=this.data.os2;   this.os3=this.data.os3;   this.os4=this.data.os4;   this.os5=this.data.os5;    this.os6=this.data.os6;   this.os7=this.data.os7;   this.os8=this.data.os8;

          this.pf1=0;   this.pf2=0;   this.pf3=0;   this.pf4=0;   this.pf5=0;    this.pf6=0;   this.pf7=0;   this.pf8=0;
          this.dl1=0;   this.dl2=0;   this.dl3=0;   this.dl4=0;   this.dl5=0;    this.dl6=0;   this.dl7=0;   this.dl8=0;
          this.rt1=0;   this.rt2=0;   this.rt3=0;   this.rt4=0;   this.rt5=0;    this.rt6=0;   this.rt7=0;   this.rt8=0;
          this.dp1=0;   this.dp2=0;   this.dp3=0;   this.dp4=0;   this.dp5=0;    this.dp6=0;   this.dp7=0;   this.dp8=0;
          this.od1=0;   this.od2=0;   this.od3=0;   this.od4=0;   this.od5=0;    this.od6=0;   this.od7=0;   this.od8=0;
          this.st1=0;   this.st2=0;   this.st3=0;   this.st4=0;   this.st5=0;    this.st6=0;   this.st7=0;   this.st8=0;
          this.dc1=0;   this.dc2=0;   this.dc3=0;   this.dc4=0;   this.dc5=0;    this.dc6=0;   this.dc7=0;   this.dc8=0;
          this.ao1=0;   this.ao2=0;   this.ao3=0;   this.ao4=0;   this.ao5=0;    this.ao6=0;   this.ao7=0;   this.ao8=0;
          this.cp1=0;   this.cp2=0;   this.cp3=0;   this.cp4=0;   this.cp5=0;    this.cp6=0;   this.cp7=0;   this.cp8=0;
          this.ga1=0;   this.ga2=0;   this.ga3=0;   this.ga4=0;   this.ga5=0;    this.ga6=0;   this.ga7=0;   this.ga8=0;
          this.cs1=0;   this.cs2=0;   this.cs3=0;   this.cs4=0;   this.cs5=0;    this.cs6=0;   this.cs7=0;   this.cs8=0;
          this.op1=0;   this.op2=0;   this.op3=0;   this.op4=0;   this.op5=0;    this.op6=0;   this.op7=0;   this.op8=0;
          this.ib1=0;   this.ib2=0;   this.ib3=0;   this.ib4=0;   this.ib5=0;    this.ib6=0;   this.ib7=0;   this.ib8=0;
          this.il1=0;   this.il2=0;   this.il3=0;   this.il4=0;   this.il5=0;    this.il6=0;   this.il7=0;   this.il8=0;
          this.ti1=0;   this.ti2=0;   this.ti3=0;   this.ti4=0;   this.ti5=0;    this.ti6=0;   this.ti7=0;   this.ti8=0;
          this.on1=0;   this.on2=0;   this.on3=0;   this.on4=0;   this.on5=0;    this.on6=0;   this.on7=0;   this.on8=0;
          this.sb1=0;   this.sb2=0;   this.sb3=0;   this.sb4=0;   this.sb5=0;    this.sb6=0;   this.sb7=0;   this.sb8=0;
          this.ii1=0;   this.ii2=0;   this.ii3=0;   this.ii4=0;   this.ii5=0;    this.ii6=0;   this.ii7=0;   this.ii8=0;
          this.oi1=0;   this.oi2=0;   this.oi3=0;   this.oi4=0;   this.oi5=0;    this.oi6=0;   this.oi7=0;   this.oi8=0;
          this.ts1=0;   this.ts2=0;   this.ts3=0;   this.ts4=0;   this.ts5=0;    this.ts6=0;   this.ts7=0;   this.ts8=0;
          this.pb1=0;   this.pb2=0;   this.pb3=0;   this.pb4=0;   this.pb5=0;    this.pb6=0;   this.pb7=0;   this.pb8=0;
          this.pt1=0;   this.pt2=0;   this.pt3=0;   this.pt4=0;   this.pt5=0;    this.pt6=0;   this.pt7=0;   this.pt8=0;
          this.np1=0;   this.np2=0;   this.np3=0;   this.np4=0;   this.np5=0;    this.np6=0;   this.np7=0;   this.np8=0;
          this.dw1=0;   this.dw2=0;   this.dw3=0;   this.dw4=0;   this.dw5=0;    this.dw6=0;   this.dw7=0;   this.dw8=0;
          this.rp1=0;   this.rp2=0;   this.rp3=0;   this.rp4=0;   this.rp5=0;    this.rp6=0;   this.rp7=0;   this.rp8=0;
    
        }
      
    });
  }

  savedata=(val) =>{
    this.c_id =localStorage.getItem('c_id');
    var jsdata = JSON.stringify(val);
    var fd = new FormData();
    fd.append("id",this.id );
    fd.append("action_id",'4' );
fd.append("a1",jsdata);
fd.append("c_id",this.c_id);
this.ds.addpf(fd).subscribe((data)=>{
if(data == 1){
  this.getcdata();
  //console.log("added Success");
 // this.router.navigateByUrl('/dscr/'+this.id);
}});

  }

  update(){
    this.t1 =this.a1 + this.b1;
    this.t2 =this.a2 + this.b2   ;
    this.t3 =this.a3 + this.b3  ;
    this.t4 =this.a4 + this.b4  ;
    this.t5 =this.a5 + this.b5   ;
    this.t6 =this.a6 + this.b6 ;
    this.t7 =this.a7 + this.b7  ;
    this.t8 =this.a8 + this.b8 ;

    this.t1 =  Math.round((this.t1 + Number.EPSILON) * 100) / 100
    this.t2 =  Math.round((this.t2 + Number.EPSILON) * 100) / 100;
    this.t3 =  Math.round((this.t3 + Number.EPSILON) * 100) / 100;
    this.t4 =  Math.round((this.t4 + Number.EPSILON) * 100) / 100;
    this.t5 =  Math.round((this.t5 + Number.EPSILON) * 100) / 100;
    this.t6 =  Math.round((this.t6 + Number.EPSILON) * 100) / 100;
    this.t7 =  Math.round((this.t7 + Number.EPSILON) * 100) / 100;
    this.t8 =  Math.round((this.t8 + Number.EPSILON) * 100) / 100;

    this.rp1 =this.np1 - this.dw1;
    this.rp2 =this.np2 - this.dw2;
    this.rp3 =this.np3 - this.dw3;
    this.rp4 =this.np4 - this.dw4;
    this.rp5 =this.np5 - this.dw5;
    this.rp6 =this.np6 - this.dw6;
    this.rp7 =this.np7 - this.dw7;
    this.rp8 =this.np8 - this.dw8;

    this.cs1 =this.cp1 + this.ga1;
    this.cs2 =this.cp2 + this.ga2;
    this.cs3 =this.cp3 + this.ga3;
    this.cs4 =this.cp4 + this.ga4;
    this.cs5 =this.cp5 + this.ga5;
    this.cs6 =this.cp6 + this.ga6;
    this.cs7 =this.cp7 + this.ga7;
    this.cs8 =this.cp8 + this.ga8;

    this.ti1 =this.ib1 + this.il1;
    this.ti2 =this.ib2 + this.il2;
    this.ti3 =this.ib3 + this.il3;
    this.ti4 =this.ib4 + this.il4;
    this.ti5 =this.ib5 + this.il5;
    this.ti6 =this.ib6 + this.il6;
    this.ti7 =this.ib7 + this.il7;
    this.ti8 =this.ib8 + this.il8;

    this.sb1 =this.ti1 + this.on1;
    this.sb2 =this.ti2 + this.on2;
    this.sb3 =this.ti3 + this.on3;
    this.sb4 =this.ti4 + this.on4;
    this.sb5 =this.ti5 + this.on5;
    this.sb6 =this.ti6 + this.on6;
    this.sb7 =this.ti7 + this.on7;
    this.sb8 =this.ti8 + this.on8;

    this.ts1 =this.ii1 + this.oi1;
    this.ts2 =this.ii2 + this.oi2;
    this.ts3 =this.ii3 + this.oi3;
    this.ts4 =this.ii4 + this.oi4;
    this.ts5 =this.ii5 + this.oi5;
    this.ts6 =this.ii6 + this.oi6;
    this.ts7 =this.ii7 + this.oi7;
    this.ts8 =this.ii8 + this.oi8;

    this.op1 =this.t1 - this.cs1;
    this.op2 =this.t2 - this.cs2;
    this.op3 =this.t3 - this.cs3;
    this.op4 =this.t4 - this.cs4;
    this.op5 =this.t5 - this.cs5;
    this.op6 =this.t6 - this.cs6;
    this.op7 =this.t7 - this.cs7;
    this.op8 =this.t8 - this.cs8;

    this.np1 =this.pb1 - this.pt1;
    this.np2 =this.pb2 - this.pt2;
    this.np3 =this.pb3 - this.pt3;
    this.np4 =this.pb4 - this.pt4;
    this.np5 =this.pb5 - this.pt5;
    this.np6 =this.pb6 - this.pt6;
    this.np7 =this.pb7 - this.pt7;
    this.np8 =this.pb8 - this.pt8;

    this.cp1 =this.st1 + this.ao1 - this.dc1;
    this.cp2 =this.st2 + this.ao2 - this.dc2;
    this.cp3 =this.st3 + this.ao3 - this.dc3;
    this.cp4 =this.st4 + this.ao4 - this.dc4;
    this.cp5 =this.st5 + this.ao5 - this.dc5;
    this.cp6 =this.st6 + this.ao6 - this.dc6;
    this.cp7 =this.st7 + this.ao7 - this.dc7;
    this.cp8 =this.st8 + this.ao8 - this.dc8;

    this.pb1 =this.op1 - this.sb1 + this.ts1;
    this.pb2 =this.op2 - this.sb2 + this.ts2;
    this.pb3 =this.op3 - this.sb3 + this.ts3;
    this.pb4 =this.op4 - this.sb4 + this.ts4;
    this.pb5 =this.op5 - this.sb5 + this.ts5;
    this.pb6 =this.op6 - this.sb6 + this.ts6;
    this.pb7 =this.op7 - this.sb7 + this.ts7;
    this.pb8 =this.op8 - this.sb8 + this.ts8;


    this.st1 =this.r1 + this.os1 + this.pf1 + this.dl1 + this.rt1 + this.dp1 + this.od1;
    this.st2 =this.r2 + this.os2 + this.pf2 + this.dl2 + this.rt2 + this.dp2 + this.od2   ;
    this.st3 =this.r3 + this.os3 + this.pf3 + this.dl3 + this.rt3 + this.dp3 + this.od3  ;
    this.st4 =this.r4 + this.os4 + this.pf4 + this.dl4 + this.rt4 + this.dp4 + this.od4  ;
    this.st5 =this.r5 + this.os5 + this.pf5 + this.dl5 + this.rt5 + this.dp5 + this.od5   ;
    this.st6 =this.r6 + this.os6 + this.pf6 + this.dl6 + this.rt6 + this.dp6 + this.od6 ;
    this.st7 =this.r7 + this.os7 + this.pf7 + this.dl7 + this.rt7 + this.dp7 + this.od7  ;
    this.st8 =this.r8 + this.os8 + this.pf8 + this.dl8 + this.rt8 + this.dp8 + this.od8 ;
  }


  printSheet = () => {
    var head = [];
    var body = [];

    if (this.id == 5) {
      head = [['', '', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026']]
    } else if (this.id == 4) {
      head = [['', '', '2019', '2020', '2021', '2022', '2023', '2024', '2025']]
    } else if (this.id == 3) {
      head = [['', '', '2019', '2020', '2021', '2022', '2023', '2024']]
    } else if (this.id == 2) {
      head = [['', '', '2019', '2020', '2021', '2022', '2023']]
    } else {
      head = [['', '', '2019', '2020', '2021', '2022']]
    }

    if (this.id == 5) {
      body = [
        ['', 'Sales / Revenue', '', '', '', '', '', '', '', ''],
        ['a', 'Domestic', this.a1, this.a2, this.a3, this.a4, this.a5, this.a6, this.a7, this.a8],
        ['b', 'Exports', this.b1, this.b2, this.b3, this.b4, this.b5, this.b6, this.b7, this.b8],
        ['', 'Total Net Sales', this.t1, this.t2, this.t3, this.t4, this.t5, this.t6, this.t7, this.t8],
        ['', 'Cost of Sales', '', '', '', '', '', '', '', ''],
        ['a', 'Raw Material / Stocks Purchased', this.r1, this.r2, this.r3, this.r4, this.r5, this.r6, this.r7, this.r8],
        ['b', 'Other Spares', this.os1, this.os2, this.os3, this.os4, this.os5, this.os6, this.os7, this.os8],
        ['c', 'Power & Fuel', this.pf1, this.pf2, this.pf3, this.pf4, this.pf5, this.pf6, this.pf7, this.pf8],
        ['d', 'Direct Labour Charges', this.dl1, this.dl2, this.dl3, this.dl4, this.dl5, this.dl6, this.dl7, this.dl8],
        ['e', 'Rentals (Factory and Godowns)', this.rt1, this.rt2, this.rt3, this.rt4, this.rt5, this.rt6, this.rt7, this.rt8],
        ['f', 'Depreciation', this.dp1, this.dp2, this.dp3, this.dp4, this.dp5, this.dp6, this.dp7, this.dp8],
        ['g', 'Other Direct Expenses', this.od1, this.od2, this.od3, this.od4, this.od5, this.od6, this.od7, this.od8],
        ['', 'Sub-Total', this.st1, this.st2, this.st3, this.st4, this.st5, this.st6, this.st7, this.st8],
        ['', 'Add : Opening stocks', this.ao1, this.ao2, this.ao3, this.ao4, this.ao5, this.ao6, this.ao7, this.ao8],
        ['', 'Deduct : Closing Stocks', this.dc1, this.dc2, this.dc3, this.dc4, this.dc5, this.dc6, this.dc7, this.dc8],
        ['', 'Cost of Production', this.cp1, this.cp2, this.cp3, this.cp4, this.cp5, this.cp6, this.cp7, this.cp8],
        ['', 'General and Admn. Expneses', this.ga1, this.ga2, this.ga3, this.ga4, this.ga5, this.ga6, this.ga7, this.ga8],
        ['', 'Cost of Sales', this.cs1, this.cs2, this.cs3, this.cs4, this.cs5, this.cs6, this.cs7, this.cs8],
        ['', 'Operating Profit', this.op1, this.op2, this.op3, this.op4, this.op5, this.op6, this.op7, this.op8],
        ['', 'Non-Operating Expenses', '', '', '', '', '', '', '', ''],
        ['a', 'Interest on Bank Borrowings', this.ib1, this.ib2, this.ib3, this.ib4, this.ib5, this.ib6, this.ib7, this.ib8],
        ['b', 'Interest on Loans from Others', this.il1, this.il2, this.il3, this.il4, this.il5, this.il6, this.il7, this.il8],
        ['', 'Total Interest', this.ti1, this.ti2, this.ti3, this.ti4, this.ti5, this.ti6, this.ti7, this.ti8],
        ['c', 'Other Non-Operating Expenses', this.on1, this.on2, this.on3, this.on4, this.on5, this.on6, this.on7, this.on8],
        ['', 'Sub-Total', this.sb1, this.sb2, this.sb3, this.sb4, this.sb5, this.sb6, this.sb7, this.sb8],
        ['', 'Non-Operating Income', '', '', '', '', '', '', '', ''],
        ['a', 'Interest Income', this.ii1, this.ii2, this.ii3, this.ii4, this.ii5, this.ii6, this.ii7, this.ii8],
        ['b', 'Other Non-Operating Income', this.oi1, this.oi2, this.oi3, this.oi4, this.oi5, this.oi6, this.oi7, this.oi8],
        ['', 'Sub-Total', this.ts1, this.ts2, this.ts3, this.ts4, this.ts5, this.ts6, this.ts7, this.ts8],
        ['', 'Profit before Taxes', this.pb1, this.pb2, this.pb3, this.pb4, this.pb5, this.pb6, this.pb7, this.pb8],
        ['', 'Provision for taxation', this.pt1, this.pt2, this.pt3, this.pt4, this.pt5, this.pt6, this.pt7, this.pt8],
        ['', 'Net Profit', this.np1, this.np2, this.np3, this.np4, this.np5, this.np6, this.np7, this.np8],
        ['a', 'Dividend / Withdrawals', this.dw1, this.dw2, this.dw3, this.dw4, this.dw5, this.dw6, this.dw7, this.dw8],
        ['', 'Retained profit', this.rp1, this.rp2, this.rp3, this.rp4, this.rp5, this.rp6, this.rp7, this.rp8],
      ]      
    } else if (this.id == 4) {
      body = [
        ['', 'Sales / Revenue', '', '', '', '', '', '', '', ''],
        ['a', 'Domestic', this.a1, this.a2, this.a3, this.a4, this.a5, this.a6, this.a7],
        ['b', 'Exports', this.b1, this.b2, this.b3, this.b4, this.b5, this.b6, this.b7],
        ['', 'Total Net Sales', this.t1, this.t2, this.t3, this.t4, this.t5, this.t6, this.t7],
        ['', 'Cost of Sales', '', '', '', '', '', '', '', ''],
        ['a', 'Raw Material / Stocks Purchased', this.r1, this.r2, this.r3, this.r4, this.r5, this.r6, this.r7],
        ['b', 'Other Spares', this.os1, this.os2, this.os3, this.os4, this.os5, this.os6, this.os7],
        ['c', 'Power & Fuel', this.pf1, this.pf2, this.pf3, this.pf4, this.pf5, this.pf6, this.pf7],
        ['d', 'Direct Labour Charges', this.dl1, this.dl2, this.dl3, this.dl4, this.dl5, this.dl6, this.dl7],
        ['e', 'Rentals (Factory and Godowns)', this.rt1, this.rt2, this.rt3, this.rt4, this.rt5, this.rt6, this.rt7],
        ['f', 'Depreciation', this.dp1, this.dp2, this.dp3, this.dp4, this.dp5, this.dp6, this.dp7],
        ['g', 'Other Direct Expenses', this.od1, this.od2, this.od3, this.od4, this.od5, this.od6, this.od7],
        ['', 'Sub-Total', this.st1, this.st2, this.st3, this.st4, this.st5, this.st6, this.st7],
        ['', 'Add : Opening stocks', this.ao1, this.ao2, this.ao3, this.ao4, this.ao5, this.ao6, this.ao7],
        ['', 'Deduct : Closing Stocks', this.dc1, this.dc2, this.dc3, this.dc4, this.dc5, this.dc6, this.dc7],
        ['', 'Cost of Production', this.cp1, this.cp2, this.cp3, this.cp4, this.cp5, this.cp6, this.cp7],
        ['', 'General and Admn. Expneses', this.ga1, this.ga2, this.ga3, this.ga4, this.ga5, this.ga6, this.ga7],
        ['', 'Cost of Sales', this.cs1, this.cs2, this.cs3, this.cs4, this.cs5, this.cs6, this.cs7],
        ['', 'Operating Profit', this.op1, this.op2, this.op3, this.op4, this.op5, this.op6, this.op7],
        ['', 'Non-Operating Expenses', '', '', '', '', '', '', '', ''],
        ['a', 'Interest on Bank Borrowings', this.ib1, this.ib2, this.ib3, this.ib4, this.ib5, this.ib6, this.ib7],
        ['b', 'Interest on Loans from Others', this.il1, this.il2, this.il3, this.il4, this.il5, this.il6, this.il7],
        ['', 'Total Interest', this.ti1, this.ti2, this.ti3, this.ti4, this.ti5, this.ti6, this.ti7],
        ['c', 'Other Non-Operating Expenses', this.on1, this.on2, this.on3, this.on4, this.on5, this.on6, this.on7],
        ['', 'Sub-Total', this.sb1, this.sb2, this.sb3, this.sb4, this.sb5, this.sb6, this.sb7],
        ['', 'Non-Operating Income', '', '', '', '', '', '', '', ''],
        ['a', 'Interest Income', this.ii1, this.ii2, this.ii3, this.ii4, this.ii5, this.ii6, this.ii7],
        ['b', 'Other Non-Operating Income', this.oi1, this.oi2, this.oi3, this.oi4, this.oi5, this.oi6, this.oi7],
        ['', 'Sub-Total', this.ts1, this.ts2, this.ts3, this.ts4, this.ts5, this.ts6, this.ts7],
        ['', 'Profit before Taxes', this.pb1, this.pb2, this.pb3, this.pb4, this.pb5, this.pb6, this.pb7],
        ['', 'Provision for taxation', this.pt1, this.pt2, this.pt3, this.pt4, this.pt5, this.pt6, this.pt7],
        ['', 'Net Profit', this.np1, this.np2, this.np3, this.np4, this.np5, this.np6, this.np7],
        ['a', 'Dividend / Withdrawals', this.dw1, this.dw2, this.dw3, this.dw4, this.dw5, this.dw6, this.dw7],
        ['', 'Retained profit', this.rp1, this.rp2, this.rp3, this.rp4, this.rp5, this.rp6, this.rp7],
      ]   
    } else if (this.id == 3) {
      body = [
        ['', 'Sales / Revenue', '', '', '', '', '', '', '', ''],
        ['a', 'Domestic', this.a1, this.a2, this.a3, this.a4, this.a5, this.a6],
        ['b', 'Exports', this.b1, this.b2, this.b3, this.b4, this.b5, this.b6],
        ['', 'Total Net Sales', this.t1, this.t2, this.t3, this.t4, this.t5, this.t6],
        ['', 'Cost of Sales', '', '', '', '', '', '', '', ''],
        ['a', 'Raw Material / Stocks Purchased', this.r1, this.r2, this.r3, this.r4, this.r5, this.r6],
        ['b', 'Other Spares', this.os1, this.os2, this.os3, this.os4, this.os5, this.os6],
        ['c', 'Power & Fuel', this.pf1, this.pf2, this.pf3, this.pf4, this.pf5, this.pf6],
        ['d', 'Direct Labour Charges', this.dl1, this.dl2, this.dl3, this.dl4, this.dl5, this.dl6],
        ['e', 'Rentals (Factory and Godowns)', this.rt1, this.rt2, this.rt3, this.rt4, this.rt5, this.rt6],
        ['f', 'Depreciation', this.dp1, this.dp2, this.dp3, this.dp4, this.dp5, this.dp6],
        ['g', 'Other Direct Expenses', this.od1, this.od2, this.od3, this.od4, this.od5, this.od6],
        ['', 'Sub-Total', this.st1, this.st2, this.st3, this.st4, this.st5, this.st6],
        ['', 'Add : Opening stocks', this.ao1, this.ao2, this.ao3, this.ao4, this.ao5, this.ao6],
        ['', 'Deduct : Closing Stocks', this.dc1, this.dc2, this.dc3, this.dc4, this.dc5, this.dc6],
        ['', 'Cost of Production', this.cp1, this.cp2, this.cp3, this.cp4, this.cp5, this.cp6],
        ['', 'General and Admn. Expneses', this.ga1, this.ga2, this.ga3, this.ga4, this.ga5, this.ga6],
        ['', 'Cost of Sales', this.cs1, this.cs2, this.cs3, this.cs4, this.cs5, this.cs6],
        ['', 'Operating Profit', this.op1, this.op2, this.op3, this.op4, this.op5, this.op6],
        ['', 'Non-Operating Expenses', '', '', '', '', '', '', '', ''],
        ['a', 'Interest on Bank Borrowings', this.ib1, this.ib2, this.ib3, this.ib4, this.ib5, this.ib6],
        ['b', 'Interest on Loans from Others', this.il1, this.il2, this.il3, this.il4, this.il5, this.il6],
        ['', 'Total Interest', this.ti1, this.ti2, this.ti3, this.ti4, this.ti5, this.ti6],
        ['c', 'Other Non-Operating Expenses', this.on1, this.on2, this.on3, this.on4, this.on5, this.on6],
        ['', 'Sub-Total', this.sb1, this.sb2, this.sb3, this.sb4, this.sb5, this.sb6],
        ['', 'Non-Operating Income', '', '', '', '', '', '', '', ''],
        ['a', 'Interest Income', this.ii1, this.ii2, this.ii3, this.ii4, this.ii5, this.ii6],
        ['b', 'Other Non-Operating Income', this.oi1, this.oi2, this.oi3, this.oi4, this.oi5, this.oi6],
        ['', 'Sub-Total', this.ts1, this.ts2, this.ts3, this.ts4, this.ts5, this.ts6],
        ['', 'Profit before Taxes', this.pb1, this.pb2, this.pb3, this.pb4, this.pb5, this.pb6],
        ['', 'Provision for taxation', this.pt1, this.pt2, this.pt3, this.pt4, this.pt5, this.pt6],
        ['', 'Net Profit', this.np1, this.np2, this.np3, this.np4, this.np5, this.np6],
        ['a', 'Dividend / Withdrawals', this.dw1, this.dw2, this.dw3, this.dw4, this.dw5, this.dw6],
        ['', 'Retained profit', this.rp1, this.rp2, this.rp3, this.rp4, this.rp5, this.rp6],
      ]   
    } else if (this.id == 2) {
      body = [
        ['', 'Sales / Revenue', '', '', '', '', '', '', '', ''],
        ['a', 'Domestic', this.a1, this.a2, this.a3, this.a4, this.a5],
        ['b', 'Exports', this.b1, this.b2, this.b3, this.b4, this.b5],
        ['', 'Total Net Sales', this.t1, this.t2, this.t3, this.t4, this.t5],
        ['', 'Cost of Sales', '', '', '', '', '', '', '', ''],
        ['a', 'Raw Material / Stocks Purchased', this.r1, this.r2, this.r3, this.r4, this.r5],
        ['b', 'Other Spares', this.os1, this.os2, this.os3, this.os4, this.os5],
        ['c', 'Power & Fuel', this.pf1, this.pf2, this.pf3, this.pf4, this.pf5],
        ['d', 'Direct Labour Charges', this.dl1, this.dl2, this.dl3, this.dl4, this.dl5],
        ['e', 'Rentals (Factory and Godowns)', this.rt1, this.rt2, this.rt3, this.rt4, this.rt5],
        ['f', 'Depreciation', this.dp1, this.dp2, this.dp3, this.dp4, this.dp5],
        ['g', 'Other Direct Expenses', this.od1, this.od2, this.od3, this.od4, this.od5],
        ['', 'Sub-Total', this.st1, this.st2, this.st3, this.st4, this.st5],
        ['', 'Add : Opening stocks', this.ao1, this.ao2, this.ao3, this.ao4, this.ao5],
        ['', 'Deduct : Closing Stocks', this.dc1, this.dc2, this.dc3, this.dc4, this.dc5],
        ['', 'Cost of Production', this.cp1, this.cp2, this.cp3, this.cp4, this.cp5],
        ['', 'General and Admn. Expneses', this.ga1, this.ga2, this.ga3, this.ga4, this.ga5],
        ['', 'Cost of Sales', this.cs1, this.cs2, this.cs3, this.cs4, this.cs5],
        ['', 'Operating Profit', this.op1, this.op2, this.op3, this.op4, this.op5],
        ['', 'Non-Operating Expenses', '', '', '', '', '', '', '', ''],
        ['a', 'Interest on Bank Borrowings', this.ib1, this.ib2, this.ib3, this.ib4, this.ib5],
        ['b', 'Interest on Loans from Others', this.il1, this.il2, this.il3, this.il4, this.il5],
        ['', 'Total Interest', this.ti1, this.ti2, this.ti3, this.ti4, this.ti5],
        ['c', 'Other Non-Operating Expenses', this.on1, this.on2, this.on3, this.on4, this.on5],
        ['', 'Sub-Total', this.sb1, this.sb2, this.sb3, this.sb4, this.sb5],
        ['', 'Non-Operating Income', '', '', '', '', '', '', '', ''],
        ['a', 'Interest Income', this.ii1, this.ii2, this.ii3, this.ii4, this.ii5],
        ['b', 'Other Non-Operating Income', this.oi1, this.oi2, this.oi3, this.oi4, this.oi5],
        ['', 'Sub-Total', this.ts1, this.ts2, this.ts3, this.ts4, this.ts5],
        ['', 'Profit before Taxes', this.pb1, this.pb2, this.pb3, this.pb4, this.pb5],
        ['', 'Provision for taxation', this.pt1, this.pt2, this.pt3, this.pt4, this.pt5],
        ['', 'Net Profit', this.np1, this.np2, this.np3, this.np4, this.np5],
        ['a', 'Dividend / Withdrawals', this.dw1, this.dw2, this.dw3, this.dw4, this.dw5],
        ['', 'Retained profit', this.rp1, this.rp2, this.rp3, this.rp4, this.rp5],
      ]   
    } else {
      body = [
        ['', 'Sales / Revenue', '', '', '', '', '', '', '', ''],
        ['a', 'Domestic', this.a1, this.a2, this.a3, this.a4],
        ['b', 'Exports', this.b1, this.b2, this.b3, this.b4],
        ['', 'Total Net Sales', this.t1, this.t2, this.t3, this.t4],
        ['', 'Cost of Sales', '', '', '', '', '', '', '', ''],
        ['a', 'Raw Material / Stocks Purchased', this.r1, this.r2, this.r3, this.r4],
        ['b', 'Other Spares', this.os1, this.os2, this.os3, this.os4],
        ['c', 'Power & Fuel', this.pf1, this.pf2, this.pf3, this.pf4],
        ['d', 'Direct Labour Charges', this.dl1, this.dl2, this.dl3, this.dl4],
        ['e', 'Rentals (Factory and Godowns)', this.rt1, this.rt2, this.rt3, this.rt4],
        ['f', 'Depreciation', this.dp1, this.dp2, this.dp3, this.dp4],
        ['g', 'Other Direct Expenses', this.od1, this.od2, this.od3, this.od4],
        ['', 'Sub-Total', this.st1, this.st2, this.st3, this.st4],
        ['', 'Add : Opening stocks', this.ao1, this.ao2, this.ao3, this.ao4],
        ['', 'Deduct : Closing Stocks', this.dc1, this.dc2, this.dc3, this.dc4],
        ['', 'Cost of Production', this.cp1, this.cp2, this.cp3, this.cp4],
        ['', 'General and Admn. Expneses', this.ga1, this.ga2, this.ga3, this.ga4],
        ['', 'Cost of Sales', this.cs1, this.cs2, this.cs3, this.cs4],
        ['', 'Operating Profit', this.op1, this.op2, this.op3, this.op4],
        ['', 'Non-Operating Expenses', '', '', '', '', '', '', '', ''],
        ['a', 'Interest on Bank Borrowings', this.ib1, this.ib2, this.ib3, this.ib4],
        ['b', 'Interest on Loans from Others', this.il1, this.il2, this.il3, this.il4],
        ['', 'Total Interest', this.ti1, this.ti2, this.ti3, this.ti4],
        ['c', 'Other Non-Operating Expenses', this.on1, this.on2, this.on3, this.on4],
        ['', 'Sub-Total', this.sb1, this.sb2, this.sb3, this.sb4],
        ['', 'Non-Operating Income', '', '', '', '', '', '', '', ''],
        ['a', 'Interest Income', this.ii1, this.ii2, this.ii3, this.ii4],
        ['b', 'Other Non-Operating Income', this.oi1, this.oi2, this.oi3, this.oi4],
        ['', 'Sub-Total', this.ts1, this.ts2, this.ts3, this.ts4],
        ['', 'Profit before Taxes', this.pb1, this.pb2, this.pb3, this.pb4],
        ['', 'Provision for taxation', this.pt1, this.pt2, this.pt3, this.pt4],
        ['', 'Net Profit', this.np1, this.np2, this.np3, this.np4],
        ['a', 'Dividend / Withdrawals', this.dw1, this.dw2, this.dw3, this.dw4],
        ['', 'Retained profit', this.rp1, this.rp2, this.rp3, this.rp4],
      ]   
    }

    let TotalCell = parseInt(this.id) + 3;
    console.log(TotalCell);
    
    var doc = new jsPDF()
    doc.text('Profit and Loss Account',80,10)
    doc.setFontSize(9);
    doc.text('Kyats in Mill', 178, 10)
    // doc.autoTable({theme:'grid',head :head , body: body , styles: {overflow: 'linebreak',fontSize: 5}}) // one page
    // doc.autoTable({ theme: 'grid', head: head, body: body })
    autoTable(doc, { theme: 'grid', head: head, body: body })
    // Save
    doc.save("ProfitAndLoss.pdf");
  }


}
