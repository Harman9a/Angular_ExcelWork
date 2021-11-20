import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-kfr',
  templateUrl: './kfr.component.html',
  styleUrls: ['./kfr.component.css'],
})
export class KfrComponent implements OnInit {
  id: any;
  c_id: any;
  data: any;
  data2: any;
  result: any;
  arr: [];

  sc1: number = 0;
  sc2: number = 0;
  sc3: number = 0;
  sc4: number = 0;
  sc5: number = 0;
  sc6: number = 0;
  sc7: number = 0;
  sc8: number = 0;
  nw1: number = 0;
  nw2: number = 0;
  nw3: number = 0;
  nw4: number = 0;
  nw5: number = 0;
  nw6: number = 0;
  nw7: number = 0;
  nw8: number = 0;
  nb1: number = 0;
  nb2: number = 0;
  nb3: number = 0;
  nb4: number = 0;
  nb5: number = 0;
  nb6: number = 0;
  nb7: number = 0;
  nb8: number = 0;
  ns1: number = 0;
  ns2: number = 0;
  ns3: number = 0;
  ns4: number = 0;
  ns5: number = 0;
  ns6: number = 0;
  ns7: number = 0;
  ns8: number = 0;
  is1: any = 0;
  is2: any = 0;
  is3: any = 0;
  is4: any = 0;
  is5: any = 0;
  is6: any = 0;
  is7: any = 0;
  is8: any = 0;
  np1: number = 0;
  np2: number = 0;
  np3: number = 0;
  np4: number = 0;
  np5: number = 0;
  np6: number = 0;
  np7: number = 0;
  np8: number = 0;
  dp1: number = 0;
  dp2: number = 0;
  dp3: number = 0;
  dp4: number = 0;
  dp5: number = 0;
  dp6: number = 0;
  dp7: number = 0;
  dp8: number = 0;
  ca1: number = 0;
  ca2: number = 0;
  ca3: number = 0;
  ca4: number = 0;
  ca5: number = 0;
  ca6: number = 0;
  ca7: number = 0;
  ca8: number = 0;
  pr1: any = 0;
  pr2: any = 0;
  pr3: any = 0;
  pr4: any = 0;
  pr5: any = 0;
  pr6: any = 0;
  pr7: any = 0;
  pr8: any = 0;
  rp1: any = 0;
  rp2: any = 0;
  rp3: any = 0;
  rp4: any = 0;
  rp5: any = 0;
  rp6: any = 0;
  rp7: any = 0;
  rp8: any = 0;
  as1: number = 0;
  as2: number = 0;
  as3: number = 0;
  as4: number = 0;
  as5: number = 0;
  as6: number = 0;
  as7: number = 0;
  as8: number = 0;
  cl1: number = 0;
  cl2: number = 0;
  cl3: number = 0;
  cl4: number = 0;
  cl5: number = 0;
  cl6: number = 0;
  cl7: number = 0;
  cl8: number = 0;
  cr1: number = 0;
  cr2: number = 0;
  cr3: number = 0;
  cr4: number = 0;
  cr5: number = 0;
  cr6: number = 0;
  cr7: number = 0;
  cr8: number = 0;
  dr1: number = 0;
  dr2: number = 0;
  dr3: number = 0;
  dr4: number = 0;
  dr5: number = 0;
  dr6: number = 0;
  dr7: number = 0;
  dr8: number = 0;
  ds1: number = 0;
  ds2: number = 0;
  ds3: number = 0;
  ds4: number = 0;
  ds5: number = 0;
  ds6: number = 0;
  ds7: number = 0;
  ds8: number = 0;
  ad1: number = 0;
  ad2: number = 0;
  ad3: number = 0;
  ad4: number = 0;
  ad5: number = 0;
  ad6: number = 0;
  ad7: number = 0;
  ad8: number = 0;
  ir1: number = 0;
  ir2: number = 0;
  ir3: number = 0;
  ir4: number = 0;
  ir5: number = 0;
  ir6: number = 0;
  ir7: number = 0;
  ir8: number = 0;
  ai1: number = 0;
  ai2: number = 0;
  ai3: number = 0;
  ai4: number = 0;
  ai5: number = 0;
  ai6: number = 0;
  ai7: number = 0;
  ai8: number = 0;
  dc1: number = 0;
  dc2: number = 0;
  dc3: number = 0;
  dc4: number = 0;
  dc5: number = 0;
  dc6: number = 0;
  dc7: number = 0;
  dc8: number = 0;
  td1: number = 0;
  td2: number = 0;
  td3: number = 0;
  td4: number = 0;
  td5: number = 0;
  td6: number = 0;
  td7: number = 0;
  td8: number = 0;
  th1: string;
  th2: string;
  th3: string;
  th4: string;
  th5: string;
  th6: string;
  th7: string;
  th8: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ds: DataService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getdata();
    this.getpfdata();
    this.getdidata();
    this.getisdata();
    this.getcdata();
  }
  update() {
    console.log('hi');
  }

  getdidata() {
    this.c_id = localStorage.getItem('c_id');
    this.ds.getdidata(this.c_id).subscribe((res) => {
      // console.log(res);
      this.ad5 = res.ad5;
      this.ds3 = res.ds3;
      this.ds4 = res.ds4;
      this.ds5 = res.ds5;
      this.ds6 = res.ds6;
      this.ds7 = res.ds7;
      this.ds8 = res.ds8;
    });
  }

  getisdata() {
    this.c_id = localStorage.getItem('c_id');
    this.ds.getisdata(this.c_id).subscribe((res) => {
      // console.log(res);
      this.ai5 = res.ai5;
      this.ir3 = res.ds3;
      this.ir4 = res.ds4;
      this.ir5 = res.ds5;
      this.ir6 = res.ds6;
      this.ir7 = res.ds7;
      this.ir8 = res.ds8;
    });
  }
  getpfdata() {
    this.c_id = localStorage.getItem('c_id');
    this.ds.getpfdata(this.c_id).subscribe((res) => {
      this.data = res;
      this.ns1 = this.data.t1;
      this.ns2 = this.data.t2;
      this.ns3 = this.data.t3;
      this.ns4 = this.data.t4;
      this.ns5 = this.data.t5;
      this.ns6 = this.data.t6;
      this.ns7 = this.data.t7;
      this.ns8 = this.data.t8;
      this.np1 = this.data.np1;
      this.np2 = this.data.np2;
      this.np3 = this.data.np3;
      this.np4 = this.data.np4;
      this.np5 = this.data.np5;
      this.np6 = this.data.np6;
      this.np7 = this.data.np7;
      this.np8 = this.data.np8;
      this.dp1 = this.data.dp1;
      this.dp2 = this.data.dp2;
      this.dp3 = this.data.dp3;
      this.dp4 = this.data.dp4;
      this.dp5 = this.data.dp5;
      this.dp6 = this.data.dp6;
      this.dp7 = this.data.dp7;
      this.dp8 = this.data.dp8;
      console.log('NP :' + this.ns1 + 'NW ' + this.td1);

      this.dc1 = (this.td1 / this.ns1) * 365;
      this.dc2 = (this.td2 / this.ns2) * 365;
      this.dc3 = (this.td3 / this.ns3) * 365;
      this.dc4 = (this.td4 / this.ns4) * 365;
      this.dc5 = (this.td5 / this.ns5) * 365;
      this.dc6 = (this.td6 / this.ns6) * 365;
      this.dc7 = (this.td7 / this.ns7) * 365;
      this.dc8 = (this.td8 / this.ns8) * 365;

      this.dc1 = Math.round(this.dc1);
      this.dc2 = Math.round(this.dc2);
      this.dc3 = Math.round(this.dc3);
      this.dc4 = Math.round(this.dc4);
      this.dc5 = Math.round(this.dc5);
      this.dc6 = Math.round(this.dc6);
      this.dc7 = Math.round(this.dc7);
      this.dc8 = Math.round(this.dc8);

      this.is2 = ((this.ns2 - this.ns1) / this.ns1) * 100;
      this.is3 = ((this.ns3 - this.ns2) / this.ns2) * 100;
      this.is4 = ((this.ns4 - this.ns3) / this.ns3) * 100;
      this.is5 = ((this.ns5 - this.ns4) / this.ns4) * 100;
      this.is6 = ((this.ns6 - this.ns5) / this.ns5) * 100;
      this.is7 = ((this.ns7 - this.ns6) / this.ns6) * 100;
      this.is8 = ((this.ns8 - this.ns7) / this.ns7) * 100;

      this.is2 = Math.round(this.is2) + '%';
      this.is3 = Math.round(this.is3) + '%';

      this.is4 = Math.round(this.is4) + '%';
      this.is5 = Math.round(this.is5) + '%';
      this.is6 = Math.round(this.is6) + '%';
      this.is7 = Math.round(this.is7) + '%';
      this.is8 = Math.round(this.is8) + '%';

      this.ca1 = this.np1 + this.dp1;
      this.ca2 = this.np2 + this.dp2;
      this.ca3 = this.np3 + this.dp3;
      this.ca4 = this.np4 + this.dp4;
      this.ca5 = this.np5 + this.dp5;
      this.ca6 = this.np6 + this.dp6;
      this.ca7 = this.np7 + this.dp7;
      this.ca8 = this.np8 + this.dp8;

      this.ca1 = Math.round((this.ca1 + Number.EPSILON) * 100) / 100;
      this.ca2 = Math.round((this.ca2 + Number.EPSILON) * 100) / 100;
      this.ca3 = Math.round((this.ca3 + Number.EPSILON) * 100) / 100;
      this.ca4 = Math.round((this.ca4 + Number.EPSILON) * 100) / 100;
      this.ca5 = Math.round((this.ca5 + Number.EPSILON) * 100) / 100;
      this.ca6 = Math.round((this.ca6 + Number.EPSILON) * 100) / 100;
      this.ca7 = Math.round((this.ca7 + Number.EPSILON) * 100) / 100;
      this.ca8 = Math.round((this.ca8 + Number.EPSILON) * 100) / 100;

      this.pr1 = (this.np1 / this.ns1) * 100;
      this.pr2 = (this.np2 / this.ns2) * 100;
      this.pr3 = (this.np3 / this.ns3) * 100;
      this.pr4 = (this.np4 / this.ns4) * 100;
      this.pr5 = (this.np5 / this.ns5) * 100;
      this.pr6 = (this.np6 / this.ns6) * 100;
      this.pr7 = (this.np7 / this.ns7) * 100;
      this.pr8 = (this.np8 / this.ns8) * 100;

      this.pr1 = Math.round((this.pr1 + Number.EPSILON) * 100) / 100 + '%';
      this.pr2 = Math.round((this.pr2 + Number.EPSILON) * 100) / 100 + '%';
      this.pr3 = Math.round((this.pr3 + Number.EPSILON) * 100) / 100 + '%';
      this.pr4 = Math.round((this.pr4 + Number.EPSILON) * 100) / 100 + '%';
      this.pr5 = Math.round((this.pr5 + Number.EPSILON) * 100) / 100 + '%';
      this.pr6 = Math.round((this.pr6 + Number.EPSILON) * 100) / 100 + '%';
      this.pr7 = Math.round((this.pr7 + Number.EPSILON) * 100) / 100 + '%';
      this.pr8 = Math.round((this.pr8 + Number.EPSILON) * 100) / 100 + '%';

      this.rp1 = this.np1 / this.nw1 * 100;
      this.rp2 = this.np2 / this.nw2 * 100;
      this.rp3 = this.np3 / this.nw3 * 100;
      this.rp4 = this.np4 / this.nw4 * 100;
      this.rp5 = this.np5 / this.nw5 * 100;
      this.rp6 = this.np6 / this.nw6 * 100;
      this.rp7 = this.np7 / this.nw7 * 100;
      this.rp8 = this.np8 / this.nw8 * 100;

      this.rp1 = this.rp1.toFixed(2) + '%';
      this.rp2 = this.rp2.toFixed(2) + '%';
      this.rp3 = this.rp3.toFixed(2) + '%';
      this.rp4 = this.rp4.toFixed(2) + '%';
      this.rp5 = this.rp5.toFixed(2) + '%';
      this.rp6 = this.rp6.toFixed(2) + '%';
      this.rp7 = this.rp7.toFixed(2) + '%';
      this.rp8 = this.rp8.toFixed(2) + '%';
    });
  }

  getdata() {
    this.c_id = localStorage.getItem('c_id');

    this.ds.getdata(this.c_id).subscribe((response) => {
      this.result = response;

      this.td1 = this.result.td1;
      this.td2 = this.result.td2;
      this.td3 = this.result.td3;
      this.td4 = this.result.td4;
      this.td5 = this.result.td5;
      this.td6 = this.result.td6;
      this.td7 = this.result.td7;
      this.td8 = this.result.td8;
      this.th1 = this.result.th1;
      this.th8 = this.result.th8;
      this.th2 = this.result.th2;
      this.th3 = this.result.th3;
      this.th4 = this.result.th4;
      this.th5 = this.result.th5;
      this.th6 = this.result.th6;
      this.th7 = this.result.th7;

      this.sc1 = this.result.ac1;
      this.sc2 = this.result.ac2;
      this.sc3 = this.result.ac3;
      this.sc4 = this.result.ac4;
      this.sc5 = this.result.ac5;
      this.sc6 = this.result.ac6;
      this.sc7 = this.result.ac7;
      this.sc8 = this.result.ac8;
      this.nb1 = this.result.fa1;
      this.nb2 = this.result.fa2;
      this.nb3 = this.result.fa3;
      this.nb4 = this.result.fa4;
      this.nb5 = this.result.fa5;
      this.nb6 = this.result.fa6;
      this.nb7 = this.result.fa7;
      this.nb8 = this.result.fa8;
      this.as1 = this.result.tca1;
      this.as2 = this.result.tca2;
      this.as3 = this.result.tca3;
      this.as4 = this.result.tca4;
      this.as5 = this.result.tca5;
      this.as6 = this.result.tca6;
      this.as7 = this.result.tca7;
      this.as8 = this.result.tca8;
      this.cl1 = this.result.t1;
      this.cl2 = this.result.t2;
      this.cl3 = this.result.t3;
      this.cl4 = this.result.t4;
      this.cl5 = this.result.t5;
      this.cl6 = this.result.t6;
      this.cl7 = this.result.t7;
      this.cl8 = this.result.t8;

      this.cr1 = this.as1 / this.cl1;
      this.cr2 = this.as2 / this.cl2;
      this.cr3 = this.as3 / this.cl3;
      this.cr4 = this.as4 / this.cl4;
      this.cr5 = this.as5 / this.cl5;
      this.cr6 = this.as6 / this.cl6;
      this.cr7 = this.as7 / this.cl7;
      this.cr8 = this.as8 / this.cl8;

      this.cr1 = Math.round((this.cr1 + Number.EPSILON) * 100) / 100;
      this.cr2 = Math.round((this.cr2 + Number.EPSILON) * 100) / 100;
      this.cr3 = Math.round((this.cr3 + Number.EPSILON) * 100) / 100;
      this.cr4 = Math.round((this.cr4 + Number.EPSILON) * 100) / 100;
      this.cr5 = Math.round((this.cr5 + Number.EPSILON) * 100) / 100;
      this.cr6 = Math.round((this.cr6 + Number.EPSILON) * 100) / 100;
      this.cr7 = Math.round((this.cr7 + Number.EPSILON) * 100) / 100;
      this.cr8 = Math.round((this.cr8 + Number.EPSILON) * 100) / 100;

      this.nw1 = this.result.ac1 + this.result.bc1 + this.result.cc1;
      this.nw2 = this.result.ac2 + this.result.bc2 + this.result.cc2;
      this.nw3 = this.result.ac3 + this.result.bc3 + this.result.cc3;
      this.nw4 = this.result.ac4 + this.result.bc4 + this.result.cc4;
      this.nw5 = this.result.ac5 + this.result.bc5 + this.result.cc5;
      this.nw6 = this.result.ac6 + this.result.bc6 + this.result.cc6;
      this.nw7 = this.result.ac7 + this.result.bc7 + this.result.cc7;
      this.nw8 = this.result.ac8 + this.result.bc8 + this.result.cc8;

      this.dr1 = (this.result.t1 + this.result.tm1) / this.result.tc1;
      this.dr2 = (this.result.t2 + this.result.tm2) / this.result.tc2;
      this.dr3 = (this.result.t3 + this.result.tm3) / this.result.tc3;
      this.dr4 = (this.result.t4 + this.result.tm4) / this.result.tc4;
      this.dr5 = (this.result.t5 + this.result.tm5) / this.result.tc5;
      this.dr6 = (this.result.t6 + this.result.tm6) / this.result.tc6;
      this.dr7 = (this.result.t7 + this.result.tm7) / this.result.tc7;
      this.dr8 = (this.result.t8 + this.result.tm8) / this.result.tc8;

      this.dr1 = Math.round((this.dr1 + Number.EPSILON) * 100) / 100;
      this.dr2 = Math.round((this.dr2 + Number.EPSILON) * 100) / 100;
      this.dr3 = Math.round((this.dr3 + Number.EPSILON) * 100) / 100;
      this.dr4 = Math.round((this.dr4 + Number.EPSILON) * 100) / 100;
      this.dr5 = Math.round((this.dr5 + Number.EPSILON) * 100) / 100;
      this.dr6 = Math.round((this.dr6 + Number.EPSILON) * 100) / 100;
      this.dr7 = Math.round((this.dr7 + Number.EPSILON) * 100) / 100;
      this.dr8 = Math.round((this.dr8 + Number.EPSILON) * 100) / 100;
    });
  }

  getcdata() {
    this.c_id = localStorage.getItem('c_id');

    this.ds.getcdata(this.c_id).subscribe((response) => {
      console.log(response);

      this.arr = response;
      for (var i = 0; i <= this.arr.length; i++) {
        //console.log(response[i]['user_name']);
        if (this.arr[i]['facility'] == 'Floating') {
          var element = document.getElementById('dscr');
          element.classList.add('hide');

          var element2 = document.getElementById('dscr2');
          element2.classList.add('show');
          var element3 = document.getElementById('dscr3');
          element3.classList.add('hide');

          var element4 = document.getElementById('dscr4');
          element4.classList.add('show');
        } else {
          var element2 = document.getElementById('dscr2');
          element2.classList.add('hide');
          var element = document.getElementById('dscr');
          element.classList.add('show');
          var element3 = document.getElementById('dscr3');
          element3.classList.add('show');

          var element4 = document.getElementById('dscr4');
          element4.classList.add('hide');
        }
      }
    });
  }

  printSheet = () => {
    var head = [];
    var body = [];

    if (this.id == 5) {
      head = [
        ['Demo 2', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        ['', this.th1, this.th2, this.th3, this.th4, this.th5, this.th6, this.th7, this.th8],
      ];
    } else if (this.id == 4) {
      head = [
        ['', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        ['', this.th1, this.th2, this.th3, this.th4, this.th5, this.th6, this.th7],
      ];
    } else if (this.id == 3) {
      head = [
        ['', '2019', '2020', '2021', '2022', '2023', '2024'],
        ['', this.th1, this.th2, this.th3, this.th4, this.th5, this.th6],
      ];
    } else if (this.id == 2) {
      head = [['', '2019', '2020', '2021', '2022', '2023']]
    } else {
      head = [
        ['', '2019', '2020', '2021', '2022']
      ];
    }

    if (this.id == 5) {
      body = [
        [
          'Share Capital (Equity)',
          this.sc1,
          this.sc2,
          this.sc3,
          this.sc4,
          this.sc5,
          this.sc6,
          this.sc7,
          this.sc8,
        ],
        [
          'Net Worth',
          this.nw1,
          this.nw2,
          this.nw3,
          this.nw4,
          this.nw5,
          this.nw6,
          this.nw7,
          this.nw8,
        ],
        [
          'Net Block',
          this.nb1,
          this.nb2,
          this.nb3,
          this.nb4,
          this.nb5,
          this.nb6,
          this.nb7,
          this.nb8,
        ],
        [
          'Net Sales',
          this.ns1,
          this.ns2,
          this.ns3,
          this.ns4,
          this.ns5,
          this.ns6,
          this.ns7,
          this.ns8,
        ],
        [
          'Increase in Sales ( % age )',
          this.is1,
          this.is2,
          this.is3,
          this.is4,
          this.is5,
          this.is6,
          this.is7,
          this.is8,
        ],
        [
          'Net Profit',
          this.np1,
          this.np2,
          this.np3,
          this.np4,
          this.np5,
          this.np6,
          this.np7,
          this.np8,
        ],
        [
          'Depreciation',
          this.dp1,
          this.dp2,
          this.dp3,
          this.dp4,
          this.dp5,
          this.dp6,
          this.dp7,
          this.dp8,
        ],
        [
          'Cash Accruals',
          this.ca1,
          this.ca2,
          this.ca3,
          this.ca4,
          this.ca5,
          this.ca6,
          this.ca7,
          this.ca8,
        ],
        [
          'Profitability Ratio : PAT/Net Sales',
          this.pr1,
          this.pr2,
          this.pr3,
          this.pr4,
          this.pr5,
          this.pr6,
          this.pr7,
          this.pr8,
        ],
        [
          'Return On Capital Employed (ROCE)',
          this.rp1,
          this.rp2,
          this.rp3,
          this.rp4,
          this.rp5,
          this.rp6,
          this.rp7,
          this.rp8,
        ],
        [
          'Current Assets',
          this.as1,
          this.as2,
          this.as3,
          this.as4,
          this.as5,
          this.as6,
          this.as7,
          this.as8,
        ],
        [
          'Current Liabilities',
          this.cl1,
          this.cl2,
          this.cl3,
          this.cl4,
          this.cl5,
          this.cl6,
          this.cl7,
          this.cl8,
        ],
        [
          'Current Ratio',
          this.cr1,
          this.cr2,
          this.cr3,
          this.cr4,
          this.cr5,
          this.cr6,
          this.cr7,
          this.cr8,
        ],
        [
          'Debt/Equity Ratio',
          this.dr1,
          this.dr2,
          this.dr3,
          this.dr4,
          this.dr5,
          this.dr6,
          this.dr7,
          this.dr8,
        ],
        [
          'Debt Service Coverage Ratio (DSCR)',
          this.ds1,
          this.ds2,
          this.ds3,
          this.ds4,
          this.ds5,
          this.ds6,
          this.ds7,
          this.ds8,
        ],
        [
          'DSCR ( Average )',
          { content: this.ad5, colSpan: 9, styles: { halign: 'center' } },
        ],
        [
          'Interest Service Coverage Ratio (ISCR)',
          this.ir1,
          this.ir2,
          this.ir3,
          this.ir4,
          this.ir5,
          this.ir6,
          this.ir7,
          this.ir8,
        ],
        [
          'ISCR ( Average )',
          { content: this.ai5, colSpan: 9, styles: { halign: 'center' } },
        ],
        [
          'Debt Collection Period (Days)',
          this.dc1,
          this.dc2,
          this.dc3,
          this.dc4,
          this.dc5,
          this.dc6,
          this.dc7,
          this.dc8,
        ],
      ];
    } else if (this.id == 4) {
      body = [
        [
          'Share Capital (Equity)',
          this.sc1,
          this.sc2,
          this.sc3,
          this.sc4,
          this.sc5,
          this.sc6,
          this.sc7,
        ],
        [
          'Net Worth',
          this.nw1,
          this.nw2,
          this.nw3,
          this.nw4,
          this.nw5,
          this.nw6,
          this.nw7,
        ],
        [
          'Net Block',
          this.nb1,
          this.nb2,
          this.nb3,
          this.nb4,
          this.nb5,
          this.nb6,
          this.nb7,
        ],
        [
          'Net Sales',
          this.ns1,
          this.ns2,
          this.ns3,
          this.ns4,
          this.ns5,
          this.ns6,
          this.ns7,
        ],
        [
          'Increase in Sales ( % age )',
          this.is1,
          this.is2,
          this.is3,
          this.is4,
          this.is5,
          this.is6,
          this.is7,
        ],
        [
          'Net Profit',
          this.np1,
          this.np2,
          this.np3,
          this.np4,
          this.np5,
          this.np6,
          this.np7,
        ],
        [
          'Depreciation',
          this.dp1,
          this.dp2,
          this.dp3,
          this.dp4,
          this.dp5,
          this.dp6,
          this.dp7,
        ],
        [
          'Cash Accruals',
          this.ca1,
          this.ca2,
          this.ca3,
          this.ca4,
          this.ca5,
          this.ca6,
          this.ca7,
        ],
        [
          'Profitability Ratio : PAT/Net Sales',
          this.pr1,
          this.pr2,
          this.pr3,
          this.pr4,
          this.pr5,
          this.pr6,
          this.pr7,
        ],
        [
          'Return On Capital Employed (ROCE)',
          this.rp1,
          this.rp2,
          this.rp3,
          this.rp4,
          this.rp5,
          this.rp6,
          this.rp7,
        ],
        [
          'Current Assets',
          this.as1,
          this.as2,
          this.as3,
          this.as4,
          this.as5,
          this.as6,
          this.as7,
        ],
        [
          'Current Liabilities',
          this.cl1,
          this.cl2,
          this.cl3,
          this.cl4,
          this.cl5,
          this.cl6,
          this.cl7,
        ],
        [
          'Current Ratio',
          this.cr1,
          this.cr2,
          this.cr3,
          this.cr4,
          this.cr5,
          this.cr6,
          this.cr7,
        ],
        [
          'Debt/Equity Ratio',
          this.dr1,
          this.dr2,
          this.dr3,
          this.dr4,
          this.dr5,
          this.dr6,
          this.dr7,
        ],
        [
          'Debt Service Coverage Ratio (DSCR)',
          this.ds1,
          this.ds2,
          this.ds3,
          this.ds4,
          this.ds5,
          this.ds6,
          this.ds7,
        ],
        [
          'DSCR ( Average )',
          { content: this.ad5, colSpan: 9, styles: { halign: 'center' } },
        ],
        [
          'Interest Service Coverage Ratio (ISCR)',
          this.ir1,
          this.ir2,
          this.ir3,
          this.ir4,
          this.ir5,
          this.ir6,
          this.ir7,
        ],
        [
          'ISCR ( Average )',
          { content: this.ai5, colSpan: 9, styles: { halign: 'center' } },
        ],
        [
          'Debt Collection Period (Days)',
          this.dc1,
          this.dc2,
          this.dc3,
          this.dc4,
          this.dc5,
          this.dc6,
          this.dc7,
        ],
      ];
    } else if (this.id == 3) {
      body = [
        [
          'Share Capital (Equity)',
          this.sc1,
          this.sc2,
          this.sc3,
          this.sc4,
          this.sc5,
          this.sc6,
        ],
        [
          'Net Worth',
          this.nw1,
          this.nw2,
          this.nw3,
          this.nw4,
          this.nw5,
          this.nw6,
        ],
        [
          'Net Block',
          this.nb1,
          this.nb2,
          this.nb3,
          this.nb4,
          this.nb5,
          this.nb6,
        ],
        [
          'Net Sales',
          this.ns1,
          this.ns2,
          this.ns3,
          this.ns4,
          this.ns5,
          this.ns6,
        ],
        [
          'Increase in Sales ( % age )',
          this.is1,
          this.is2,
          this.is3,
          this.is4,
          this.is5,
          this.is6,
        ],
        [
          'Net Profit',
          this.np1,
          this.np2,
          this.np3,
          this.np4,
          this.np5,
          this.np6,
        ],
        [
          'Depreciation',
          this.dp1,
          this.dp2,
          this.dp3,
          this.dp4,
          this.dp5,
          this.dp6,
        ],
        [
          'Cash Accruals',
          this.ca1,
          this.ca2,
          this.ca3,
          this.ca4,
          this.ca5,
          this.ca6,
        ],
        [
          'Profitability Ratio : PAT/Net Sales',
          this.pr1,
          this.pr2,
          this.pr3,
          this.pr4,
          this.pr5,
          this.pr6,
        ],
        [
          'Return On Capital Employed (ROCE)',
          this.rp1,
          this.rp2,
          this.rp3,
          this.rp4,
          this.rp5,
          this.rp6,
        ],
        [
          'Current Assets',
          this.as1,
          this.as2,
          this.as3,
          this.as4,
          this.as5,
          this.as6,
        ],
        [
          'Current Liabilities',
          this.cl1,
          this.cl2,
          this.cl3,
          this.cl4,
          this.cl5,
          this.cl6,
        ],
        [
          'Current Ratio',
          this.cr1,
          this.cr2,
          this.cr3,
          this.cr4,
          this.cr5,
          this.cr6,
        ],
        [
          'Debt/Equity Ratio',
          this.dr1,
          this.dr2,
          this.dr3,
          this.dr4,
          this.dr5,
          this.dr6,
        ],
        [
          'Debt Service Coverage Ratio (DSCR)',
          this.ds1,
          this.ds2,
          this.ds3,
          this.ds4,
          this.ds5,
          this.ds6,
        ],
        [
          'DSCR ( Average )',
          { content: this.ad5, colSpan: 9, styles: { halign: 'center' } },
        ],
        [
          'Interest Service Coverage Ratio (ISCR)',
          this.ir1,
          this.ir2,
          this.ir3,
          this.ir4,
          this.ir5,
          this.ir6,
        ],
        [
          'ISCR ( Average )',
          { content: this.ai5, colSpan: 9, styles: { halign: 'center' } },
        ],
        [
          'Debt Collection Period (Days)',
          this.dc1,
          this.dc2,
          this.dc3,
          this.dc4,
          this.dc5,
          this.dc6,
        ],
      ];
    } else if (this.id == 2) {
      body = [
        [
          'Share Capital (Equity)',
          this.sc1,
          this.sc2,
          this.sc3,
          this.sc4,
          this.sc5,
        ],
        ['Net Worth', this.nw1, this.nw2, this.nw3, this.nw4, this.nw5],
        ['Net Block', this.nb1, this.nb2, this.nb3, this.nb4, this.nb5],
        ['Net Sales', this.ns1, this.ns2, this.ns3, this.ns4, this.ns5],
        [
          'Increase in Sales ( % age )',
          this.is1,
          this.is2,
          this.is3,
          this.is4,
          this.is5,
        ],
        ['Net Profit', this.np1, this.np2, this.np3, this.np4, this.np5],
        ['Depreciation', this.dp1, this.dp2, this.dp3, this.dp4, this.dp5],
        ['Cash Accruals', this.ca1, this.ca2, this.ca3, this.ca4, this.ca5],
        [
          'Profitability Ratio : PAT/Net Sales',
          this.pr1,
          this.pr2,
          this.pr3,
          this.pr4,
          this.pr5,
        ],
        [
          'Return On Capital Employed (ROCE)',
          this.rp1,
          this.rp2,
          this.rp3,
          this.rp4,
          this.rp5,
        ],
        ['Current Assets', this.as1, this.as2, this.as3, this.as4, this.as5],
        [
          'Current Liabilities',
          this.cl1,
          this.cl2,
          this.cl3,
          this.cl4,
          this.cl5,
        ],
        ['Current Ratio', this.cr1, this.cr2, this.cr3, this.cr4, this.cr5],
        ['Debt/Equity Ratio', this.dr1, this.dr2, this.dr3, this.dr4, this.dr5],
        [
          'Debt Service Coverage Ratio (DSCR)',
          this.ds1,
          this.ds2,
          this.ds3,
          this.ds4,
          this.ds5,
        ],
        [
          'DSCR ( Average )',
          { content: this.ad5, colSpan: 9, styles: { halign: 'center' } },
        ],
        [
          'Interest Service Coverage Ratio (ISCR)',
          this.ir1,
          this.ir2,
          this.ir3,
          this.ir4,
          this.ir5,
        ],
        [
          'ISCR ( Average )',
          { content: this.ai5, colSpan: 9, styles: { halign: 'center' } },
        ],
        [
          'Debt Collection Period (Days)',
          this.dc1,
          this.dc2,
          this.dc3,
          this.dc4,
          this.dc5,
        ],
      ];
    } else {
      body = [
        ['Share Capital (Equity)', this.sc1, this.sc2, this.sc3, this.sc4],
        ['Net Worth', this.nw1, this.nw2, this.nw3, this.nw4],
        ['Net Block', this.nb1, this.nb2, this.nb3, this.nb4],
        ['Net Sales', this.ns1, this.ns2, this.ns3, this.ns4],
        ['Increase in Sales ( % age )', this.is1, this.is2, this.is3, this.is4],
        ['Net Profit', this.np1, this.np2, this.np3, this.np4],
        ['Depreciation', this.dp1, this.dp2, this.dp3, this.dp4],
        ['Cash Accruals', this.ca1, this.ca2, this.ca3, this.ca4],
        [
          'Profitability Ratio : PAT/Net Sales',
          this.pr1,
          this.pr2,
          this.pr3,
          this.pr4,
        ],
        [
          'Return On Capital Employed (ROCE)',
          this.rp1,
          this.rp2,
          this.rp3,
          this.rp4,
        ],
        ['Current Assets', this.as1, this.as2, this.as3, this.as4],
        ['Current Liabilities', this.cl1, this.cl2, this.cl3, this.cl4],
        ['Current Ratio', this.cr1, this.cr2, this.cr3, this.cr4],
        ['Debt/Equity Ratio', this.dr1, this.dr2, this.dr3, this.dr4],
        [
          'Debt Service Coverage Ratio (DSCR)',
          this.ds1,
          this.ds2,
          this.ds3,
          this.ds4,
        ],
        [
          'DSCR ( Average )',
          { content: this.ad4, colSpan: 9, styles: { halign: 'center' } },
        ],
        [
          'Interest Service Coverage Ratio (ISCR)',
          this.ir1,
          this.ir2,
          this.ir3,
          this.ir4,
        ],
        [
          'ISCR ( Average )',
          { content: this.ai4, colSpan: 9, styles: { halign: 'center' } },
        ],
        [
          'Debt Collection Period (Days)',
          this.dc1,
          this.dc2,
          this.dc3,
          this.dc4,
        ],
      ];
    }

    let TotalCell = parseInt(this.id) + 3;
    console.log(TotalCell);

    var doc = new jsPDF();
    doc.rect(10, 10, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 20, 'S');
    doc.text('Key Financials and Ratios', 80, 35);
    doc.setFontSize(9);
    doc.text('Kyats in Mill', 178, 35);
    // doc.autoTable({theme:'grid',head :head , body: body , styles: {overflow: 'linebreak',fontSize: 5}}) // one page
    // doc.autoTable({ theme: 'grid', head: head, body: body })
    autoTable(doc, { theme: 'grid', head: head, body: body , margin: { top: 50 }});
    // Save
    doc.save('KeyFinancials.pdf');
  };
  GoHome(){
    this.router.navigateByUrl('/dashbord');
  }

  savedata=(val) =>{
    this.c_id =localStorage.getItem('c_id');
    var jsdata = JSON.stringify(val);
    var fd = new FormData();
    fd.append("id",this.id );
    fd.append("action_id",'SAVE_KFR' );
    fd.append("a1",jsdata);
    fd.append("c_id",this.c_id);
    this.ds.addkfr(fd).subscribe((data)=>{
    if(data == 1){
      console.log(data)
    }});
  }


}
