import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownership',
  templateUrl: './ownership.component.html',
  styleUrls: ['./ownership.component.css'],
})
export class OwnershipComponent implements OnInit {
  constructor(private ds: DataService, private router: Router) {}

  fData = [];

  finData = {
    inter: 0,
    _inter: 0,
    loan: 0,
    _loan: 0,
    firm: 0,
    _firm: 0,
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
      if (res[0].ownership != 'null') {
        this.finData = JSON.parse(res[0].ownership);
        this.updateData();
      }
    });
  }

  updateData() {
    this.finData._inter = this.finData.inter * 4;
    this.finData._loan = this.finData.loan * 5;
    this.finData._firm = this.finData.firm * 6;

    let total = this.finData._inter + this.finData._loan + this.finData._firm;
    this.allTotal = total;
  }

  GoToNext(data) {
    let c_id = localStorage.getItem('c_id');
    let year = localStorage.getItem('year');
    var jsdata = JSON.stringify(data);

    var fd = new FormData();
    fd.append('action_id', 'SAVE_OWNERSHIP');
    fd.append('c_id', c_id);
    fd.append('year', year);
    fd.append('data', jsdata);

    this.ds.SaveStep2(fd).subscribe((res) => {
      console.log(res);
      if (res == true) {
        this.router.navigateByUrl('/MarkInd');
      }
    });
  }
}
