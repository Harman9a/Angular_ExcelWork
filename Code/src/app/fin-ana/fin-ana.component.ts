import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

interface finDataInterface {
    derL: any,
    derC: number,
    derN: number,
    crL: any,
    crC: number,
    crN: number,
    srg: number,
    aDscr: number,
    aIscr: number,
    sr: number,
    dc: number,
    roce: number,
}

@Component({
  selector: 'app-fin-ana',
  templateUrl: './fin-ana.component.html',
  styleUrls: ['./fin-ana.component.css']
})


export class FinAnaComponent implements OnInit {

  constructor(private ds: DataService, private router:Router) { }

  fData = [];

  finData : finDataInterface = {
    derL: 0,
    derC: 0,
    derN: 0,
    crL: 0,
    crC: 0,
    crN: 0,
    srg: 0,
    aDscr: 0,
    aIscr: 0,
    sr: 0,
    dc: 0,
    roce: 0,
  }

  allTotal:0

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    var fd = new FormData();
    fd.append('action_id', 'GET_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
      this.setData(JSON.parse(res[0].data));
    });
  }
  
  setData(data){   
    //  DE
    if(data.dr2 <= 1 && data.dr2 != 0){
      this.finData.derL = 1;
    }else if(data.dr2 > 1 && data.dr2 < 2){
      this.finData.derL = 2;
    }else if(data.dr2 > 2 && data.dr2 < 3){
      this.finData.derL = 3;
    }else if(data.dr2 > 3 && data.dr2 < 4){
      this.finData.derL = 4;
    }else if(data.dr2 > 4 && data.dr2 < 5){
      this.finData.derL = 5;
    }else if(data.dr2 >= 5 && data.dr2 != 0){
      this.finData.derL = 6;
    }else{
      this.finData.derL = 'NB';
    }

    if(data.dr3 <= 1){
      this.finData.derC = 1;
    }else if(data.dr3 > 1 && data.dr3 < 2){
      this.finData.derC = 2;
    }else if(data.dr3 > 2 && data.dr3 < 3){
      this.finData.derC = 3;
    }else if(data.dr3 > 3 && data.dr3 < 4){
      this.finData.derC = 4;
    }else if(data.dr3 > 4 && data.dr3 < 5){
      this.finData.derC = 5;
    }else if(data.dr3 >= 5){
      this.finData.derC = 6;
    }

    if(data.dr4 <= 1){
      this.finData.derN = 1;
    }else if(data.dr4 > 1 && data.dr4 < 2){
      this.finData.derN = 2;
    }else if(data.dr4 > 2 && data.dr4 < 3){
      this.finData.derN = 3;
    }else if(data.dr4 > 3 && data.dr4 < 4){
      this.finData.derN = 4;
    }else if(data.dr4 > 4 && data.dr4 < 5){
      this.finData.derN = 5;
    }else if(data.dr4 >= 5){
      this.finData.derN = 6;
    }

    // CR
    if(data.cr2 >= 1.33){
      this.finData.crL = 1;
    }else if(data.cr2 >= 1.00 && data.cr2 <= 1.33){
      this.finData.crL = 2;
    }else if(data.cr2 >= 0.75 && data.cr2 <= 1.00){
      this.finData.crL = 3;
    }else if(data.cr2 <=  0.75){
      this.finData.crL = 4;
    }else{
      this.finData.crL = "NB";
    }

    if(data.cr3 >= 1.33){
      this.finData.crC = 1;
    }else if(data.cr3 >= 1.00 && data.cr3 <= 1.33){
      this.finData.crC = 2;
    }else if(data.cr3 >= 0.75 && data.cr3 <= 1.00){
      this.finData.crC = 3;
    }else if(data.cr3 <=  0.75){
      this.finData.crC = 4;
    }

    if(data.cr4 >= 1.33){
      this.finData.crN = 1;
    }else if(data.cr4 >= 1.00 && data.cr4 <= 1.33){
      this.finData.crN = 2;
    }else if(data.cr4 >= 0.75 && data.cr4 <= 1.00){
      this.finData.crN = 3;
    }else if(data.cr4 <=  0.75){
      this.finData.crN = 4;
    }

    if(data.ad5 >= 2.00){
      this.finData.aDscr = 1;
    }else if(data.ad5 >= 1.50 && data.ad5 < 2.00){
      this.finData.aDscr = 2;
    }else if(data.ad5 >= 1.00 && data.ad5 <= 1.50){
      this.finData.aDscr = 3;
    }else if(data.ad5 <=  1.00){
      this.finData.aDscr = 4;
    }else{
      this.finData.aDscr = "NB";
    }

    if(data.ai5 >= 3.00){
      this.finData.aIscr = 1;
    }else if(data.ai5 >= 2.00 && data.ai5 < 3.00){
      this.finData.aIscr = 2;
    }else if(data.ai5 >= 1.50 && data.ai5 <= 2.00){
      this.finData.aIscr = 3;
    }else if(data.ai5 >= 1.00 && data.ai5 <= 1.50){
      this.finData.aIscr = 4;
    }else if(data.ai5 <=  1.00){
      this.finData.aIscr = 5;
    }

    if(parseFloat(data.rp2) >= 15){
      this.finData.roce = 1;
    }else if(parseFloat(data.rp2) >= 10 && parseFloat(data.rp2) < 15){
      this.finData.roce = 2;
    }else if(parseFloat(data.rp2) >= 5 && parseFloat(data.rp2) <= 10){
      this.finData.roce = 3;
    }else if(parseFloat(data.rp2) <=  5){
      this.finData.roce = 4;
    }else{
      this.finData.roce = "NB";
    }
    this.updateData()
  }

  updateData(){
    let total = this.finData.derL + this.finData.derC + this.finData.derN + this.finData.crL +this.finData.crC + this.finData.crN + this.finData.aDscr + this.finData.aIscr + this.finData.roce;
    this.allTotal = total
  }

  GoToNext(data){
    let c_id =localStorage.getItem('c_id');
    let year =localStorage.getItem('year');
    var jsdata = JSON.stringify(data);

    var fd = new FormData();
    fd.append("action_id",'SAVE_FIN_ANA' );
    fd.append("c_id",c_id);
    fd.append("year",year );
    fd.append("data",jsdata);

    this.ds.SaveStep2(fd).subscribe((res)=>{
      console.log(res);
      if(res == true){
        this.router.navigateByUrl('/ManApp');
      }
    });
  }
}