import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-frat-report',
  templateUrl: './frat-report.component.html',
  styleUrls: ['./frat-report.component.css']
})
export class FRatReportComponent implements OnInit {
  constructor(private ds: DataService, private router:Router) { }

  fData = [];

  finData = {
    mp:0,
    cqc:0,
    sqcr:0,
    es:0
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
  GoToNext(){
    this.router.navigateByUrl('/sheetParts');
  }

}
