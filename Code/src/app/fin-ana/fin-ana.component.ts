import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

interface finDataInterface {
  derL: any;
  _derL: any;
  derC: number;
  _derC: number;
  derN: number;
  _derN: number;
  crL: any;
  _crL: any;
  crC: number;
  _crC: number;
  crN: number;
  _crN: number;
  srg: number;
  _srg: number;
  aDscr: any;
  _aDscr: any;
  aIscr: number;
  _aIscr: number;
  sr: number;
  _sr: number;
  dc: number;
  _dc: number;
  roce: any;
  _roce: any;
}

@Component({
  selector: 'app-fin-ana',
  templateUrl: './fin-ana.component.html',
  styleUrls: ['./fin-ana.component.css'],
})
export class FinAnaComponent implements OnInit {
  constructor(private ds: DataService, private router: Router) {}

  fData = [];

  finData: finDataInterface = {
    derL: 0,
    _derL: 0,
    derC: 0,
    _derC: 0,
    derN: 0,
    _derN: 0,
    crL: 0,
    _crL: 0,
    crC: 0,
    _crC: 0,
    crN: 0,
    _crN: 0,
    srg: 0,
    _srg: 0,
    aDscr: 0,
    _aDscr: 0,
    aIscr: 0,
    _aIscr: 0,
    sr: 0,
    _sr: 0,
    dc: 0,
    _dc: 0,
    roce: 0,
    _roce: 0,
  };

