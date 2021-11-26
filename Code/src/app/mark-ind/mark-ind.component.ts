import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-mark-ind',
  templateUrl: './mark-ind.component.html',
  styleUrls: ['./mark-ind.component.css']
})
export class MarkIndComponent implements OnInit {

  constructor(private ds: DataService, private router:Router) { }

  fData = [];

  finData = {
    mp:0,
    cqc:0,
    sqcr:0,
    es:0
  }

  allTotal = 0

  ngOnInit(): void {
    this.getData();
  }

  updateData() {
    let total = this.finData.mp + this.finData.cqc + this.finData.sqcr + this.finData.es;
    this.allTotal = total;
  }

  getData(){
    var fd = new FormData();
    let c_id = localStorage.getItem('c_id');
    fd.append("c_id",c_id);
    fd.append('action_id', 'CHECK_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
       if(res[0].MarkInd != 'null'){      
        this.finData = JSON.parse(res[0].MarkInd)
        this.updateData();
       }
    });
  }
  

  GoToNext(data){
    let c_id =localStorage.getItem('c_id');
    let year =localStorage.getItem('year');
    var jsdata = JSON.stringify(data);

    var fd = new FormData();
    fd.append("action_id",'SAVE_MARK_IND' );
    fd.append("c_id",c_id);
    fd.append("year",year );
    fd.append("data",jsdata);

    this.ds.SaveStep2(fd).subscribe((res)=>{
      console.log(res);
      if(res == true){
        this.router.navigateByUrl('/TechProf');
      }
    });
  }
}
