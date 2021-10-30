import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from  'jspdf-autotable';
@Component({
  selector: 'app-iscr',
  templateUrl: './iscr.component.html',
  styleUrls: ['./iscr.component.css']
})
export class IscrComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router, private ds: DataService) { }
  id:any;
  c_id:any;
  data:any;
  result:any;
  a1: number = 0;  a2 : number = 0;  a3 : number = 0;  a4 : number = 0;   a5 : number = 0; a6 : number = 0; a7:number=0; a8:number=0;
  co1: number = 0;  co2 : number = 0;  co3 : number = 0;  co4 : number = 0;   co5 : number = 0; co6 : number = 0; co7:number=0; co8:number=0; co9:number=0;
  dp1: number = 0;  dp2 : number = 0;  dp3 : number = 0;  dp4 : number = 0;   dp5 : number = 0; dp6 : number = 0; dp7:number=0; dp8:number=0; dp9:number=0;
  in1: number = 0;  in2 : number = 0;  in3 : number = 0;  in4 : number = 0;   in5 : number = 0; in6 : number = 0; in7:number=0; in8:number=0; in9:number=0;
  ci1: number = 0;  ci2 : number = 0;  ci3 : number = 0;  ci4 : number = 0;   ci5 : number = 0; ci6 : number = 0; ci7:number=0; ci8:number=0; ci9:number=0;
  it1: number = 0;  it2 : number = 0;  it3 : number = 0;  it4 : number = 0;   it5 : number = 0; it6 : number = 0; it7:number=0; it8:number=0; it9:number=0;
  ds1: number = 0;  ds2 : number = 0;  ds3 : number = 0;  ds4 : number = 0;   ds5 : number = 0; ds6 : number = 0; ds7:number=0; ds8:number=0; ds9:number=0;
  ai1: number = 0;  ai2 : number = 0;  ai3 : number = 0;  ai4 : number = 0;   ai5 : number = 0; ai6 : number = 0; ai7:number=0; ai8:number=0; ai9:number=0;
