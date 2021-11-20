import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tech-prof',
  templateUrl: './tech-prof.component.html',
  styleUrls: ['./tech-prof.component.css']
})
export class TechProfComponent implements OnInit {

  constructor(private ds: DataService, private router:Router) { }

  fData = [];

  finData = {
    td:0,
    ei:0,
    tpc:0,
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    var fd = new FormData();
    fd.append('action_id', 'GET_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
      this.fData = JSON.parse(res[0].data);
      this.setData()
    });
  }
  
  setData(){
    console.log(this.fData)
  }

  GoToNext(data){
    let c_id =localStorage.getItem('c_id');
    let year =localStorage.getItem('year');
    var jsdata = JSON.stringify(data);

    var fd = new FormData();
    fd.append("action_id",'SAVE_TECH_PROF' );
    fd.append("c_id",c_id);
    fd.append("year",year );
    fd.append("data",jsdata);

    this.ds.SaveStep2(fd).subscribe((res)=>{
      console.log(res);
      if(res == true){
        this.router.navigateByUrl('/CollGua');
      }
    });
  }
}
