import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark-ind',
  templateUrl: './mark-ind.component.html',
  styleUrls: ['./mark-ind.component.css'],
})
export class MarkIndComponent implements OnInit {
  constructor(private ds: DataService, private router: Router) {}

  fData = [];

  finData = {
    mp: 0,
    _mp: 0,
    cqc: 0,
    _cqc: 0,
    sqcr: 0,
    _sqcr: 0,
    es: 0,
    _es: 0,
  };

  allTotal = 0;

  ngOnInit(): void {
    this.getData();
    this.hideCell();
  }

  hideCell() {
    // console.log(document.getElementById('customers').rows);
    // for (let i = 0; i < document.getElementById('customers').rows.length; i++) {
    //   let l = document.getElementById('customers').rows[i].cells.length;
    //   if (l == 7) {
    //     document.getElementById('customers').rows[i].cells[2].style.display =
    //       'none';
    //   }
    //   if (l == 2) {
    //     document.getElementById('customers').rows[i].cells[1].style.display =
    //       'none';
    //   }
    //   if (l == 6) {
    //     document.getElementById('customers').rows[i].cells[1].style.display =
    //       'none';
    //   }
    // }
  }

  updateData() {
    this.finData._mp = this.finData.mp * 4;
    this.finData._cqc = this.finData.cqc * 4;
    this.finData._sqcr = this.finData.sqcr * 3;
    this.finData._es = this.finData.es * 6;

    let total =
      this.finData._mp + this.finData._cqc + this.finData._sqcr + this.finData._es;
    this.allTotal = total;
  }

  getData() {
    var fd = new FormData();
    let c_id = localStorage.getItem('c_id');
    fd.append('c_id', c_id);
    fd.append('action_id', 'CHECK_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
      if (res[0].MarkInd != 'null') {
        this.finData = JSON.parse(res[0].MarkInd);
        this.updateData();
      }
    });
  }

  GoToNext(data) {
    let c_id = localStorage.getItem('c_id');
    let year = localStorage.getItem('year');
    var jsdata = JSON.stringify(data);

    var fd = new FormData();
    fd.append('action_id', 'SAVE_MARK_IND');
    fd.append('c_id', c_id);
    fd.append('year', year);
    fd.append('data', jsdata);

    this.ds.SaveStep2(fd).subscribe((res) => {
      console.log(res);
      if (res == true) {
        this.router.navigateByUrl('/TechProf');
      }
    });
  }
}