ta1:number=0; ta2:number=0; ta3:number=0; ta4:number=0; t5:number=0;
tc1:number=0; tc2:number=0; tc3:number=0; tc4:number=0; tc5:number=0;
tt1:number=0; tt2:number=0; tt3:number=0; tt4:number=0; tt5:number=0;
ti1:number=0; ti2:number=0; ti3:number=0; ti4:number=0; ti5:number=0;
tn1:number=0; tn2:number=0; tn3:number=0; tn4:number=0; tn5:number=0;
tp1:number=0; tp2:number=0; tp3:number=0; tp4:number=0; tp5:number=0;


  ngOnInit(): void {
    this.update();
    this.getpfdata();
    this.getdata();

    this.id =this.route.snapshot.params['id'];
  }

  next(){

    this.router.navigateByUrl('/kfr/'+this.id);

  }
  savedata=(val) =>{
    this.c_id =localStorage.getItem('c_id');
    var jsdata = JSON.stringify(val);
    var fd = new FormData();
    fd.append("id",this.id );
    fd.append("action_id",'6' );
fd.append("is",jsdata);
fd.append("c_id",this.c_id);
this.ds.addis(fd).subscribe((data)=>{
if(data == 1){
  //this.getcdata();
  //console.log("aided Success");
  this.router.navigateByUrl('/kfr/'+this.id);
}});

  }

  getpfdata(){
    this.c_id =localStorage.getItem('c_id');
    this.ds.getpfdata(this.c_id).subscribe(res=>{
      this.data=res;
     // console.log(res);
      // this.a1=this.data.np1;  this.a2=this.data.np2;
       this.a3=this.data.np3; 
       this.a4=this.data.np4; this.a5=this.data.np5;  this.a6=this.data.np6; this.a7=this.data.np7;  this.a8=this.data.np8; 
      // this.dp1=this.data.dp1;   this.dp2=this.data.dp2;   
      this.dp3=this.data.dp3;   
      this.dp4=this.data.dp4;   this.dp5=this.data.dp5;    this.dp6=this.data.dp6;   this.dp7=this.data.dp7;   this.dp8=this.data.dp8;
      this.in1=this.data.ti1;   this.in2=this.data.ti2;   this.in3=this.data.ti3;   this.in4=this.data.ti4;   this.in5=this.data.ti5;    this.in6=this.data.ti6;   this.in7=this.data.ti7;   this.in8=this.data.ti8;
      // this.ci1= this.a1 + this.dp1 + this.in1;
      // this.ci2= this.a2 + this.dp2 + this.in2;
      this.ci3= this.a3 + this.dp3 + this.in3;
      this.ci4= this.a4 + this.dp4 + this.in4;
      this.ci5= this.a5 + this.dp5 + this.in5;
      this.ci6= this.a6 + this.dp6 + this.in6;
      this.ci7= this.a7 + this.dp7 + this.in7;
      this.ci8= this.a8 + this.dp8 + this.in8;
      this.t5=this.a1 + this.a2 + this.a3 + this.a4 + this.a5 + this.a6 + this.a7 + this.a8; 
      this.dp9=this.dp1 + this.dp2 + this.dp3 + this.dp4 + this.dp5 + this.dp6 + this.dp7 + this.dp8; 
      this.in9=this.in1 + this.in2 + this.in3 + this.in4 + this.in5 + this.in6 + this.in7 + this.in8; 
      this.ci9=this.ci1 + this.ci2 + this.ci3 + this.ci4 + this.ci5 + this.ci6 + this.ci7 + this.ci8; 
      this.ci9 =  Math.round((this.ci9 + Number.EPSILON) * 100) / 100;
      this.in9 =  Math.round((this.in9 + Number.EPSILON) * 100) / 100;
      this.dp9 =  Math.round((this.dp9 + Number.EPSILON) * 100) / 100;

      this.t5 =  Math.round((this.t5 + Number.EPSILON) * 100) / 100;
    });
  }
  getdata(){
    this.c_id =localStorage.getItem('c_id');
    this.ds.getdata(this.c_id).subscribe(response=>{
      this.result=response;
      // this.it1=this.in1;   this.it2=this.in2;   
      this.it3=this.in3;  
       this.it4=this.in4;   this.it5=this.in5;    this.it6=this.in6;   this.it7=this.in7;   this.it8=this.in8;

      // this.co1=  this.it1;
      // this.co2=  this.it2;
       this.co3=  this.it3;
      this.co4=  this.it4;
      this.co5=  this.it5;
      this.co6=  this.it6;
      this.co7=  this.it7;
      this.co8=  this.it8;

      this.co9=this.co1 + this.co2 + this.co3 + this.co4 + this.co5 + this.co6 + this.co7 + this.co8; 
      this.co9 =  Math.round((this.co9 + Number.EPSILON) * 100) / 100;

      this.it9=this.co1 + this.it2 + this.it3 + this.it4 + this.it5 + this.it6 + this.it7 + this.it8; 
      this.it9 =  Math.round((this.it9 + Number.EPSILON) * 100) / 100;

      this.ta1 = this.a1 + this.a2 + this.a3 + this.a4 ;
this.ta2 = this.a1 + this.a2 + this.a3 + this.a4 + this.a5;
this.ta3 = this.a1 + this.a2 + this.a3 + this.a4 + this.a5 + this.a6;
this.ta4 = this.a1 + this.a2 + this.a3 + this.a4 + this.a5 + this.a6 + this.a7;

this.tc1 = this.co1 + this.co2 + this.co3 + this.co4 ;
this.tc2 = this.co1 + this.co2 + this.co3 + this.co4 + this.co5;
this.tc3 = this.co1 + this.co2 + this.co3 + this.co4 + this.co5 + this.co6;
this.tc4 = this.co1 + this.co2 + this.co3 + this.co4 + this.co5 + this.co6 + this.co7;

this.tt1 = this.it1 + this.it2 + this.it3 + this.it4 ;
this.tt2 = this.it1 + this.it2 + this.it3 + this.it4 + this.it5;
this.tt3 = this.it1 + this.it2 + this.it3 + this.it4 + this.it5 + this.it6;
this.tt4 = this.it1 + this.it2 + this.it3 + this.it4 + this.it5 + this.it6 + this.it7;


this.ti1 = this.ci1 + this.ci2 + this.ci3 + this.ci4 ;
this.ti2 = this.ci1 + this.ci2 + this.ci3 + this.ci4 + this.ci5;
this.ti3 = this.ci1 + this.ci2 + this.ci3 + this.ci4 + this.ci5 + this.ci6;
this.ti4 = this.ci1 + this.ci2 + this.ci3 + this.ci4 + this.ci5 + this.ci6 + this.ci7;

this.tn1 = this.in1 + this.in2 + this.in3 + this.in4 ;
this.tn2 = this.in1 + this.in2 + this.in3 + this.in4 + this.in5;
this.tn3 = this.in1 + this.in2 + this.in3 + this.in4 + this.in5 + this.in6;
this.tn4 = this.in1 + this.in2 + this.in3 + this.in4 + this.in5 + this.in6 + this.in7;

this.tp1 = this.dp1 + this.dp2 + this.dp3 + this.dp4 ;
this.tp2 = this.dp1 + this.dp2 + this.dp3 + this.dp4 + this.dp5;
this.tp3 = this.dp1 + this.dp2 + this.dp3 + this.dp4 + this.dp5 + this.dp6;
this.tp4 = this.dp1 + this.dp2 + this.dp3 + this.dp4 + this.dp5 + this.dp6 + this.dp7;



      this.ds1= this.ci1 / this.co1;
      this.ds2= this.ci2 / this.co2;
      this.ds3= this.ci3 / this.co3;
      this.ds4= this.ci4 / this.co4;
      this.ds5= this.ci5 / this.co5;
      this.ds6= this.ci6 / this.co6;
      this.ds7= this.ci7 / this.co7;
      this.ds8= this.ci8 / this.co8;
      this.ds3 =  Math.round((this.ds3 + Number.EPSILON) * 100) / 100

      this.ds4 =  Math.round((this.ds4 + Number.EPSILON) * 100) / 100
      this.ds5 =  Math.round((this.ds5 + Number.EPSILON) * 100) / 100;
      this.ds6 =  Math.round((this.ds6 + Number.EPSILON) * 100) / 100;
      this.ds7 =  Math.round((this.ds7 + Number.EPSILON) * 100) / 100;
      this.ds8 =  Math.round((this.ds8 + Number.EPSILON) * 100) / 100;

      this.ai1 = this.ti1 / this.tc1;
      this.ai2 = this.ti2 / this.tc2; 
      this.ai3 = this.ti3 / this.tc3;
      this.ai4 = this.ti4 / this.tc4;
      this.ai5 = this.ci9 / this.co9;
     // console.log("co1 "+this.co1+"ci1 "+ this.ci1);
     this.ai1 =  Math.round((this.ai1 + Number.EPSILON) * 100) / 100;
     this.ai2 =  Math.round((this.ai2 + Number.EPSILON) * 100) / 100;
     this.ai3 =  Math.round((this.ai3 + Number.EPSILON) * 100) / 100;
     this.ai4 =  Math.round((this.ai4 + Number.EPSILON) * 100) / 100;
     this.ai5 =  Math.round((this.ai5 + Number.EPSILON) * 100) / 100;
    });

  }

  update(){
   // this.t5=this.a1 + this.a2 + this.a3 + this.a4 + this.a5 + this.a6 + this.a7 + this.a8; 
// this.ci1= this.a1+this.dp1+this.it1;
// this.ci2= this.a2+this.dp2+this.it2;
// this.ci3= this.a3+this.dp3+this.it3;
// this.ci4= this.a4+this.dp4+this.it4;
// this.ci5= this.a5+this.dp5+this.it5;
// this.ci6= this.a6+this.dp6+this.it6;
// this.ci7= this.a7+this.dp7+this.it7;
// this.ci8= this.a8+this.dp8+this.it8;

// this.co1= this.il1 + this.it1;
// this.co2= this.il2 + this.it2;
// this.co3= this.il3 + this.it3;
// this.co4= this.il4 + this.it4;
// this.co5= this.il5 + this.it5;
// this.co6= this.il6 + this.it6;
// this.co7= this.il7 + this.it7;
// this.co8= this.il8 + this.it8;
  //  console.log("c1 : "+this.ci1);
  }

  printSheet = () => {
    var head = [];
    var body = [];

    if (this.id == 5) {
      head = [
        ['', '', '2022', '2023', '2024', '2025', '2026', 'Total'],
        // {e1: '', e2: '', d1:{content: '2019', colSpan: 2,styles: {halign: 'center'}}, d3: '2021', d4: '2022', d5: '2023', d6: '2024', d7: '2025', d8: '2026' , t:'total'}
      ]
      // head = [
      // ]      
    } else if (this.id == 4) {
      head = [['', '', '2022', '2023', '2024', '2025', 'Total']]
    } else if (this.id == 3) {
      head = [['', '', '2022', '2023', '2024', 'Total']]
    } else if (this.id == 2) {
      head = [['', '', '2022', '2023', 'Total']]
    } else {
      head = [['', '', '2022', 'Total']]
    }

    if (this.id == 5) {
      body = [
        ['a', 'Profit After Taxes', this.a4, this.a5, this.a6, this.a7, this.a8, this.t5],
        ['b', 'Depreciation', this.dp4, this.dp5, this.dp6, this.dp7, this.dp8, this.dp9],
        ['c', 'Interest', this.in4, this.in5, this.in6, this.in7, this.in8, this.in9],
        ['A', 'Cash Inflows', this.ci4, this.ci5, this.ci6, this.ci7, this.ci8, this.ci9],
        ['b', 'Interest Payable', this.it4, this.it5, this.it6, this.it7, this.it8, this.it9],
        ['B', 'Cash Outflows', this.co4, this.co5, this.co6, this.co7, this.co8, this.co9],
        ['', 'DSCR', this.ds4, this.ds5, this.ds6, this.ds7, this.ds8],
        ['', 'Average DSCR', { content: this.ai5, colSpan: 9, styles: { halign: 'center' } }]
      ]
    } else if (this.id == 4) {
      body = [
        ['a', 'Profit After Taxes', this.a4, this.a5, this.a6, this.a7, this.ta4],
        ['b', 'Depreciation', this.dp4, this.dp5, this.dp6, this.dp7, this.dp9],
        ['c', 'Interest', this.in4, this.in5, this.in6, this.in7, this.in9],
        ['A', 'Cash Inflows', this.ci4, this.ci5, this.ci6, this.ci7, this.ci9],
        ['b', 'Interest Payable', this.it4, this.it5, this.it6, this.it7, this.it9],
        ['B', 'Cash Outflows', this.co4, this.co5, this.co6, this.co7, this.co9],
        ['', 'DSCR', this.ds4, this.ds5, this.ds6, this.ds7],
        ['', 'Average DSCR', { content: this.ai5, colSpan: 9, styles: { halign: 'center' } }]
      ]
    } else if (this.id == 3) {
      body = [
        ['a', 'Profit After Taxes', this.a4, this.a5, this.a6, this.ta3],
        ['b', 'Depreciation', this.dp4, this.dp5, this.dp6, this.dp9],
        ['c', 'Interest', this.in4, this.in5, this.in6, this.in9],
        ['A', 'Cash Inflows', this.ci4, this.ci5, this.ci6, this.ci9],
        ['b', 'Interest Payable', this.it4, this.it5, this.it6, this.it9],
        ['B', 'Cash Outflows', this.co4, this.co5, this.co6, this.co9],
        ['', 'DSCR', this.ds4, this.ds5, this.ds6],
        ['', 'Average DSCR', { content: this.ai5, colSpan: 9, styles: { halign: 'center' } }]
      ]
    } else if (this.id == 2) {
      body = [
        ['a', 'Profit After Taxes', this.a4, this.a5, this.ta2],
        ['b', 'Depreciation', this.dp4, this.dp5, this.dp9],
        ['c', 'Interest', this.in4, this.in5, this.in9],
        ['A', 'Cash Inflows', this.ci4, this.ci5, this.ci9],
        ['b', 'Interest Payable', this.it4, this.it5, this.it9],
        ['B', 'Cash Outflows', this.co4, this.co5, this.co9],
        ['', 'DSCR', this.ds4, this.ds5],
        ['', 'Average DSCR', { content: this.ai5, colSpan: 9, styles: { halign: 'center' } }]
      ]
    } else {
      body = [
        ['a', 'Profit After Taxes', this.a4, this.ta1],
        ['b', 'Depreciation', this.dp4, this.dp9],
        ['c', 'Interest', this.in4, this.in9],
        ['A', 'Cash Inflows', this.ci4, this.ci9],
        ['b', 'Interest Payable', this.it4, this.it9],
        ['B', 'Cash Outflows', this.co4, this.co9],
        ['', 'DSCR', this.ds4],
        ['', 'Average DSCR', { content: this.ai5, colSpan: 9, styles: { halign: 'center' } }]
      ]
    }

    let TotalCell = parseInt(this.id) + 3;
    console.log(TotalCell);

    var doc = new jsPDF()
    doc.text('Debt Service Coverage Ratio', 70, 10)
    doc.setFontSize(9);
    doc.text('Kyats in Mill', 178, 10)
    // doc.autoTable({theme:'grid',head :head , body: body , styles: {overflow: 'linebreak',fontSize: 5}}) // one page
    // doc.autoTable({ theme: 'grid', head: head, body: body })
    autoTable(doc, { theme: 'grid', head: head, body: body })
    // Save
    doc.save("ISCR.pdf");
  }

}
