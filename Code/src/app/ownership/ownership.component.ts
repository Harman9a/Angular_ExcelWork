import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ownership',
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.css']
})
export class OwnershipComponent implements OnInit {

  constructor(private ds: DataService, private router:Router) { }

  fData = [];

  finData = {
    inter:0,
    loan:0,
    firm:0,
  }
  
  allTotal=0

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    var fd = new FormData();
    let c_id = localStorage.getItem('c_id');
    fd.append("c_id",c_id);
    fd.append('action_id', 'CHECK_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
      if(res[0].ownership != 'null'){   
        this.finData = JSON.parse(res[0].ownership)
        this.updateData();
      }
    });
  }


  updateData() {
    let total = this.finData.inter + this.finData.loan + this.finData.firm;
    this.allTotal = total;
  }

  GoToNext(data){
    let c_id =localStorage.getItem('c_id');
    let year =localStorage.getItem('year');
    var jsdata = JSON.stringify(data);

    var fd = new FormData();
    fd.append("action_id",'SAVE_OWNERSHIP' );
    fd.append("c_id",c_id);
    fd.append("year",year );
    fd.append("data",jsdata);

    this.ds.SaveStep2(fd).subscribe((res)=>{
      console.log(res);
      if(res == true){
        this.router.navigateByUrl('/MarkInd');
      }
    });
  }
}
