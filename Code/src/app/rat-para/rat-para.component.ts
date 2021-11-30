import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-rat-para',
  templateUrl: './rat-para.component.html',
  styleUrls: ['./rat-para.component.css']
})
export class RatParaComponent implements OnInit {
 
  constructor(private ds: DataService, private router:Router) { }

  fData = {
    a:false,
    b:false,
    c:false,
    d:false,
    e:false,
    f:false,
    g:false,
    h:false,
  };

  finData = [];

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    var fd = new FormData();
    let c_id = localStorage.getItem('c_id');
    fd.append("c_id",c_id);
    fd.append('action_id', 'CHECK_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
      this.finData = JSON.parse(res[0].iScore);
      this.updateData(JSON.parse(res[0].iScore))
    });
  }

  updateData(iScore){
    if(iScore.allTotalA < 35){
      this.fData.a = true;
    }else if(iScore.allTotalA >= 35 && iScore.allTotalA < 40){
      this.fData.b = true;
    }else if(iScore.allTotalA >= 40 && iScore.allTotalA < 45){
      this.fData.c = true;
    }else if(iScore.allTotalA >= 45 && iScore.allTotalA < 55){
      this.fData.d = true;
    }else if(iScore.allTotalA >= 55 && iScore.allTotalA < 60){
      this.fData.e = true;
    }else if(iScore.allTotalA >= 60 && iScore.allTotalA < 65){
      this.fData.f = true;
    }else if(iScore.allTotalA >= 65 && iScore.allTotalA < 70){
      this.fData.g = true;
    }else if(iScore.allTotalA > 70){
      this.fData.h = true;
    }
  }

  GoToNext(data){
    let c_id =localStorage.getItem('c_id');
    let year =localStorage.getItem('year');
    var jsdata = JSON.stringify('data');

    var fd = new FormData();
    fd.append("action_id",'SAVE_RAT_PARA');
    fd.append("c_id",c_id);
    fd.append("year",year );
    fd.append("data",jsdata);

    this.ds.SaveStep2(fd).subscribe((res)=>{
      console.log(res);
      if(res == true){
        this.router.navigateByUrl('/FRatReport');
      }
    });
  }

}
