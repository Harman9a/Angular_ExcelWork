import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

interface HeaderElementsInterface {
  id:number;
  col: number
  name: string
  year: any
}

interface HeaderInterface extends Array<HeaderElementsInterface> { }

@Component({
  selector: 'app-sheet-head',
  templateUrl: './sheet-head.component.html',
  styleUrls: ['./sheet-head.component.css']
})


export class SheetHeadComponent implements OnInit {

  @Input() year: any;
  pastYear: number = 2;
  currentYear: number = 1;
  minCollValue: number = 3;
  collUsed = 6;
  TotalYears = 0
  HeaderData: HeaderInterface = [];
  data:any;
  datas:[];
a0:any; a1:any; a2:any; a3:any; a4:any; a5:any; a6:any; a7:any; a8:any;
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.SetHeader();
    this.sethead();
    this.update();
  }

  update =() =>{
this.a1 = this.a1;
console.log(this.a1);
  }

  gethead =(val, id) =>{
    var fd = new FormData();
    var jsdata = JSON.stringify(val);
console.log("id"+id+"data"+val);
//console.log(fd);
    fd.append("action_id",'7' );
//     this.ds.gethead(fd).subscribe(res=>{
//   this.data= res;
//   this.datas=this.data;
// //console.log(this.datas.length+" Year :"+this.year);

// // for (var i = 1; i <= this.year; ++i) {
// //   this.datas['i']=this.data;

// // }
//     });
  }

  sethead =() =>{
    var fd = new FormData();

    fd.append("action_id",'7' );
//     this.ds.gethead(fd).subscribe(res=>{
//   this.data= res;
//   this.datas=this.data;
// //console.log(this.datas.length+" Year :"+this.year);

// // for (var i = 1; i <= this.year; ++i) {
// //   this.datas['i']=this.data;

// // }
//     });
  }
  SetHeader = () => {
    let currentYear = new Date().getFullYear();
    this.TotalYears = parseInt(this.year) + 3;
    this.minCollValue = (24 - this.collUsed) / this.TotalYears;

    this.HeaderData.push({ id:0, col: this.minCollValue, name: 'Audited', year: currentYear - 2 })
    this.HeaderData.push({ id:1, col: this.minCollValue, name: 'Unaudited', year: currentYear - 1 })
    this.HeaderData.push({ id:2, col: this.minCollValue, name: 'Estimated', year: currentYear })

    for (var i = 1; i <= this.year; ++i) {
      this.HeaderData.push({ id:i+3,col: this.minCollValue, name: 'Projected', year: currentYear + i })
    }

  }
}
