import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

interface RowElementsInterface {
  allTotal: any;
  allTotal1: any;
  allTotal2: any;
  allTotalA: any;
}

interface ratingInter {
  cma: any;
  cmb: any;
  cmc: any;
}


@Component({
  selector: 'app-frat-report',
  templateUrl: './frat-report.component.html',
  styleUrls: ['./frat-report.component.css'],
})
export class FRatReportComponent implements OnInit {
  constructor(private ds: DataService, private router: Router) {}

  fData = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
  };

  CRRno = 0;
  CRRname = '';
  SuperRating: ratingInter = {
    cma: '',
    cmb: '',
    cmc: '',
  };

  current_date =
    new Date().getDate() +
    '/' +
    new Date().getMonth() +
    '/' +
    new Date().getFullYear();
  current_date2 =
    new Date().getDate() +
    ' ' +
    [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ][new Date().getMonth()] +
    ' ' +
    new Date().getFullYear();

  finData: RowElementsInterface = {
    allTotal: '',
    allTotal1: '',
    allTotal2: '',
    allTotalA: '',
  };
  ngOnInit(): void {
    console.log(this.current_date2);
    this.getData();
  }

  getData() {
    var fd = new FormData();
    let c_id = localStorage.getItem('c_id');
    fd.append('c_id', c_id);
    fd.append('action_id', 'CHECK_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
      this.finData = JSON.parse(res[0].iScore);
      this.SuperRating = JSON.parse(res[0].SuperRating);
      console.log(this.finData);
      this.updateData(JSON.parse(res[0].iScore));
    });
  }

  updateData(iScore) {
    if (iScore.allTotalA < 35) {
      this.fData.a = true;
      this.CRRno = 1;
      this.CRRname = 'Highest';
    } else if (iScore.allTotalA >= 35 && iScore.allTotalA < 40) {
      this.fData.b = true;
      this.CRRno = 2;
      this.CRRname = 'High';
    } else if (iScore.allTotalA >= 40 && iScore.allTotalA < 45) {
      this.fData.c = true;
      this.CRRno = 3;
      this.CRRname = 'Good';
    } else if (iScore.allTotalA >= 45 && iScore.allTotalA < 55) {
      this.fData.d = true;
      this.CRRno = 4;
      this.CRRname = 'Above Average';
    } else if (iScore.allTotalA >= 55 && iScore.allTotalA < 60) {
      this.fData.e = true;
      this.CRRno = 5;
      this.CRRname = 'Average';
    } else if (iScore.allTotalA >= 60 && iScore.allTotalA < 65) {
      this.fData.f = true;
      this.CRRno = 6;
      this.CRRname = 'Below Average';
    } else if (iScore.allTotalA >= 65 && iScore.allTotalA < 70) {
      this.fData.g = true;
      this.CRRno = 6;
      this.CRRname = 'Weak';
    } else if (iScore.allTotalA > 70) {
      this.fData.h = true;
      this.CRRno = 8;
      this.CRRname = 'Poor';
    }
  }

  GoToNext() {
    this.router.navigateByUrl('/sheetParts');
  }
}
