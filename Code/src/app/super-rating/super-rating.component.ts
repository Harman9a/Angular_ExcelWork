import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-super-rating',
  templateUrl: './super-rating.component.html',
  styleUrls: ['./super-rating.component.css']
})
export class SuperRatingComponent implements OnInit {

  constructor(private ds: DataService, private router:Router) { }

  fData = [];

  finData = {
    m1:0,
    m2:0,
    m3:0,
    cma:'',
    cmb:'',
    cmc:'',
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
      if(res[0].SuperRating != 'null'){        
        this.finData = JSON.parse(res[0].SuperRating)
        this.updateData();
      }
    });
  }

  updateData() {
    let total = this.finData.m1 + this.finData.m2 + this.finData.m3;
    this.allTotal = total;
  }
  
  setData(){
    console.log(this.fData)
  }

  GoToNext(data){
    let c_id =localStorage.getItem('c_id');
    let year =localStorage.getItem('year');
    var jsdata = JSON.stringify(data);

    var fd = new FormData();
    fd.append("action_id",'SAVE_SUPER_RATING' );
    fd.append("c_id",c_id);
    fd.append("year",year );
    fd.append("data",jsdata);

    this.ds.SaveStep2(fd).subscribe((res)=>{
      console.log(res);
      if(res == true){
        this.router.navigateByUrl('/iScore');
      }
    });
  }

}
