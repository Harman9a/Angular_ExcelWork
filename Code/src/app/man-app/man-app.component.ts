import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-man-app',
  templateUrl: './man-app.component.html',
  styleUrls: ['./man-app.component.css'],
})
export class ManAppComponent implements OnInit {
  constructor(private ds: DataService, private router: Router) {}

  fData = [];

  finData = {
    comp: 0,
    emp: 0,
    reg: 0,
  };
  allTotal = 0;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    var fd = new FormData();
    let c_id = localStorage.getItem('c_id');
    fd.append("c_id",c_id);
    fd.append('action_id', 'CHECK_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
      if(res[0].ManApp != 'null'){      
        this.finData = JSON.parse(res[0].ManApp)
        this.updateData();
      }
    });
  }

  updateData() {
    let total = this.finData.comp + this.finData.emp + this.finData.reg;
    this.allTotal = total;
  }

  GoToNext(data) {
    let c_id = localStorage.getItem('c_id');
    let year = localStorage.getItem('year');
    var jsdata = JSON.stringify(data);
    var fd = new FormData();
    fd.append('action_id', 'SAVE_MAN_APP');
    fd.append('c_id', c_id);
    fd.append('year', year);
    fd.append('data', jsdata);

    this.ds.SaveStep2(fd).subscribe((res) => {
      console.log(res);
      if (res == true) {
        this.router.navigateByUrl('/ownership');
      }
    });
  }
}
