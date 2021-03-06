import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-coll-gua',
  templateUrl: './coll-gua.component.html',
  styleUrls: ['./coll-gua.component.css']
})
export class CollGuaComponent implements OnInit {

  constructor(private ds: DataService, private router:Router) { }

  fData = [];

  finData = {
    vtc:0,
    _vtc:0,
    vccec:0,
    _vccec:0,
    gctw:0,
    _gctw:0,
  }

  allTotal = 0;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    var fd = new FormData();
    let c_id = localStorage.getItem('c_id');
    fd.append("c_id",c_id);
    fd.append('action_id', 'CHECK_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
      if(res[0].CollGua != 'null'){      
        this.finData = JSON.parse(res[0].CollGua)
        this.updateData();
      }
    });
  }

  updateData() {
    this.finData._vtc = this.finData.vtc * 8;
    this.finData._vccec = this.finData.vccec * 3;
    this.finData._gctw = this.finData.gctw * 3;

    let total = this.finData._vtc + this.finData._vccec + this.finData._gctw;
    this.allTotal = total;
  }

  GoToNext(data){
    let c_id =localStorage.getItem('c_id');
    let year =localStorage.getItem('year');
    var jsdata = JSON.stringify(data);

    var fd = new FormData();
    fd.append("action_id",'SAVE_COLL_GUA' );
    fd.append("c_id",c_id);
    fd.append("year",year );
    fd.append("data",jsdata);

    this.ds.SaveStep2(fd).subscribe((res)=>{
      console.log(res);
      if(res == true){
        this.router.navigateByUrl('/dataUpload');
      }
    });
  }

}