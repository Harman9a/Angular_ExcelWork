import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

interface finDataI {
  FinAna:any,
  ManApp:any,
  ownership:any,
  MarkInd:any,
  TechProf:any,
  CollGua:any,
  SuperRating:any,
}

@Component({
  selector: 'app-i-score',
  templateUrl: './i-score.component.html',
  styleUrls: ['./i-score.component.css']
})


export class IScoreComponent implements OnInit {
  constructor(private ds: DataService, private router:Router) { }

  fData = [];

  finData : finDataI = {
    FinAna:0,
    ManApp:0,
    ownership:0,
    MarkInd:0,
    TechProf:0,
    CollGua:0,
    SuperRating:0,
  }

  finDataTotal : finDataI = {
    FinAna:0,
    ManApp:0,
    ownership:0,
    MarkInd:0,
    TechProf:0,
    CollGua:0,
    SuperRating:0,
  }
  allTotal1 = 626;
  allTotal2 = 100;
  allTotal = 0;
  allTotalA : any = 0;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    var fd = new FormData();
    let c_id = localStorage.getItem('c_id');
    fd.append("c_id",c_id);
    fd.append('action_id', 'CHECK_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
      this.finData.FinAna = JSON.parse(res[0].FinAna).allTotal
      this.finData.ManApp = JSON.parse(res[0].ManApp).allTotal
      this.finData.ownership = JSON.parse(res[0].ownership).allTotal
      this.finData.MarkInd = JSON.parse(res[0].MarkInd).allTotal
      this.finData.TechProf = JSON.parse(res[0].TechProf).allTotal
      this.finData.CollGua = JSON.parse(res[0].CollGua).allTotal
      this.finData.SuperRating = JSON.parse(res[0].SuperRating).allTotal
      this.updateData()
    });
  }

  updateData() {
    let total = this.finData.FinAna + this.finData.ManApp + this.finData.ownership + this.finData.MarkInd + this.finData.TechProf + this.finData.CollGua + this.finData.SuperRating;
    this.allTotal = total;

    console.log(this.allTotal);

    this.finDataTotal.FinAna = this.finData.FinAna / 253 * 20;
    this.finDataTotal.FinAna = this.finDataTotal.FinAna.toFixed(2);

    this.finDataTotal.ManApp = this.finData.ManApp / 51 * 10
    this.finDataTotal.ManApp = this.finDataTotal.ManApp.toFixed(2);

    this.finDataTotal.ownership = this.finData.ownership / 94 * 10
    this.finDataTotal.ownership = this.finDataTotal.ownership.toFixed(2);

    this.finDataTotal.MarkInd = this.finData.MarkInd / 84 * 10
    this.finDataTotal.MarkInd = this.finDataTotal.MarkInd.toFixed(2);

    this.finDataTotal.TechProf = this.finData.TechProf / 56 * 10
    this.finDataTotal.TechProf = this.finDataTotal.TechProf.toFixed(2);

    this.finDataTotal.CollGua = this.finData.CollGua / 88 * 20
    this.finDataTotal.CollGua = this.finDataTotal.CollGua.toFixed(2);

    this.finDataTotal.SuperRating = this.finData.SuperRating / 300 * 20
    this.finDataTotal.SuperRating = this.finDataTotal.SuperRating.toFixed(2);

    let totalA = parseFloat(this.finDataTotal.FinAna) + parseFloat(this.finDataTotal.ManApp) + parseFloat(this.finDataTotal.ownership) + parseFloat(this.finDataTotal.MarkInd) + parseFloat(this.finDataTotal.TechProf) + parseFloat(this.finDataTotal.CollGua) + parseFloat(this.finDataTotal.SuperRating);
    this.allTotalA = totalA.toFixed(2);

  }
  
  GoToNext(data){
    let c_id =localStorage.getItem('c_id');
    let year =localStorage.getItem('year');
    var jsdata = JSON.stringify(data);

    var fd = new FormData();
    fd.append("action_id",'SAVE_iScore' );
    fd.append("c_id",c_id);
    fd.append("year",year );
    fd.append("data",jsdata);

    this.ds.SaveStep2(fd).subscribe((res)=>{
      console.log(res);
      if(res == true){
        this.router.navigateByUrl('/RatPara');
      }
    });
  }
}