  allTotal: 0;

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
    //   if(l == 3){
    //     document.getElementById('customers').rows[i].cells[2].style.display = 'none';
    //   }
    //   if(l == 6){
    //     document.getElementById('customers').rows[i].cells[1].style.display = 'none';
    //   }
    // }
  }

  getData() {
    let c_id = localStorage.getItem('c_id');
    var fd = new FormData();
    fd.append('action_id', 'CHECK_FINAL_DATA_FIN_ANA');
    fd.append('c_id', c_id);
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
      if (res == null) {
        var fd1 = new FormData();
        fd1.append('action_id', 'GET_FINAL_DATA_FIN_ANA');
        this.ds.GetFinalForFinAna(fd1).subscribe((res1) => {
          this.setData(JSON.parse(res1[0].data));
        });
      } else {
        this.finData = JSON.parse(res[0].FinAna);
        this.updateData();
      }
      console.log(res);
    });
  }

  setData(data) {
    //  DE
    if (data.dr2 <= 1 && data.dr2 != 0) {
      this.finData.derL = 1;
    } else if (data.dr2 > 1 && data.dr2 < 2) {
      this.finData.derL = 2;
    } else if (data.dr2 > 2 && data.dr2 < 3) {
      this.finData.derL = 3;
    } else if (data.dr2 > 3 && data.dr2 < 4) {
      this.finData.derL = 4;
    } else if (data.dr2 > 4 && data.dr2 < 5) {
      this.finData.derL = 5;
    } else if (data.dr2 >= 5 && data.dr2 != 0) {
      this.finData.derL = 6;
    } else {
      this.finData.derL = 'NB';
    }

    if (data.dr3 <= 1) {
      this.finData.derC = 1;
    } else if (data.dr3 > 1 && data.dr3 < 2) {
      this.finData.derC = 2;
    } else if (data.dr3 > 2 && data.dr3 < 3) {
      this.finData.derC = 3;
    } else if (data.dr3 > 3 && data.dr3 < 4) {
      this.finData.derC = 4;
    } else if (data.dr3 > 4 && data.dr3 < 5) {
      this.finData.derC = 5;
    } else if (data.dr3 >= 5) {
      this.finData.derC = 6;
    }

    if (data.dr4 <= 1) {
      this.finData.derN = 1;
    } else if (data.dr4 > 1 && data.dr4 < 2) {
      this.finData.derN = 2;
    } else if (data.dr4 > 2 && data.dr4 < 3) {
      this.finData.derN = 3;
    } else if (data.dr4 > 3 && data.dr4 < 4) {
      this.finData.derN = 4;
    } else if (data.dr4 > 4 && data.dr4 < 5) {
      this.finData.derN = 5;
    } else if (data.dr4 >= 5) {
      this.finData.derN = 6;
    }

    // CR
    if (data.cr2 >= 1.33) {
      this.finData.crL = 1;
    } else if (data.cr2 >= 1.0 && data.cr2 <= 1.33) {
      this.finData.crL = 2;
    } else if (data.cr2 >= 0.75 && data.cr2 <= 1.0) {
      this.finData.crL = 3;
    } else if (data.cr2 <= 0.75) {
      this.finData.crL = 4;
    } else {
      this.finData.crL = 'NB';
    }

    if (data.cr3 >= 1.33) {
      this.finData.crC = 1;
    } else if (data.cr3 >= 1.0 && data.cr3 <= 1.33) {
      this.finData.crC = 2;
    } else if (data.cr3 >= 0.75 && data.cr3 <= 1.0) {
      this.finData.crC = 3;
    } else if (data.cr3 <= 0.75) {
      this.finData.crC = 4;
    }

    if (data.cr4 >= 1.33) {
      this.finData.crN = 1;
    } else if (data.cr4 >= 1.0 && data.cr4 <= 1.33) {
      this.finData.crN = 2;
    } else if (data.cr4 >= 0.75 && data.cr4 <= 1.0) {
      this.finData.crN = 3;
    } else if (data.cr4 <= 0.75) {
      this.finData.crN = 4;
    }

    if (data.ad5 >= 2.0) {
      this.finData.aDscr = 1;
    } else if (data.ad5 >= 1.5 && data.ad5 < 2.0) {
      this.finData.aDscr = 2;
    } else if (data.ad5 >= 1.0 && data.ad5 <= 1.5) {
      this.finData.aDscr = 3;
    } else if (data.ad5 <= 1.0) {
      this.finData.aDscr = 4;
    } else {
      this.finData.aDscr = 'NB';
    }

    if (data.ai5 >= 3.0) {
      this.finData.aIscr = 1;
    } else if (data.ai5 >= 2.0 && data.ai5 < 3.0) {
      this.finData.aIscr = 2;
    } else if (data.ai5 >= 1.5 && data.ai5 <= 2.0) {
      this.finData.aIscr = 3;
    } else if (data.ai5 >= 1.0 && data.ai5 <= 1.5) {
      this.finData.aIscr = 4;
    } else if (data.ai5 <= 1.0) {
      this.finData.aIscr = 5;
    }

    // if (parseFloat(data.rp2) >= 15) {
    //   this.finData.roce = 1;
    // } else if (parseFloat(data.rp2) >= 10 && parseFloat(data.rp2) < 15) {
    //   this.finData.roce = 2;
    // } else if (parseFloat(data.rp2) >= 5 && parseFloat(data.rp2) <= 10) {
    //   this.finData.roce = 3;
    // } else if (parseFloat(data.rp2) <= 5) {
    //   this.finData.roce = 4;
    // } else {
    //   this.finData.roce = 'NB';
    // }
    this.updateData();
  }

  updateData() {
   this.finData._derL = this.finData.derL * 4;
   this.finData._derC = this.finData.derC * 6;
   this.finData._derN = this.finData.derN * 6;

   this.finData._crL = this.finData.crL * 2;
   this.finData._crC = this.finData.crC * 3;
   this.finData._crN = this.finData.crN * 3;

   this.finData._srg = this.finData.srg * 2;

   this.finData._aDscr = this.finData.aDscr * 8;
   this.finData._aIscr = this.finData.aIscr * 4;

   this.finData._dc = this.finData.dc * 3;

   this.finData._sr = this.finData.sr * 3;
   this.finData._roce = this.finData.roce * 3;

  let total =
    this.finData._derL +
    this.finData._derC +
    this.finData._derN +
    this.finData._crL +
    this.finData._crC +
    this.finData._crN +
    this.finData._aDscr +
    this.finData._aIscr +
    this.finData._roce +
    this.finData._sr +
    this.finData._srg +
    this.finData._dc;
  this.allTotal = total;
  }

  GoToNext(data) {
    let c_id = localStorage.getItem('c_id');
    let year = localStorage.getItem('year');
    var jsdata = JSON.stringify(data);

    var fd = new FormData();
    fd.append('action_id', 'SAVE_FIN_ANA');
    fd.append('c_id', c_id);
    fd.append('year', year);
    fd.append('data', jsdata);

    this.ds.SaveStep2(fd).subscribe((res) => {
      console.log(res);
      if (res == true) {
        this.router.navigateByUrl('/ManApp');
      }
    });
  }
}
