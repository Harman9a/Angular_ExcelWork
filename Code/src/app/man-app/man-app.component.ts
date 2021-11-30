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
    _comp: 0,
    emp: 0,
    _emp: 0,
    reg: 0,
    _reg: 0,
  };
  allTotal = 0;

  ngOnInit(): void {
    this.getData();
    this.hideCell();
  }

  hideCell() {
    // for(let i = 0 ; i < document.getElementById('customers').rows.length ; i++){
    //   let l = document.getElementById('customers').rows[i].cells.length;
    //   console.log(l)
    //   console.log(document.getElementById('customers').rows[i])
    //   if(l == 7){
    //     document.getElementById('customers').rows[i].cells[2].style.display = 'none';
    //   }
    //   if(l == 2){
    //     document.getElementById('customers').rows[i].cells[1].style.display = 'none';
    //   }
    //   if(l == 6){
    //     document.getElementById('customers').rows[i].cells[1].style.display = 'none';
    //   }
    // }
  }

  getData() {
    var fd = new FormData();
    let c_id = localStorage.getItem('c_id');
    fd.append('c_id', c_id);
    fd.append('action_id', 'CHECK_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
      if (res[0].ManApp != 'null') {
        this.finData = JSON.parse(res[0].ManApp);
        this.updateData();
      }
    });
  }

  updateData() {
   this.finData._comp = this.finData.comp * 5;
   this.finData._emp = this.finData.emp * 3;
   this.finData._reg = this.finData.reg * 4;

    let total = this.finData._comp + this.finData._emp + this.finData._reg;
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
