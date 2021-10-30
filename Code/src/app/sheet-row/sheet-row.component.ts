import { Component, Input } from '@angular/core';
import { SheetData } from '../model/sheetData.model';
import { Store } from '@ngrx/store';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface RowElementsInterface {
  value: number;
  name: string;
}

interface RowInterface extends Array<RowElementsInterface> {}

@Component({
  selector: 'app-sheet-row',
  templateUrl: './sheet-row.component.html',
  styleUrls: ['./sheet-row.component.css'],
})
export class SheetRowComponent {
  //Liabilities variables
  a1: number = 0;
  a2: number = 0;
  a3: number = 0;
  a4: number = 0;
  a5: number = 0;
  a6: number = 0;
  a7: number = 0;
  a8: number = 0;
  b1: number = 0;
  b2: number = 0;
  b3: number = 0;
  b4: number = 0;
  b5: number = 0;
  b6: number = 0;
  b7: number = 0;
  b8: number = 0;
  c1: number = 0;
  c2: number = 0;
  c3: number = 0;
  c4: number = 0;
  c5: number = 0;
  c6: number = 0;
  c7: number = 0;
  c8: number = 0;
  d1: number = 0;
  d2: number = 0;
  d3: number = 0;
  d4: number = 0;
  d5: number = 0;
  d6: number = 0;
  d7: number = 0;
  d8: number = 0;
  e1: number = 0;
  e2: number = 0;
  e3: number = 0;
  e4: number = 0;
  e5: number = 0;
  e6: number = 0;
  e7: number = 0;
  e8: number = 0;
  f1: number = 0;
  f2: number = 0;
  f3: number = 0;
  f4: number = 0;
  f5: number = 0;
  f6: number = 0;
  f7: number = 0;
  f8: number = 0;
  g1: number = 0;
  g2: number = 0;
  g3: number = 0;
  g4: number = 0;
  g5: number = 0;
  g6: number = 0;
  g7: number = 0;
  g8: number = 0;
  h1: number = 0;
  h2: number = 0;
  h3: number = 0;
  h4: number = 0;
  h5: number = 0;
  h6: number = 0;
  h7: number = 0;
  h8: number = 0;
  t1: number = 0;
  t2: number = 0;
  t3: number = 0;
  t4: number = 0;
  t5: number = 0;
  t6: number = 0;
  t7: number = 0;
  t8: number = 0;

  am1: number = 0;
  am2: number = 0;
  am3: number = 0;
  am4: number = 0;
  am5: number = 0;
  am6: number = 0;
  am7: number = 0;
  am8: number = 0;
  bm1: number = 0;
  bm2: number = 0;
  bm3: number = 0;
  bm4: number = 0;
  bm5: number = 0;
  bm6: number = 0;
  bm7: number = 0;
  bm8: number = 0;
  cm1: number = 0;
  cm2: number = 0;
  cm3: number = 0;
  cm4: number = 0;
  cm5: number = 0;
  cm6: number = 0;
  cm7: number = 0;
  cm8: number = 0;
  dm1: number = 0;
  dm2: number = 0;
  dm3: number = 0;
  dm4: number = 0;
  dm5: number = 0;
  dm6: number = 0;
  dm7: number = 0;
  dm8: number = 0;
  em1: number = 0;
  em2: number = 0;
  em3: number = 0;
  em4: number = 0;
  em5: number = 0;
  em6: number = 0;
  em7: number = 0;
  em8: number = 0;

  tm1: number = 0;
  tm2: number = 0;
  tm3: number = 0;
  tm4: number = 0;
  tm5: number = 0;
  tm6: number = 0;
  tm7: number = 0;
  tm8: number = 0;

  ac1: number = 0;
  ac2: number = 0;
  ac3: number = 0;
  ac4: number = 0;
  ac5: number = 0;
  ac6: number = 0;
  ac7: number = 0;
  ac8: number = 0;
  bc1: number = 0;
  bc2: number = 0;
  bc3: number = 0;
  bc4: number = 0;
  bc5: number = 0;
  bc6: number = 0;
  bc7: number = 0;
  bc8: number = 0;
  cc1: number = 0;
  cc2: number = 0;
  cc3: number = 0;
  cc4: number = 0;
  cc5: number = 0;
  cc6: number = 0;
  cc7: number = 0;
  cc8: number = 0;
  dc1: number = 0;
  dc2: number = 0;
  dc3: number = 0;
  dc4: number = 0;
  dc5: number = 0;
  dc6: number = 0;
  dc7: number = 0;
  dc8: number = 0;

  tc1: number = 0;
  tc2: number = 0;
  tc3: number = 0;
  tc4: number = 0;
  tc5: number = 0;
  tc6: number = 0;
  tc7: number = 0;
  tc8: number = 0;
  tl1: number = 0;
  tl2: number = 0;
  tl3: number = 0;
  tl4: number = 0;
  tl5: number = 0;
  tl6: number = 0;
  tl7: number = 0;
  tl8: number = 0;

  //assets variables
  ch1: number = 0;
  ch2: number = 0;
  ch3: number = 0;
  ch4: number = 0;
  ch5: number = 0;
  ch6: number = 0;
  ch7: number = 0;
  ch8: number = 0;
  bb1: number = 0;
  bb2: number = 0;
  bb3: number = 0;
  bb4: number = 0;
  bb5: number = 0;
  bb6: number = 0;
  bb7: number = 0;
  bb8: number = 0;
  si1: number = 0;
  si2: number = 0;
  si3: number = 0;
  si4: number = 0;
  si5: number = 0;
  si6: number = 0;
  si7: number = 0;
  si8: number = 0;
  td1: number = 0;
  td2: number = 0;
  td3: number = 0;
  td4: number = 0;
  td5: number = 0;
  td6: number = 0;
  td7: number = 0;
  td8: number = 0;
  st1: number = 0;
  st2: number = 0;
  st3: number = 0;
  st4: number = 0;
  st5: number = 0;
  st6: number = 0;
  st7: number = 0;
  st8: number = 0;

  pe1: number = 0;
  pe2: number = 0;
  pe3: number = 0;
  pe4: number = 0;
  pe5: number = 0;
  pe6: number = 0;
  pe7: number = 0;
  pe8: number = 0;
  as1: number = 0;
  as2: number = 0;
  as3: number = 0;
  as4: number = 0;
  as5: number = 0;
  as6: number = 0;
  as7: number = 0;
  as8: number = 0;
  oa1: number = 0;
  oa2: number = 0;
  oa3: number = 0;
  oa4: number = 0;
  oa5: number = 0;
  oa6: number = 0;
  oa7: number = 0;
  oa8: number = 0;

  tca1: number = 0;
  tca2: number = 0;
  tca3: number = 0;
  tca4: number = 0;
  tca5: number = 0;
  tca6: number = 0;
  tca7: number = 0;
  tca8: number = 0;

  fa1: number = 0;
  fa2: number = 0;
  fa3: number = 0;
  fa4: number = 0;
  fa5: number = 0;
  fa6: number = 0;
  fa7: number = 0;
  fa8: number = 0;
  lt1: number = 0;
  lt2: number = 0;
  lt3: number = 0;
  lt4: number = 0;
  lt5: number = 0;
  lt6: number = 0;
  lt7: number = 0;
  lt8: number = 0;
  on1: number = 0;
  on2: number = 0;
  on3: number = 0;
  on4: number = 0;
  on5: number = 0;
  on6: number = 0;
  on7: number = 0;
  on8: number = 0;

  tf1: number = 0;
  tf2: number = 0;
  tf3: number = 0;
  tf4: number = 0;
  tf5: number = 0;
  tf6: number = 0;
  tf7: number = 0;
  tf8: number = 0;

  gd1: number = 0;
  gd2: number = 0;
  gd3: number = 0;
  gd4: number = 0;
  gd5: number = 0;
  gd6: number = 0;
  gd7: number = 0;
  gd8: number = 0;
  pr1: number = 0;
  pr2: number = 0;
  pr3: number = 0;
  pr4: number = 0;
  pr5: number = 0;
  pr6: number = 0;
  pr7: number = 0;
  pr8: number = 0;
  oi1: number = 0;
  oi2: number = 0;
  oi3: number = 0;
  oi4: number = 0;
  oi5: number = 0;
  oi6: number = 0;
  oi7: number = 0;
  oi8: number = 0;

  ti1: number = 0;
  ti2: number = 0;
  ti3: number = 0;
  ti4: number = 0;
  ti5: number = 0;
  ti6: number = 0;
  ti7: number = 0;
  ti8: number = 0;
  ta1: number = 0;
  ta2: number = 0;
  ta3: number = 0;
  ta4: number = 0;
  ta5: number = 0;
  ta6: number = 0;
  ta7: number = 0;
  ta8: number = 0;
  th1: string;
  th2: string;
  th3: string;
  th4: string;
  th5: string;
  th6: string;
  th7: string;
  th8: string;
  bal1: number = 0;
  bal2: number = 0;
  bal3: number = 0;
  bal4: number = 0;
  bal5: number = 0;
  bal6: number = 0;
  bal7: number = 0;
  bal8: number = 0;

  id: any;
  data: any;
  c_id: any;
  data2: any;
  facility: any;

  @Input() year: any;
  @Input() no: number;
  @Input() Name: number;
  @Input() type: any;
  @Input() addFun: any;
  @Input() value: any;
  iptValue: number = 0;
  minCollValue: number = 3;
  collUsed = 6;
  TotalYears = 0;
  RowData: RowInterface = [];
  default_data: SheetData;
  pastYear: number = 2;
  arr = [];
  arr2 = [];
  title = [];
  titles: any;
  currentYear: number = 1;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<any>,
    private ds: DataService
  ) {
    this.store
      .select('sheet')
      .subscribe((state) => (this.default_data = state));
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.SetData();
    this.update();
    this.getdata();
  }

  getdata() {
    this.c_id = localStorage.getItem('c_id');
    this.ds.getdata(this.c_id).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      if (
        this.data.a1 ||
        this.data.a2 ||
        this.data.a3 ||
        this.data.a4 ||
        this.data.a5 ||
        this.data.a6 ||
        this.data.a7 ||
        this.data.a8 ||
        this.data.b1 ||
        this.data.b2 ||
        this.data.b3 ||
        this.data.b4 ||
        this.data.b5 ||
        this.data.b6 ||
        this.data.b7 ||
        this.data.b8 ||
        this.data.c1 ||
        this.data.c2 ||
        this.data.c3 ||
        this.data.c4 ||
        this.data.c5 ||
        this.data.c6 ||
        this.data.c7 ||
        this.data.c8 ||
        this.data.d1 ||
        this.data.d2 ||
        this.data.d3 ||
        this.data.d4 ||
        this.data.d5 ||
        this.data.d6 ||
        this.data.d7 ||
        this.data.d8 ||
        this.data.e1 ||
        this.data.e2 ||
        this.data.e3 ||
        this.data.e4 ||
        this.data.e5 ||
        this.data.e6 ||
        this.data.e7 ||
        this.data.e8 ||
        this.data.f1 ||
        this.data.f2 ||
        this.data.f3 ||
        this.data.f4 ||
        this.data.f5 ||
        this.data.f6 ||
        this.data.f7 ||
        this.data.f8 ||
        this.data.g1 ||
        this.data.g2 ||
        this.data.g3 ||
        this.data.g4 ||
        this.data.g5 ||
        this.data.g6 ||
        this.data.g7 ||
        this.data.g8 ||
        this.data.h1 ||
        this.data.h2 ||
        this.data.h3 ||
        this.data.h4 ||
        this.data.h5 ||
        this.data.h6 ||
        this.data.h7 ||
        this.data.h8 ||
        this.data.t1 ||
        this.data.t2 ||
        this.data.t3 ||
        this.data.t4 ||
        this.data.t5 ||
        this.data.t6 ||
        this.data.t7 ||
        this.data.t8 ||
        this.data.am1 ||
        this.data.am2 ||
        this.data.am3 ||
        this.data.am4 ||
        this.data.am5 ||
        this.data.am6 ||
        this.data.am7 ||
        this.data.am8 ||
        this.data.bm1 ||
        this.data.bm2 ||
        this.data.bm3 ||
        this.data.bm4 ||
        this.data.bm5 ||
        this.data.bm6 ||
        this.data.bm7 ||
        this.data.bm8 ||
        this.data.cm1 ||
        this.data.cm2 ||
        this.data.cm3 ||
        this.data.cm4 ||
        this.data.cm5 ||
        this.data.cm6 ||
        this.data.cm7 ||
        this.data.cm8 ||
        this.data.dm1 ||
        this.data.dm2 ||
        this.data.dm3 ||
        this.data.dm4 ||
        this.data.dm5 ||
        this.data.dm6 ||
        this.data.dm7 ||
        this.data.dm8 ||
        this.data.em1 ||
        this.data.em2 ||
        this.data.em3 ||
        this.data.em4 ||
        this.data.em5 ||
        this.data.em6 ||
        this.data.em7 ||
        this.data.em8 ||
        this.data.tm1 ||
        this.data.tm2 ||
        this.data.tm3 ||
        this.data.tm4 ||
        this.data.tm5 ||
        this.data.tm6 ||
        this.data.tm7 ||
        this.data.tm8 ||
        this.data.ac1 ||
        this.data.ac2 ||
        this.data.ac3 ||
        this.data.ac4 ||
        this.data.ac5 ||
        this.data.ac6 ||
        this.data.ac7 ||
        this.data.ac8 ||
        this.data.bc1 ||
        this.data.bc2 ||
        this.data.bc3 ||
        this.data.bc4 ||
        this.data.bc5 ||
        this.data.bc6 ||
        this.data.bc7 ||
        this.data.bc8 ||
        this.data.cc1 ||
        this.data.cc2 ||
        this.data.cc3 ||
        this.data.cc4 ||
        this.data.cc5 ||
        this.data.cc6 ||
        this.data.cc7 ||
        this.data.cc8 ||
        this.data.dc1 ||
        this.data.dc2 ||
        this.data.dc3 ||
        this.data.dc4 ||
        this.data.dc5 ||
        this.data.dc6 ||
        this.data.dc7 ||
        this.data.dc8 ||
        this.data.tc1 ||
        this.data.tc2 ||
        this.data.tc3 ||
        this.data.tc4 ||
        this.data.tc5 ||
        this.data.tc6 ||
        this.data.tc7 ||
        this.data.tc8 ||
        this.data.ti1 ||
        this.data.ti2 ||
        this.data.ti3 ||
        this.data.ti4 ||
        this.data.ti5 ||
        this.data.ti6 ||
        this.data.ti7 ||
        this.data.ti8 ||
        this.data.tl1 ||
        this.data.tl2 ||
        this.data.tl3 ||
        this.data.tl4 ||
        this.data.tl5 ||
        this.data.tl6 ||
        this.data.tl7 ||
        this.data.tl8 ||
        this.data.td1 ||
        this.data.td2 ||
        this.data.td3 ||
        this.data.td4 ||
        this.data.td5 ||
        this.data.td6 ||
        this.data.td7 ||
        this.data.td8 ||
        this.data.tf1 ||
        this.data.tf2 ||
        this.data.tf3 ||
        this.data.tf4 ||
        this.data.tf5 ||
        this.data.tf6 ||
        this.data.tf7 ||
        this.data.tf8 ||
        this.data.ch1 ||
        this.data.ch2 ||
        this.data.ch3 ||
        this.data.ch4 ||
        this.data.ch5 ||
        this.data.ch6 ||
        this.data.ch7 ||
        this.data.ch8 ||
        this.data.si1 ||
        this.data.si2 ||
        this.data.si3 ||
        this.data.si4 ||
        this.data.si5 ||
        this.data.si6 ||
        this.data.si7 ||
        this.data.si8 ||
        this.data.gd1 ||
        this.data.gd2 ||
        this.data.gd3 ||
        this.data.gd4 ||
        this.data.gd5 ||
        this.data.gd6 ||
        this.data.gd7 ||
        this.data.gd8 ||
        this.data.pr1 ||
        this.data.pr2 ||
        this.data.pr3 ||
        this.data.pr4 ||
        this.data.pr5 ||
        this.data.pr6 ||
        this.data.pr7 ||
        this.data.pr8 ||
        this.data.st1 ||
        this.data.st2 ||
        this.data.st3 ||
        this.data.st4 ||
        this.data.st5 ||
        this.data.st6 ||
        this.data.st7 ||
        this.data.st8 ||
        this.data.oi1 ||
        this.data.oi2 ||
        this.data.oi3 ||
        this.data.oi4 ||
        this.data.oi5 ||
        this.data.oi6 ||
        this.data.oi7 ||
        this.data.oi8 ||
        this.data.bb1 ||
        this.data.bb2 ||
        this.data.bb3 ||
        this.data.bb4 ||
        this.data.bb5 ||
        this.data.bb6 ||
        this.data.bb7 ||
        this.data.bb8 ||
        this.data.pe1 ||
        this.data.pe2 ||
        this.data.pe3 ||
        this.data.pe4 ||
        this.data.pe5 ||
        this.data.pe6 ||
        this.data.pe7 ||
        this.data.pe8 ||
        this.data.as1 ||
        this.data.as2 ||
        this.data.as3 ||
        this.data.as4 ||
        this.data.as5 ||
        this.data.as6 ||
        this.data.as7 ||
        this.data.as8 ||
        this.data.oa1 ||
        this.data.oa2 ||
        this.data.oa3 ||
        this.data.oa4 ||
        this.data.oa5 ||
        this.data.oa6 ||
        this.data.oa7 ||
        this.data.oa8 ||
        this.data.fa1 ||
        this.data.fa2 ||
        this.data.fa3 ||
        this.data.fa4 ||
        this.data.fa5 ||
        this.data.fa6 ||
        this.data.fa7 ||
        this.data.fa8 ||
        this.data.th1 ||
        this.data.th2 ||
        this.data.th3 ||
        this.data.th4 ||
        this.data.th5 ||
        this.data.th6 ||
        this.data.th7 ||
        this.data.th8 ||
        this.data.lt1 ||
        this.data.lt2 ||
        this.data.lt3 ||
        this.data.lt4 ||
        this.data.lt5 ||
        this.data.lt6 ||
        this.data.lt7 ||
        this.data.lt8 ||
        this.data.on1 ||
        this.data.on2 ||
        this.data.on3 ||
        this.data.on4 ||
        this.data.on5 ||
        this.data.on6 ||
        this.data.on7 ||
        this.data.on8 ||
        this.data.tca1 ||
        this.data.tca2 ||
        this.data.tca3 ||
        this.data.tca4 ||
        this.data.tca5 ||
        this.data.tca6 ||
        this.data.tca7 ||
        this.data.tca8 ||
        this.data.ta1 ||
        this.data.ta2 ||
        this.data.ta3 ||
        this.data.ta4 ||
        this.data.ta5 ||
        this.data.ta6 ||
        this.data.ta7 ||
        this.data.ta8 ||
        this.data.bal1 ||
        this.data.bal2 ||
        this.data.bal3 ||
        this.data.bal4 ||
        this.data.bal5 ||
        this.data.bal6 ||
        this.data.bal7 ||
        this.data.bal8
      ) {
        this.th1 = this.data.th1;
        this.th8 = this.data.th8;
        this.th2 = this.data.th2;
        this.th3 = this.data.th3;
        this.th4 = this.data.th4;
        this.th5 = this.data.th5;
        this.th6 = this.data.th6;
        this.th7 = this.data.th7;

        this.a1 = this.data.a1;
        this.a2 = this.data.a2;
        this.a3 = this.data.a3;
        this.a4 = this.data.a4;
        this.a5 = this.data.a5;
        this.a6 = this.data.a6;
        this.a7 = this.data.a7;
        this.a8 = this.data.a8;
        this.b1 = this.data.b1;
        this.b2 = this.data.b2;
        this.b3 = this.data.b3;
        this.b4 = this.data.b4;
        this.b5 = this.data.b5;
        this.b6 = this.data.b6;
        this.b7 = this.data.b7;
        this.b8 = this.data.b8;
        this.c1 = this.data.c1;
        this.c2 = this.data.c2;
        this.c3 = this.data.c3;
        this.c4 = this.data.c4;
        this.c5 = this.data.c5;
        this.c6 = this.data.c6;
        this.c7 = this.data.c7;
        this.c8 = this.data.c8;
        this.d1 = this.data.d1;
        this.d2 = this.data.d2;
        this.d3 = this.data.d3;
        this.d4 = this.data.d4;
        this.d5 = this.data.d5;
        this.d6 = this.data.d6;
        this.d7 = this.data.d7;
        this.d8 = this.data.d8;
        this.e1 = this.data.e1;
        this.e2 = this.data.e2;
        this.e3 = this.data.e3;
        this.e4 = this.data.e4;
        this.e5 = this.data.e5;
        this.e6 = this.data.e6;
        this.e7 = this.data.e7;
        this.e8 = this.data.e8;

        this.f1 = this.data.f1;
        this.f2 = this.data.f2;
        this.f3 = this.data.f3;
        this.f4 = this.data.f4;
        this.f5 = this.data.f5;
        this.f6 = this.data.f6;
        this.f7 = this.data.f7;
        this.f8 = this.data.f8;
        this.g1 = this.data.g1;
        this.g2 = this.data.g2;
        this.g3 = this.data.g3;
        this.g4 = this.data.g4;
        this.g5 = this.data.g5;
        this.g6 = this.data.g6;
        this.g7 = this.data.g7;
        this.g8 = this.data.g8;
        this.h1 = this.data.h1;
        this.h2 = this.data.h2;
        this.h3 = this.data.h3;
        this.h4 = this.data.h4;
        this.h5 = this.data.h5;
        this.h6 = this.data.h6;
        this.h7 = this.data.h7;
        this.h8 = this.data.h8;
        this.t1 = this.data.t1;
        this.t2 = this.data.t2;
        this.t3 = this.data.t3;
        this.t4 = this.data.t4;
        this.t5 = this.data.t5;
        this.t6 = this.data.t6;
        this.t7 = this.data.t7;
        this.t8 = this.data.t8;
        this.am1 = this.data.am1;
        this.am2 = this.data.am2;
        this.am3 = this.data.am3;
        this.am4 = this.data.am4;
        this.am5 = this.data.am5;
        this.am6 = this.data.am6;
        this.am7 = this.data.am7;
        this.am8 = this.data.am8;

        this.bm1 = this.data.bm1;
        this.bm2 = this.data.bm2;
        this.bm3 = this.data.bm3;
        this.bm4 = this.data.bm4;
        this.bm5 = this.data.bm5;
        this.bm6 = this.data.bm6;
        this.bm7 = this.data.bm7;
        this.bm8 = this.data.bm8;
        this.cm1 = this.data.cm1;
        this.cm2 = this.data.cm2;
        this.cm3 = this.data.cm3;
        this.cm4 = this.data.cm4;
        this.cm5 = this.data.cm5;
        this.cm6 = this.data.cm6;
        this.cm7 = this.data.cm7;
        this.cm8 = this.data.cm8;
        this.dm1 = this.data.dm1;
        this.dm2 = this.data.dm2;
        this.dm3 = this.data.dm3;
        this.dm4 = this.data.dm4;
        this.dm5 = this.data.dm5;
        this.dm6 = this.data.dm6;
        this.dm7 = this.data.dm7;
        this.dm8 = this.data.dm8;
        this.em1 = this.data.em1;
        this.em2 = this.data.em2;
        this.em3 = this.data.em3;
        this.em4 = this.data.em4;
        this.em5 = this.data.em5;
        this.em6 = this.data.em6;
        this.bm7 = this.data.bm7;
        this.em8 = this.data.em8;
        this.tm1 = this.data.tm1;
        this.tm2 = this.data.tm2;
        this.tm3 = this.data.tm3;
        this.tm4 = this.data.tm4;
        this.tm5 = this.data.tm5;
        this.tm6 = this.data.tm6;
        this.tm7 = this.data.tm7;
        this.tm8 = this.data.tm8;

        this.ac1 = this.data.ac1;
        this.ac2 = this.data.ac2;
        this.ac3 = this.data.ac3;
        this.ac4 = this.data.ac4;
        this.ac5 = this.data.ac5;
        this.ac6 = this.data.ac6;
        this.ac7 = this.data.ac7;
        this.ac8 = this.data.ac8;
        this.bc1 = this.data.bc1;
        this.bc2 = this.data.bc2;
        this.bc3 = this.data.bc3;
        this.bc4 = this.data.bc4;
        this.bc5 = this.data.bc5;
        this.bc6 = this.data.bc6;
        this.bc7 = this.data.bc7;
        this.bc8 = this.data.bc8;
        this.cc1 = this.data.cc1;
        this.cc2 = this.data.cc2;
        this.cc3 = this.data.cc3;
        this.cc4 = this.data.cc4;
        this.cc5 = this.data.cc5;
        this.cc6 = this.data.cc6;
        this.cc7 = this.data.cc7;
        this.cc8 = this.data.cc8;
        this.dc1 = this.data.dc1;
        this.dc2 = this.data.dc2;
        this.dc3 = this.data.dc3;
        this.dc4 = this.data.dc4;
        this.dc5 = this.data.dc5;
        this.dc6 = this.data.dc6;
        this.dc7 = this.data.dc7;
        this.dc8 = this.data.dc8;
        this.tc1 = this.data.tc1;
        this.tc2 = this.data.tc2;
        this.tc3 = this.data.tc3;
        this.tc4 = this.data.tc4;
        this.tc5 = this.data.tc5;
        this.tc6 = this.data.tc6;
        this.tc7 = this.data.tc7;
        this.tc8 = this.data.tc8;

        this.tl1 = this.data.tl1;
        this.tl2 = this.data.tl2;
        this.tl3 = this.data.tl3;
        this.tl4 = this.data.tl4;
        this.tl5 = this.data.tl5;
        this.tl6 = this.data.tl6;
        this.tl7 = this.data.tl7;
        this.tl8 = this.data.tl8;
        this.td1 = this.data.td1;
        this.td2 = this.data.td2;
        this.td3 = this.data.td3;
        this.td4 = this.data.td4;
        this.td5 = this.data.td5;
        this.td6 = this.data.td6;
        this.td7 = this.data.td7;
        this.td8 = this.data.td8;
        this.tf1 = this.data.tf1;
        this.tf2 = this.data.tf2;
        this.tf3 = this.data.tf3;
        this.tf4 = this.data.tf4;
        this.tf5 = this.data.tf5;
        this.tf6 = this.data.tf6;
        this.tf7 = this.data.tf7;
        this.tf8 = this.data.tf8;
        this.ta1 = this.data.ta1;
        this.ta2 = this.data.ta2;
        this.ta3 = this.data.ta3;
        this.ta4 = this.data.ta4;
        this.ta5 = this.data.ta5;
        this.ta6 = this.data.ta6;
        this.ta7 = this.data.ta7;
        this.ta8 = this.data.ta8;
        this.ch1 = this.data.ch1;
        this.ch2 = this.data.ch2;
        this.ch3 = this.data.ch3;
        this.ch4 = this.data.ch4;
        this.ch5 = this.data.ch5;
        this.ch6 = this.data.ch6;
        this.ch7 = this.data.ch7;
        this.ch8 = this.data.ch8;

        this.bb1 = this.data.bb1;
        this.bb2 = this.data.bb2;
        this.bb3 = this.data.bb3;
        this.bb4 = this.data.bb4;
        this.bb5 = this.data.bb5;
        this.bb6 = this.data.bb6;
        this.bb7 = this.data.bb7;
        this.bb8 = this.data.bb8;
        this.si1 = this.data.si1;
        this.si2 = this.data.si2;
        this.si3 = this.data.si3;
        this.si4 = this.data.si4;
        this.si5 = this.data.si5;
        this.si6 = this.data.si6;
        this.si7 = this.data.si7;
        this.si8 = this.data.si8;
        this.st1 = this.data.st1;
        this.st2 = this.data.st2;
        this.st3 = this.data.st3;
        this.st4 = this.data.st4;
        this.st5 = this.data.st5;
        this.st6 = this.data.st6;
        this.st7 = this.data.st7;
        this.st8 = this.data.st8;
        this.pe1 = this.data.pe1;
        this.pe2 = this.data.pe2;
        this.pe3 = this.data.pe3;
        this.pe4 = this.data.pe4;
        this.pe5 = this.data.pe5;
        this.pe6 = this.data.pe6;
        this.pe7 = this.data.pe7;
        this.pe8 = this.data.pe8;
        this.as1 = this.data.as1;
        this.as2 = this.data.as2;
        this.as3 = this.data.as3;
        this.as4 = this.data.as4;
        this.as5 = this.data.as5;
        this.as6 = this.data.as6;
        this.as7 = this.data.as7;
        this.as8 = this.data.as8;

        this.oa1 = this.data.oa1;
        this.oa2 = this.data.oa2;
        this.oa3 = this.data.oa3;
        this.oa4 = this.data.oa4;
        this.oa5 = this.data.oa5;
        this.oa6 = this.data.oa6;
        this.oa7 = this.data.oa7;
        this.oa8 = this.data.oa8;
        this.fa1 = this.data.fa1;
        this.fa2 = this.data.fa2;
        this.fa3 = this.data.fa3;
        this.fa4 = this.data.fa4;
        this.fa5 = this.data.fa5;
        this.fa6 = this.data.fa6;
        this.fa7 = this.data.fa7;
        this.fa8 = this.data.fa8;
        this.lt1 = this.data.lt1;
        this.lt2 = this.data.lt2;
        this.lt3 = this.data.lt3;
        this.lt4 = this.data.lt4;
        this.lt5 = this.data.lt5;
        this.lt6 = this.data.lt6;
        this.lt7 = this.data.lt7;
        this.lt8 = this.data.lt8;
        this.on1 = this.data.on1;
        this.on2 = this.data.on2;
        this.on3 = this.data.on3;
        this.on4 = this.data.on4;
        this.on5 = this.data.on5;
        this.on6 = this.data.on6;
        this.on7 = this.data.on7;
        this.on8 = this.data.on8;
        this.gd1 = this.data.gd1;
        this.gd2 = this.data.gd2;
        this.gd3 = this.data.gd3;
        this.gd4 = this.data.gd4;
        this.gd5 = this.data.gd5;
        this.gd6 = this.data.gd6;
        this.gd7 = this.data.gd7;
        this.gd8 = this.data.gd8;

        this.pr1 = this.data.pr1;
        this.pr2 = this.data.pr2;
        this.pr3 = this.data.pr3;
        this.pr4 = this.data.pr4;
        this.pr5 = this.data.pr5;
        this.pr6 = this.data.pr6;
        this.pr7 = this.data.pr7;
        this.pr8 = this.data.pr8;
        this.oi1 = this.data.oi1;
        this.oi2 = this.data.oi2;
        this.oi3 = this.data.oi3;
        this.oi4 = this.data.oi4;
        this.oi5 = this.data.oi5;
        this.oi6 = this.data.oi6;
        this.oi7 = this.data.oi7;
        this.oi8 = this.data.oi8;
        this.ti1 = this.data.ti1;
        this.ti2 = this.data.ti2;
        this.ti3 = this.data.ti3;
        this.ti4 = this.data.ti4;
        this.ti5 = this.data.ti5;
        this.ti6 = this.data.ti6;
        this.ti7 = this.data.ti7;
        this.ti8 = this.data.ti8;
        this.tca1 = this.data.tca1;
        this.tca2 = this.data.tca2;
        this.tca3 = this.data.tca3;
        this.tca4 = this.data.tca4;
        this.tca5 = this.data.tca5;
        this.tca6 = this.data.tca6;
        this.tca7 = this.data.tca7;
        this.tca8 = this.data.tca8;
        this.bal1 = this.data.bal1;
        this.bal2 = this.data.bal2;
        this.bal3 = this.data.bal3;
        this.bal4 = this.data.bal4;
        this.bal5 = this.data.bal5;
        this.bal6 = this.data.bal6;
        this.bal7 = this.data.bal7;
        this.bal8 = this.data.bal8;
        this.tca1 = Math.round((this.data.tca1 + Number.EPSILON) * 100) / 100;
        this.tca2 = Math.round((this.data.tca2 + Number.EPSILON) * 100) / 100;
        this.tca3 = Math.round((this.data.tca3 + Number.EPSILON) * 100) / 100;
        this.tca4 = Math.round((this.data.tca4 + Number.EPSILON) * 100) / 100;
        this.tca5 = Math.round((this.data.tca5 + Number.EPSILON) * 100) / 100;
        this.tca6 = Math.round((this.data.tca6 + Number.EPSILON) * 100) / 100;
        this.tca7 = Math.round((this.data.tca7 + Number.EPSILON) * 100) / 100;
        this.tca8 = Math.round((this.data.tca8 + Number.EPSILON) * 100) / 100;
        this.ta1 = Math.round((this.data.ta1 + Number.EPSILON) * 100) / 100;
        this.ta2 = Math.round((this.data.ta2 + Number.EPSILON) * 100) / 100;
        this.ta3 = Math.round((this.data.ta3 + Number.EPSILON) * 100) / 100;
        this.ta4 = Math.round((this.data.ta4 + Number.EPSILON) * 100) / 100;
        this.ta5 = Math.round((this.data.ta5 + Number.EPSILON) * 100) / 100;
        this.ta6 = Math.round((this.data.ta6 + Number.EPSILON) * 100) / 100;
        this.ta7 = Math.round((this.data.ta7 + Number.EPSILON) * 100) / 100;
        this.ta8 = Math.round((this.data.ta8 + Number.EPSILON) * 100) / 100;
      } else {
        this.a1 = 0;
        this.a2 = 0;
        this.a3 = 0;
        this.a4 = 0;
        this.a5 = 0;
        this.a6 = 0;
        this.a7 = 0;
        this.a8 = 0;
        this.b1 = 0;
        this.b2 = 0;
        this.b3 = 0;
        this.b4 = 0;
        this.b5 = 0;
        this.b6 = 0;
        this.b7 = 0;
        this.b8 = 0;
        this.c1 = 0;
        this.c2 = 0;
        this.c3 = 0;
        this.c4 = 0;
        this.c5 = 0;
        this.c6 = 0;
        this.c7 = 0;
        this.c8 = 0;
        this.d1 = 0;
        this.d2 = 0;
        this.d3 = 0;
        this.d4 = 0;
        this.d5 = 0;
        this.d6 = 0;
        this.d7 = 0;
        this.d8 = 0;
        this.e1 = 0;
        this.e2 = 0;
        this.e3 = 0;
        this.e4 = 0;
        this.e5 = 0;
        this.e6 = 0;
        this.e7 = 0;
        this.e8 = 0;

        this.f1 = 0;
        this.f2 = 0;
        this.f3 = 0;
        this.f4 = 0;
        this.f5 = 0;
        this.f6 = 0;
        this.f7 = 0;
        this.f8 = 0;
        this.g1 = 0;
        this.g2 = 0;
        this.g3 = 0;
        this.g4 = 0;
        this.g5 = 0;
        this.g6 = 0;
        this.g7 = 0;
        this.g8 = 0;
        this.h1 = 0;
        this.h2 = 0;
        this.h3 = 0;
        this.h4 = 0;
        this.h5 = 0;
        this.h6 = 0;
        this.h7 = 0;
        this.h8 = 0;
        this.t1 = 0;
        this.t2 = 0;
        this.t3 = 0;
        this.t4 = 0;
        this.t5 = 0;
        this.t6 = 0;
        this.t7 = 0;
        this.t8 = 0;
        this.am1 = 0;
        this.am2 = 0;
        this.am3 = 0;
        this.am4 = 0;
        this.am5 = 0;
        this.am6 = 0;
        this.am7 = 0;
        this.am8 = 0;

        this.bm1 = 0;
        this.bm2 = 0;
        this.bm3 = 0;
        this.bm4 = 0;
        this.bm5 = 0;
        this.bm6 = 0;
        this.bm7 = 0;
        this.bm8 = 0;
        this.cm1 = 0;
        this.cm2 = 0;
        this.cm3 = 0;
        this.cm4 = 0;
        this.cm5 = 0;
        this.cm6 = 0;
        this.cm7 = 0;
        this.cm8 = 0;
        this.dm1 = 0;
        this.dm2 = 0;
        this.dm3 = 0;
        this.dm4 = 0;
        this.dm5 = 0;
        this.dm6 = 0;
        this.dm7 = 0;
        this.dm8 = 0;
        this.as1 = 0;
        this.as2 = 0;
        this.as3 = 0;
        this.as4 = 0;
        this.as5 = 0;
        this.as6 = 0;
        this.as7 = 0;
        this.as8 = 0;
        this.pe1 = 0;
        this.pe2 = 0;
        this.pe3 = 0;
        this.pe4 = 0;
        this.pe5 = 0;
        this.pe6 = 0;
        this.pe7 = 0;
        this.pe8 = 0;

        this.em1 = 0;
        this.em2 = 0;
        this.em3 = 0;
        this.em4 = 0;
        this.em5 = 0;
        this.em6 = 0;
        this.em7 = 0;
        this.em8 = 0;
        this.tm1 = 0;
        this.tm2 = 0;
        this.tm3 = 0;
        this.tm4 = 0;
        this.tm5 = 0;
        this.tm6 = 0;
        this.tm7 = 0;
        this.tm8 = 0;
        this.ac1 = 0;
        this.ac2 = 0;
        this.ac3 = 0;
        this.ac4 = 0;
        this.ac5 = 0;
        this.ac6 = 0;
        this.ac7 = 0;
        this.ac8 = 0;
        this.bc1 = 0;
        this.bc2 = 0;
        this.bc3 = 0;
        this.bc4 = 0;
        this.bc5 = 0;
        this.bc6 = 0;
        this.bc7 = 0;
        this.bc8 = 0;
        this.cc1 = 0;
        this.cc2 = 0;
        this.cc3 = 0;
        this.cc4 = 0;
        this.cc5 = 0;
        this.cc6 = 0;
        this.cc7 = 0;
        this.cc8 = 0;

        this.dc1 = 0;
        this.dc2 = 0;
        this.dc3 = 0;
        this.dc4 = 0;
        this.dc5 = 0;
        this.dc6 = 0;
        this.dc7 = 0;
        this.dc8 = 0;
        this.tc1 = 0;
        this.tc2 = 0;
        this.tc3 = 0;
        this.tc4 = 0;
        this.tc5 = 0;
        this.tc6 = 0;
        this.tc7 = 0;
        this.tc8 = 0;
        this.ta1 = 0;
        this.ta2 = 0;
        this.ta3 = 0;
        this.ta4 = 0;
        this.ta5 = 0;
        this.ta6 = 0;
        this.ta7 = 0;
        this.ta8 = 0;
        this.tf1 = 0;
        this.tf2 = 0;
        this.tf3 = 0;
        this.tf4 = 0;
        this.tf5 = 0;
        this.tf6 = 0;
        this.tf7 = 0;
        this.tf8 = 0;
        this.oi1 = 0;
        this.oi2 = 0;
        this.oi3 = 0;
        this.oi4 = 0;
        this.oi5 = 0;
        this.oi6 = 0;
        this.oi7 = 0;
        this.oi8 = 0;

        this.pr1 = 0;
        this.pr2 = 0;
        this.pr3 = 0;
        this.pr4 = 0;
        this.pr5 = 0;
        this.pr6 = 0;
        this.pr7 = 0;
        this.pr8 = 0;
        this.gd1 = 0;
        this.gd2 = 0;
        this.gd3 = 0;
        this.gd4 = 0;
        this.gd5 = 0;
        this.gd6 = 0;
        this.gd7 = 0;
        this.gd8 = 0;
        this.ch1 = 0;
        this.ch2 = 0;
        this.ch3 = 0;
        this.ch4 = 0;
        this.ch5 = 0;
        this.ch6 = 0;
        this.ch7 = 0;
        this.ch8 = 0;
        this.bb1 = 0;
        this.bb2 = 0;
        this.bb3 = 0;
        this.bb4 = 0;
        this.ch5 = 0;
        this.bb6 = 0;
        this.bb7 = 0;
        this.bb8 = 0;
        this.on1 = 0;
        this.on2 = 0;
        this.on3 = 0;
        this.on4 = 0;
        this.ch5 = 0;
        this.on6 = 0;
        this.on7 = 0;
        this.on8 = 0;

        this.si1 = 0;
        this.si2 = 0;
        this.si3 = 0;
        this.si4 = 0;
        this.ch5 = 0;
        this.si6 = 0;
        this.si7 = 0;
        this.si8 = 0;
        this.st1 = 0;
        this.st2 = 0;
        this.st3 = 0;
        this.st4 = 0;
        this.ch5 = 0;
        this.st6 = 0;
        this.st7 = 0;
        this.st8 = 0;
        this.fa1 = 0;
        this.fa2 = 0;
        this.fa3 = 0;
        this.fa4 = 0;
        this.ch5 = 0;
        this.fa6 = 0;
        this.fa7 = 0;
        this.fa8 = 0;
        this.oa1 = 0;
        this.oa2 = 0;
        this.oa3 = 0;
        this.oa4 = 0;
        this.ch5 = 0;
        this.oa6 = 0;
        this.oa7 = 0;
        this.oa8 = 0;
        this.lt1 = 0;
        this.lt2 = 0;
        this.lt3 = 0;
        this.lt4 = 0;
        this.ch5 = 0;
        this.lt6 = 0;
        this.lt7 = 0;
        this.lt8 = 0;

        this.tca1 = 0;
        this.tca2 = 0;
        this.tca3 = 0;
        this.tca4 = 0;
        this.tca5 = 0;
        this.tca6 = 0;
        this.tca7 = 0;
        this.tca8 = 0;
        this.tl1 = 0;
        this.tl2 = 0;
        this.tl3 = 0;
        this.tl4 = 0;
        this.tl5 = 0;
        this.tl6 = 0;
        this.tl7 = 0;
        this.tl8 = 0;
        this.td1 = 0;
        this.td2 = 0;
        this.td3 = 0;
        this.td4 = 0;
        this.td5 = 0;
        this.td6 = 0;
        this.td7 = 0;
        this.td8 = 0;
        this.ti1 = 0;
        this.ti2 = 0;
        this.ti3 = 0;
        this.ti4 = 0;
        this.ti5 = 0;
        this.ti6 = 0;
        this.ti7 = 0;
        this.ti8 = 0;
        this.bal1 = 0;
        this.bal2 = 0;
        this.bal3 = 0;
        this.bal4 = 0;
        this.bal5 = 0;
        this.bal6 = 0;
        this.bal7 = 0;
        this.bal8 = 0;
      }
      this.update();
    });
  }

  update() {
    // this.th1='Audit';  this.th2='Unaudit'; this.th3='Unaudit'; this.th4='Unaudit'; this.th5='Unaudit'; this.th6='Projected';this.th7='Projected';this.th8='Projected';
    //console.log(this.th1);
    this.t1 =
      this.a1 +
      this.b1 +
      this.c1 +
      this.d1 +
      this.e1 +
      this.f1 +
      this.g1 +
      this.h1;
    this.t2 =
      this.a2 +
      this.b2 +
      this.c2 +
      this.d2 +
      this.e2 +
      this.f2 +
      this.g2 +
      this.h2;
    this.t3 =
      this.a3 +
      this.b3 +
      this.c3 +
      this.d3 +
      this.e3 +
      this.f3 +
      this.g3 +
      this.h3;
    this.t4 =
      this.a4 +
      this.b4 +
      this.c4 +
      this.d4 +
      this.e4 +
      this.f4 +
      this.g4 +
      this.h4;
    this.t5 =
      this.a5 +
      this.b5 +
      this.c5 +
      this.d5 +
      this.e5 +
      this.f5 +
      this.g5 +
      this.h5;
    this.t6 =
      this.a6 +
      this.b6 +
      this.c6 +
      this.d6 +
      this.e6 +
      this.f6 +
      this.g6 +
      this.h6;
    this.t7 =
      this.a7 +
      this.b7 +
      this.c7 +
      this.d7 +
      this.e7 +
      this.f7 +
      this.g7 +
      this.h7;
    this.t8 =
      this.a8 +
      this.b8 +
      this.c8 +
      this.d8 +
      this.e8 +
      this.f8 +
      this.g8 +
      this.h8;

    this.tca1 =
      this.ch1 +
      this.bb1 +
      this.td1 +
      this.st1 +
      this.si1 +
      this.pe1 +
      this.as1 +
      this.oa1;
    this.tca2 =
      this.ch2 +
      this.bb2 +
      this.td2 +
      this.st2 +
      this.si2 +
      this.pe2 +
      this.as2 +
      this.oa2;
    this.tca3 =
      this.ch3 +
      this.bb3 +
      this.td3 +
      this.st3 +
      this.si3 +
      this.pe3 +
      this.as3 +
      this.oa3;
    this.tca4 =
      this.ch4 +
      this.bb4 +
      this.td4 +
      this.st4 +
      this.si4 +
      this.pe4 +
      this.as4 +
      this.oa4;
    this.tca5 =
      this.ch5 +
      this.bb5 +
      this.td5 +
      this.st5 +
      this.si5 +
      this.pe5 +
      this.as5 +
      this.oa5;
    this.tca6 =
      this.ch6 +
      this.bb6 +
      this.td6 +
      this.st6 +
      this.si6 +
      this.pe6 +
      this.as6 +
      this.oa6;
    this.tca7 =
      this.ch7 +
      this.bb7 +
      this.td7 +
      this.st7 +
      this.si7 +
      this.pe7 +
      this.as7 +
      this.oa7;
    this.tca8 =
      this.ch8 +
      this.bb8 +
      this.td8 +
      this.st8 +
      this.si8 +
      this.pe8 +
      this.as8 +
      this.oa8;
    this.tca1 = Math.round((this.tca1 + Number.EPSILON) * 100) / 100;
    this.tca2 = Math.round((this.tca2 + Number.EPSILON) * 100) / 100;
    this.tca3 = Math.round((this.tca3 + Number.EPSILON) * 100) / 100;
    this.tca4 = Math.round((this.tca4 + Number.EPSILON) * 100) / 100;
    this.tca5 = Math.round((this.tca5 + Number.EPSILON) * 100) / 100;
    this.tca6 = Math.round((this.tca6 + Number.EPSILON) * 100) / 100;
    this.tca7 = Math.round((this.tca7 + Number.EPSILON) * 100) / 100;
    this.tca8 = Math.round((this.tca8 + Number.EPSILON) * 100) / 100;
    this.tm1 = this.am1 + this.bm1 + this.cm1 + this.dm1 + this.em1;
    this.tm2 = this.am2 + this.bm2 + this.cm2 + this.dm2 + this.em2;
    this.tm3 = this.am3 + this.bm3 + this.cm3 + this.dm3 + this.em3;
    this.tm4 = this.am4 + this.bm4 + this.cm4 + this.dm4 + this.em4;
    this.tm5 = this.am5 + this.bm5 + this.cm5 + this.dm5 + this.em5;
    this.tm6 = this.am6 + this.bm6 + this.cm6 + this.dm6 + this.em6;
    this.tm7 = this.am7 + this.bm7 + this.cm7 + this.dm7 + this.em7;
    this.tm8 = this.am8 + this.bm8 + this.cm8 + this.dm8 + this.em8;

    this.tc1 = this.ac1 + this.bc1 + this.cc1 + this.dc1;
    this.tc2 = this.ac2 + this.bc2 + this.cc2 + this.dc2;
    this.tc3 = this.ac3 + this.bc3 + this.cc3 + this.dc3;
    this.tc4 = this.ac4 + this.bc4 + this.cc4 + this.dc4;
    this.tc5 = this.ac5 + this.bc5 + this.cc5 + this.dc5;
    this.tc6 = this.ac6 + this.bc6 + this.cc6 + this.dc6;
    this.tc7 = this.ac7 + this.bc7 + this.cc7 + this.dc7;
    this.tc8 = this.ac8 + this.bc8 + this.cc8 + this.dc8;

    this.tl1 = this.t1 + this.tm1 + this.tc1;
    this.tl2 = this.t2 + this.tm2 + this.tc2;
    this.tl3 = this.t3 + this.tm3 + this.tc3;
    this.tl4 = this.t4 + this.tm4 + this.tc4;
    this.tl5 = this.t5 + this.tm5 + this.tc5;
    this.tl6 = this.t6 + this.tm6 + this.tc6;
    this.tl7 = this.t7 + this.tm7 + this.tc7;
    this.tl8 = this.t8 + this.tm8 + this.tc8;

    this.tf1 = this.fa1 + this.lt1 + this.on1;
    this.tf2 = this.fa2 + this.lt2 + this.on2;
    this.tf3 = this.fa3 + this.lt3 + this.on3;
    this.tf4 = this.fa4 + this.lt4 + this.on4;
    this.tf5 = this.fa5 + this.lt5 + this.on5;
    this.tf6 = this.fa6 + this.lt6 + this.on6;
    this.tf7 = this.fa7 + this.lt7 + this.on7;
    this.tf8 = this.fa8 + this.lt8 + this.on8;

    this.ti1 = this.gd1 + this.pr1 + this.oi1;
    this.ti2 = this.gd2 + this.pr2 + this.oi2;
    this.ti3 = this.gd3 + this.pr3 + this.oi3;
    this.ti4 = this.gd4 + this.pr4 + this.oi4;
    this.ti5 = this.gd5 + this.pr5 + this.oi5;
    this.ti6 = this.gd6 + this.pr6 + this.oi6;
    this.ti7 = this.gd7 + this.pr7 + this.oi7;
    this.ti8 = this.gd8 + this.pr8 + this.oi8;

    this.ta1 = this.tca1 + this.tf1 + this.ti1;
    this.ta2 = this.tca2 + this.tf2 + this.ti2;
    this.ta3 = this.tca3 + this.tf3 + this.ti3;
    this.ta4 = this.tca4 + this.tf4 + this.ti4;
    this.ta5 = this.tca5 + this.tf5 + this.ti5;
    this.ta6 = this.tca6 + this.tf6 + this.ti6;
    this.ta7 = this.tca7 + this.tf7 + this.ti7;
    this.ta8 = this.tca8 + this.tf8 + this.ti8;

    this.ta1 = Math.round((this.ta1 + Number.EPSILON) * 100) / 100;
    this.ta2 = Math.round((this.ta2 + Number.EPSILON) * 100) / 100;
    this.ta3 = Math.round((this.ta3 + Number.EPSILON) * 100) / 100;
    this.ta4 = Math.round((this.ta4 + Number.EPSILON) * 100) / 100;
    this.ta5 = Math.round((this.ta5 + Number.EPSILON) * 100) / 100;
    this.ta6 = Math.round((this.ta6 + Number.EPSILON) * 100) / 100;
    this.ta7 = Math.round((this.ta7 + Number.EPSILON) * 100) / 100;
    this.ta8 = Math.round((this.ta8 + Number.EPSILON) * 100) / 100;

    this.bal1 = this.ta1 - this.tl1;
    this.bal2 = this.ta2 - this.tl2;
    this.bal3 = this.ta3 - this.tl3;
    this.bal4 = this.ta4 - this.tl4;
    this.bal5 = this.ta5 - this.tl5;
    this.bal6 = this.ta6 - this.tl6;
    this.bal7 = this.ta7 - this.tl7;
    this.bal8 = this.ta8 - this.tl8;
  }

  SetData = () => {
    this.TotalYears = parseInt(this.year) + 3;
    this.minCollValue = (24 - this.collUsed) / this.TotalYears;
    for (var i = 0; i < this.TotalYears; i++) {
      this.RowData.push({
        value: this.value[i].value,
        name: this.value[i].name,
      });
    }
  };
  savedata = (val) => {
    var jsdata = JSON.stringify(val);
    //   const myObj = JSON.parse(jsdata);

    //  this.title = [myObj.th1, myObj.th2, myObj.th3];
    //  this.titles=this.title;
    // console.log(jsdata);
    var fd = new FormData();
    fd.append('id', this.id);
    fd.append('action_id', '1');
    fd.append('a1', jsdata);
    //fd.append("title",this.titles);
    fd.append('c_id', this.c_id);
    this.ds.demoapi(fd).subscribe((data) => {
      if (data == 1) {
        console.log('added Success');
        this.router.navigateByUrl('/profit-loss/' + this.id);
      }
    });
  };

  printSheet = () => {
    var head = [];
    var body = [];

    if (this.id == 5) {
      head = [
        [
          '',
          '',
          '2019',
          '2020',
          '2021',
          '2022',
          '2023',
          '2024',
          '2025',
          '2026',
        ],
      ];
    } else if (this.id == 4) {
      head = [['', '', '2019', '2020', '2021', '2022', '2023', '2024', '2025']];
    } else if (this.id == 3) {
      head = [['', '', '2019', '2020', '2021', '2022', '2023', '2024']];
    } else if (this.id == 2) {
      head = [['', '', '2019', '2020', '2021', '2022', '2023']];
    } else {
      head = [['', '', '2019', '2020', '2021', '2022']];
    }

    if (this.id == 5) {
      body = [
        ['', 'LIABILITIES', '', '', '', '', '', '', '', ''],
        ['1)', 'CURRENT LIABILITIES', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Short Term Borrowings from Banks',
          this.a1,
          this.a2,
          this.a3,
          this.a4,
          this.a5,
          this.a6,
          this.a7,
          this.a8,
        ],
        [
          'b',
          'Bank Loan Installments (Due in Next 1 Yr.)',
          this.b1,
          this.b2,
          this.b3,
          this.b4,
          this.b5,
          this.b6,
          this.b7,
          this.b8,
        ],
        [
          'c',
          'Short Term Borrowings from Others.',
          this.c1,
          this.c2,
          this.c3,
          this.c4,
          this.c5,
          this.c6,
          this.c7,
          this.c8,
        ],
        [
          'd',
          'Trade Creditors',
          this.d1,
          this.d2,
          this.d3,
          this.d4,
          this.d5,
          this.d6,
          this.d7,
          this.d8,
        ],
        [
          'e',
          'Advance Payments from Customers',
          this.e1,
          this.e2,
          this.e3,
          this.e4,
          this.e5,
          this.e6,
          this.e7,
          this.e8,
        ],
        [
          'f',
          'Taxes Payable',
          this.f1,
          this.f2,
          this.f3,
          this.f4,
          this.f5,
          this.f6,
          this.f7,
          this.f8,
        ],
        [
          'g',
          'Accrued Expenses to be paid',
          this.g1,
          this.g2,
          this.g3,
          this.g4,
          this.g5,
          this.g6,
          this.g7,
          this.g8,
        ],
        [
          'h',
          'Other Current Liabilities',
          this.h1,
          this.h2,
          this.h3,
          this.h4,
          this.h5,
          this.h6,
          this.h7,
          this.h8,
        ],
        [
          '',
          'TOTAL CURRENT LIABILITIES',
          this.t1,
          this.t2,
          this.t3,
          this.t4,
          this.t5,
          this.t6,
          this.t7,
          this.t8,
        ],
        [
          '2)',
          'MEDIUM & LONG TERM LIABILITIES',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          'a',
          'Bank Term Loans (Outstanding)',
          this.am1,
          this.am2,
          this.am3,
          this.am4,
          this.am5,
          this.am6,
          this.am7,
          this.am8,
        ],
        [
          'b',
          'Loans from Directors',
          this.bm1,
          this.bm2,
          this.bm3,
          this.bm4,
          this.bm5,
          this.bm6,
          this.bm7,
          this.bm8,
        ],
        [
          'c',
          'Loans from Friends and Relatives',
          this.cm1,
          this.cm2,
          this.cm3,
          this.cm4,
          this.cm5,
          this.cm6,
          this.cm7,
          this.cm8,
        ],
        [
          'd',
          'Employee Benefits- Accumulated Funds',
          this.dm1,
          this.dm2,
          this.dm3,
          this.dm4,
          this.dm5,
          this.dm6,
          this.dm7,
          this.dm8,
        ],
        [
          'e',
          'Other Medium & Long Term Liabilities',
          this.em1,
          this.em2,
          this.em3,
          this.em4,
          this.em5,
          this.em6,
          this.em7,
          this.em8,
        ],
        [
          '',
          'TOTAL CURRENT LIABILITIES',
          this.tm1,
          this.tm2,
          this.tm3,
          this.tm4,
          this.tm5,
          this.tm6,
          this.tm7,
          this.tm8,
        ],
        ['3)', 'CAPITAL & RESERVE', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Share Capital',
          this.ac1,
          this.ac2,
          this.ac3,
          this.ac4,
          this.ac5,
          this.ac6,
          this.ac7,
          this.ac8,
        ],
        [
          'b',
          'General Reserves',
          this.bc1,
          this.bc2,
          this.bc3,
          this.bc4,
          this.bc5,
          this.bc6,
          this.bc7,
          this.bc8,
        ],
        [
          'c',
          'Retained Earnings : Surplus / Deficit',
          this.cc1,
          this.cc2,
          this.cc3,
          this.cc4,
          this.cc5,
          this.cc6,
          this.cc7,
          this.cc8,
        ],
        [
          'd',
          'Other',
          this.dm1,
          this.dm2,
          this.dc3,
          this.dc4,
          this.dc5,
          this.dc6,
          this.dc7,
          this.dc8,
        ],
        [
          '',
          'TOTAL CAPITAL & RESERVES',
          this.tc1,
          this.tc2,
          this.tc3,
          this.tc4,
          this.tc5,
          this.tc6,
          this.tc7,
          this.tc8,
        ],
        [
          '',
          'TOTAL LIABILITIES',
          this.tl1,
          this.tl2,
          this.tl3,
          this.tl4,
          this.tl5,
          this.tl6,
          this.tl7,
          this.tl8,
        ],
        [],
        ['', 'ASSETS', '', '', '', '', '', '', '', ''],
        ['4)', 'CURRENT ASSETS', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Cash in hand',
          this.ch1,
          this.ch2,
          this.ch3,
          this.ch4,
          this.ch5,
          this.ch6,
          this.ch7,
          this.ch8,
        ],
        [
          'b',
          'Bank Balances',
          this.bb1,
          this.bb2,
          this.bb3,
          this.bb4,
          this.bb5,
          this.bb6,
          this.bb7,
          this.bb8,
        ],
        [
          'c',
          'Trade Debtors',
          this.td1,
          this.td2,
          this.td3,
          this.td4,
          this.td5,
          this.td6,
          this.td7,
          this.td8,
        ],
        [
          'd',
          'Short Term Investments',
          this.st1,
          this.st2,
          this.st3,
          this.st4,
          this.st5,
          this.st6,
          this.st7,
          this.st8,
        ],
        [
          'e',
          'Stocks / Inventory',
          this.si1,
          this.si2,
          this.si3,
          this.si4,
          this.si5,
          this.si6,
          this.si7,
          this.si8,
        ],
        [
          'f',
          'Prepaid Expenses',
          this.pe1,
          this.pe2,
          this.pe3,
          this.pe4,
          this.pe5,
          this.pe6,
          this.pe7,
          this.pe8,
        ],
        [
          'g',
          'Advance to Suppliers',
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
          'h',
          'Other Current ASSETS',
          this.oa1,
          this.oa2,
          this.oa3,
          this.oa4,
          this.oa5,
          this.oa6,
          this.oa7,
          this.oa8,
        ],
        [
          '',
          'TOTAL CURRENT ASSETS',
          this.tca1,
          this.tca2,
          this.tca3,
          this.tca4,
          this.tca5,
          this.tca6,
          this.tca7,
          this.tca8,
        ],
        [
          '5)',
          'FIXED ASSETS AND NON-CURRENT ASSETS',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          'a',
          'Fixed Assets ( Net Block )',
          this.fa1,
          this.fa2,
          this.fa3,
          this.fa4,
          this.fa5,
          this.fa6,
          this.fa7,
          this.fa8,
        ],
        [
          'b',
          'Long Term Investments',
          this.lt1,
          this.lt2,
          this.lt3,
          this.lt4,
          this.lt5,
          this.lt6,
          this.lt7,
          this.lt8,
        ],
        [
          'c',
          'Other Non-Current Assets',
          this.on1,
          this.on2,
          this.on3,
          this.on4,
          this.on5,
          this.on6,
          this.on7,
          this.on8,
        ],
        [
          '',
          'TOTAL FIXED ASSETS',
          this.tf1,
          this.tf2,
          this.tf3,
          this.tf4,
          this.tf5,
          this.tf6,
          this.tf7,
          this.tf8,
        ],
        ['6)', 'INTANGIBLE ASSETS', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Goodwill',
          this.gd1,
          this.gd2,
          this.gd3,
          this.gd4,
          this.gd5,
          this.gd6,
          this.gd7,
          this.gd8,
        ],
        [
          'b',
          'Preliminary Expenses',
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
          'c',
          'Other Intangible Assets',
          this.oi1,
          this.oi2,
          this.oi3,
          this.oi4,
          this.oi5,
          this.oi6,
          this.oi7,
          this.oi8,
        ],
        [
          '',
          'TOTAL INTANGIBLE ASSETS',
          this.ti1,
          this.ti2,
          this.ti3,
          this.ti4,
          this.ti5,
          this.ti6,
          this.ti7,
          this.ti8,
        ],
        [
          '',
          'TOTAL ASSETS',
          this.ta1,
          this.ta2,
          this.ta3,
          this.ta4,
          this.ta5,
          this.ta6,
          this.ta7,
          this.ta8,
        ],
        [
          '',
          'BALANCING',
          this.bal1,
          this.bal2,
          this.bal3,
          this.bal4,
          this.bal5,
          this.bal6,
          this.bal7,
          this.bal8,
        ],
      ];
    } else if (this.id == 4) {
      body = [
        ['', 'LIABILITIES', '', '', '', '', '', '', '', ''],
        ['1)', 'CURRENT LIABILITIES', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Short Term Borrowings from Banks',
          this.a1,
          this.a2,
          this.a3,
          this.a4,
          this.a5,
          this.a6,
          this.a7,
        ],
        [
          'b',
          'Bank Loan Installments (Due in Next 1 Yr.)',
          this.b1,
          this.b2,
          this.b3,
          this.b4,
          this.b5,
          this.b6,
          this.b7,
        ],
        [
          'c',
          'Short Term Borrowings from Others.',
          this.c1,
          this.c2,
          this.c3,
          this.c4,
          this.c5,
          this.c6,
          this.c7,
        ],
        [
          'd',
          'Trade Creditors',
          this.d1,
          this.d2,
          this.d3,
          this.d4,
          this.d5,
          this.d6,
          this.d7,
        ],
        [
          'e',
          'Advance Payments from Customers',
          this.e1,
          this.e2,
          this.e3,
          this.e4,
          this.e5,
          this.e6,
          this.e7,
        ],
        [
          'f',
          'Taxes Payable',
          this.f1,
          this.f2,
          this.f3,
          this.f4,
          this.f5,
          this.f6,
          this.f7,
        ],
        [
          'g',
          'Accrued Expenses to be paid',
          this.g1,
          this.g2,
          this.g3,
          this.g4,
          this.g5,
          this.g6,
          this.g7,
        ],
        [
          'h',
          'Other Current Liabilities',
          this.h1,
          this.h2,
          this.h3,
          this.h4,
          this.h5,
          this.h6,
          this.h7,
        ],
        [
          '',
          'TOTAL CURRENT LIABILITIES',
          this.t1,
          this.t2,
          this.t3,
          this.t4,
          this.t5,
          this.t6,
          this.t7,
        ],
        [
          '2)',
          'MEDIUM & LONG TERM LIABILITIES',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          'a',
          'Bank Term Loans (Outstanding)',
          this.am1,
          this.am2,
          this.am3,
          this.am4,
          this.am5,
          this.am6,
          this.am7,
        ],
        [
          'b',
          'Loans from Directors',
          this.bm1,
          this.bm2,
          this.bm3,
          this.bm4,
          this.bm5,
          this.bm6,
          this.bm7,
        ],
        [
          'c',
          'Loans from Friends and Relatives',
          this.cm1,
          this.cm2,
          this.cm3,
          this.cm4,
          this.cm5,
          this.cm6,
          this.cm7,
        ],
        [
          'd',
          'Employee Benefits- Accumulated Funds',
          this.dm1,
          this.dm2,
          this.dm3,
          this.dm4,
          this.dm5,
          this.dm6,
          this.dm7,
        ],
        [
          'e',
          'Other Medium & Long Term Liabilities',
          this.em1,
          this.em2,
          this.em3,
          this.em4,
          this.em5,
          this.em6,
          this.em7,
        ],
        [
          '',
          'TOTAL CURRENT LIABILITIES',
          this.tm1,
          this.tm2,
          this.tm3,
          this.tm4,
          this.tm5,
          this.tm6,
          this.tm7,
        ],
        ['3)', 'CAPITAL & RESERVE', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Share Capital',
          this.ac1,
          this.ac2,
          this.ac3,
          this.ac4,
          this.ac5,
          this.ac6,
          this.ac7,
        ],
        [
          'b',
          'General Reserves',
          this.bc1,
          this.bc2,
          this.bc3,
          this.bc4,
          this.bc5,
          this.bc6,
          this.bc7,
        ],
        [
          'c',
          'Retained Earnings : Surplus / Deficit',
          this.cc1,
          this.cc2,
          this.cc3,
          this.cc4,
          this.cc5,
          this.cc6,
          this.cc7,
        ],
        [
          'd',
          'Other',
          this.dm1,
          this.dm2,
          this.dc3,
          this.dc4,
          this.dc5,
          this.dc6,
          this.dc7,
        ],
        [
          '',
          'TOTAL CAPITAL & RESERVES',
          this.tc1,
          this.tc2,
          this.tc3,
          this.tc4,
          this.tc5,
          this.tc6,
          this.tc7,
        ],
        [
          '',
          'TOTAL LIABILITIES',
          this.tl1,
          this.tl2,
          this.tl3,
          this.tl4,
          this.tl5,
          this.tl6,
          this.tl7,
        ],
        [],
        ['', 'ASSETS', '', '', '', '', '', '', '', ''],
        ['4)', 'CURRENT ASSETS', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Cash in hand',
          this.ch1,
          this.ch2,
          this.ch3,
          this.ch4,
          this.ch5,
          this.ch6,
          this.ch7,
        ],
        [
          'b',
          'Bank Balances',
          this.bb1,
          this.bb2,
          this.bb3,
          this.bb4,
          this.bb5,
          this.bb6,
          this.bb7,
        ],
        [
          'c',
          'Trade Debtors',
          this.td1,
          this.td2,
          this.td3,
          this.td4,
          this.td5,
          this.td6,
          this.td7,
        ],
        [
          'd',
          'Short Term Investments',
          this.st1,
          this.st2,
          this.st3,
          this.st4,
          this.st5,
          this.st6,
          this.st7,
        ],
        [
          'e',
          'Stocks / Inventory',
          this.si1,
          this.si2,
          this.si3,
          this.si4,
          this.si5,
          this.si6,
          this.si7,
        ],
        [
          'f',
          'Prepaid Expenses',
          this.pe1,
          this.pe2,
          this.pe3,
          this.pe4,
          this.pe5,
          this.pe6,
          this.pe7,
        ],
        [
          'g',
          'Advance to Suppliers',
          this.as1,
          this.as2,
          this.as3,
          this.as4,
          this.as5,
          this.as6,
          this.as7,
        ],
        [
          'h',
          'Other Current ASSETS',
          this.oa1,
          this.oa2,
          this.oa3,
          this.oa4,
          this.oa5,
          this.oa6,
          this.oa7,
        ],
        [
          '',
          'TOTAL CURRENT ASSETS',
          this.tca1,
          this.tca2,
          this.tca3,
          this.tca4,
          this.tca5,
          this.tca6,
          this.tca7,
        ],
        [
          '5)',
          'FIXED ASSETS AND NON-CURRENT ASSETS',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          'a',
          'Fixed Assets ( Net Block )',
          this.fa1,
          this.fa2,
          this.fa3,
          this.fa4,
          this.fa5,
          this.fa6,
          this.fa7,
        ],
        [
          'b',
          'Long Term Investments',
          this.lt1,
          this.lt2,
          this.lt3,
          this.lt4,
          this.lt5,
          this.lt6,
          this.lt7,
        ],
        [
          'c',
          'Other Non-Current Assets',
          this.on1,
          this.on2,
          this.on3,
          this.on4,
          this.on5,
          this.on6,
          this.on7,
        ],
        [
          '',
          'TOTAL FIXED ASSETS',
          this.tf1,
          this.tf2,
          this.tf3,
          this.tf4,
          this.tf5,
          this.tf6,
          this.tf7,
        ],
        ['6)', 'INTANGIBLE ASSETS', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Goodwill',
          this.gd1,
          this.gd2,
          this.gd3,
          this.gd4,
          this.gd5,
          this.gd6,
          this.gd7,
        ],
        [
          'b',
          'Preliminary Expenses',
          this.pr1,
          this.pr2,
          this.pr3,
          this.pr4,
          this.pr5,
          this.pr6,
          this.pr7,
        ],
        [
          'c',
          'Other Intangible Assets',
          this.oi1,
          this.oi2,
          this.oi3,
          this.oi4,
          this.oi5,
          this.oi6,
          this.oi7,
        ],
        [
          '',
          'TOTAL INTANGIBLE ASSETS',
          this.ti1,
          this.ti2,
          this.ti3,
          this.ti4,
          this.ti5,
          this.ti6,
          this.ti7,
        ],
        [
          '',
          'TOTAL ASSETS',
          this.ta1,
          this.ta2,
          this.ta3,
          this.ta4,
          this.ta5,
          this.ta6,
          this.ta7,
        ],
        [
          '',
          'BALANCING',
          this.bal1,
          this.bal2,
          this.bal3,
          this.bal4,
          this.bal5,
          this.bal6,
          this.bal7,
        ],
      ];
    } else if (this.id == 3) {
      body = [
        ['', 'LIABILITIES', '', '', '', '', '', '', '', ''],
        ['1)', 'CURRENT LIABILITIES', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Short Term Borrowings from Banks',
          this.a1,
          this.a2,
          this.a3,
          this.a4,
          this.a5,
          this.a6,
        ],
        [
          'b',
          'Bank Loan Installments (Due in Next 1 Yr.)',
          this.b1,
          this.b2,
          this.b3,
          this.b4,
          this.b5,
          this.b6,
        ],
        [
          'c',
          'Short Term Borrowings from Others.',
          this.c1,
          this.c2,
          this.c3,
          this.c4,
          this.c5,
          this.c6,
        ],
        [
          'd',
          'Trade Creditors',
          this.d1,
          this.d2,
          this.d3,
          this.d4,
          this.d5,
          this.d6,
        ],
        [
          'e',
          'Advance Payments from Customers',
          this.e1,
          this.e2,
          this.e3,
          this.e4,
          this.e5,
          this.e6,
        ],
        [
          'f',
          'Taxes Payable',
          this.f1,
          this.f2,
          this.f3,
          this.f4,
          this.f5,
          this.f6,
        ],
        [
          'g',
          'Accrued Expenses to be paid',
          this.g1,
          this.g2,
          this.g3,
          this.g4,
          this.g5,
          this.g6,
        ],
        [
          'h',
          'Other Current Liabilities',
          this.h1,
          this.h2,
          this.h3,
          this.h4,
          this.h5,
          this.h6,
        ],
        [
          '',
          'TOTAL CURRENT LIABILITIES',
          this.t1,
          this.t2,
          this.t3,
          this.t4,
          this.t5,
          this.t6,
        ],
        [
          '2)',
          'MEDIUM & LONG TERM LIABILITIES',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          'a',
          'Bank Term Loans (Outstanding)',
          this.am1,
          this.am2,
          this.am3,
          this.am4,
          this.am5,
          this.am6,
        ],
        [
          'b',
          'Loans from Directors',
          this.bm1,
          this.bm2,
          this.bm3,
          this.bm4,
          this.bm5,
          this.bm6,
        ],
        [
          'c',
          'Loans from Friends and Relatives',
          this.cm1,
          this.cm2,
          this.cm3,
          this.cm4,
          this.cm5,
          this.cm6,
        ],
        [
          'd',
          'Employee Benefits- Accumulated Funds',
          this.dm1,
          this.dm2,
          this.dm3,
          this.dm4,
          this.dm5,
          this.dm6,
        ],
        [
          'e',
          'Other Medium & Long Term Liabilities',
          this.em1,
          this.em2,
          this.em3,
          this.em4,
          this.em5,
          this.em6,
        ],
        [
          '',
          'TOTAL CURRENT LIABILITIES',
          this.tm1,
          this.tm2,
          this.tm3,
          this.tm4,
          this.tm5,
          this.tm6,
        ],
        ['3)', 'CAPITAL & RESERVE', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Share Capital',
          this.ac1,
          this.ac2,
          this.ac3,
          this.ac4,
          this.ac5,
          this.ac6,
        ],
        [
          'b',
          'General Reserves',
          this.bc1,
          this.bc2,
          this.bc3,
          this.bc4,
          this.bc5,
          this.bc6,
        ],
        [
          'c',
          'Retained Earnings : Surplus / Deficit',
          this.cc1,
          this.cc2,
          this.cc3,
          this.cc4,
          this.cc5,
          this.cc6,
        ],
        [
          'd',
          'Other',
          this.dm1,
          this.dm2,
          this.dc3,
          this.dc4,
          this.dc5,
          this.dc6,
        ],
        [
          '',
          'TOTAL CAPITAL & RESERVES',
          this.tc1,
          this.tc2,
          this.tc3,
          this.tc4,
          this.tc5,
          this.tc6,
        ],
        [
          '',
          'TOTAL LIABILITIES',
          this.tl1,
          this.tl2,
          this.tl3,
          this.tl4,
          this.tl5,
          this.tl6,
        ],
        [],
        ['', 'ASSETS', '', '', '', '', '', '', '', ''],
        ['4)', 'CURRENT ASSETS', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Cash in hand',
          this.ch1,
          this.ch2,
          this.ch3,
          this.ch4,
          this.ch5,
          this.ch6,
        ],
        [
          'b',
          'Bank Balances',
          this.bb1,
          this.bb2,
          this.bb3,
          this.bb4,
          this.bb5,
          this.bb6,
        ],
        [
          'c',
          'Trade Debtors',
          this.td1,
          this.td2,
          this.td3,
          this.td4,
          this.td5,
          this.td6,
        ],
        [
          'd',
          'Short Term Investments',
          this.st1,
          this.st2,
          this.st3,
          this.st4,
          this.st5,
          this.st6,
        ],
        [
          'e',
          'Stocks / Inventory',
          this.si1,
          this.si2,
          this.si3,
          this.si4,
          this.si5,
          this.si6,
        ],
        [
          'f',
          'Prepaid Expenses',
          this.pe1,
          this.pe2,
          this.pe3,
          this.pe4,
          this.pe5,
          this.pe6,
        ],
        [
          'g',
          'Advance to Suppliers',
          this.as1,
          this.as2,
          this.as3,
          this.as4,
          this.as5,
          this.as6,
        ],
        [
          'h',
          'Other Current ASSETS',
          this.oa1,
          this.oa2,
          this.oa3,
          this.oa4,
          this.oa5,
          this.oa6,
        ],
        [
          '',
          'TOTAL CURRENT ASSETS',
          this.tca1,
          this.tca2,
          this.tca3,
          this.tca4,
          this.tca5,
          this.tca6,
        ],
        [
          '5)',
          'FIXED ASSETS AND NON-CURRENT ASSETS',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          'a',
          'Fixed Assets ( Net Block )',
          this.fa1,
          this.fa2,
          this.fa3,
          this.fa4,
          this.fa5,
          this.fa6,
        ],
        [
          'b',
          'Long Term Investments',
          this.lt1,
          this.lt2,
          this.lt3,
          this.lt4,
          this.lt5,
          this.lt6,
        ],
        [
          'c',
          'Other Non-Current Assets',
          this.on1,
          this.on2,
          this.on3,
          this.on4,
          this.on5,
          this.on6,
        ],
        [
          '',
          'TOTAL FIXED ASSETS',
          this.tf1,
          this.tf2,
          this.tf3,
          this.tf4,
          this.tf5,
          this.tf6,
        ],
        ['6)', 'INTANGIBLE ASSETS', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Goodwill',
          this.gd1,
          this.gd2,
          this.gd3,
          this.gd4,
          this.gd5,
          this.gd6,
        ],
        [
          'b',
          'Preliminary Expenses',
          this.pr1,
          this.pr2,
          this.pr3,
          this.pr4,
          this.pr5,
          this.pr6,
        ],
        [
          'c',
          'Other Intangible Assets',
          this.oi1,
          this.oi2,
          this.oi3,
          this.oi4,
          this.oi5,
          this.oi6,
        ],
        [
          '',
          'TOTAL INTANGIBLE ASSETS',
          this.ti1,
          this.ti2,
          this.ti3,
          this.ti4,
          this.ti5,
          this.ti6,
        ],
        [
          '',
          'TOTAL ASSETS',
          this.ta1,
          this.ta2,
          this.ta3,
          this.ta4,
          this.ta5,
          this.ta6,
        ],
        [
          '',
          'BALANCING',
          this.bal1,
          this.bal2,
          this.bal3,
          this.bal4,
          this.bal5,
          this.bal6,
        ],
      ];
    } else if (this.id == 2) {
      body = [
        ['', 'LIABILITIES', '', '', '', '', '', '', '', ''],
        ['1)', 'CURRENT LIABILITIES', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Short Term Borrowings from Banks',
          this.a1,
          this.a2,
          this.a3,
          this.a4,
          this.a5,
        ],
        [
          'b',
          'Bank Loan Installments (Due in Next 1 Yr.)',
          this.b1,
          this.b2,
          this.b3,
          this.b4,
          this.b5,
        ],
        [
          'c',
          'Short Term Borrowings from Others.',
          this.c1,
          this.c2,
          this.c3,
          this.c4,
          this.c5,
        ],
        ['d', 'Trade Creditors', this.d1, this.d2, this.d3, this.d4, this.d5],
        [
          'e',
          'Advance Payments from Customers',
          this.e1,
          this.e2,
          this.e3,
          this.e4,
          this.e5,
        ],
        ['f', 'Taxes Payable', this.f1, this.f2, this.f3, this.f4, this.f5],
        [
          'g',
          'Accrued Expenses to be paid',
          this.g1,
          this.g2,
          this.g3,
          this.g4,
          this.g5,
        ],
        [
          'h',
          'Other Current Liabilities',
          this.h1,
          this.h2,
          this.h3,
          this.h4,
          this.h5,
        ],
        [
          '',
          'TOTAL CURRENT LIABILITIES',
          this.t1,
          this.t2,
          this.t3,
          this.t4,
          this.t5,
        ],
        [
          '2)',
          'MEDIUM & LONG TERM LIABILITIES',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          'a',
          'Bank Term Loans (Outstanding)',
          this.am1,
          this.am2,
          this.am3,
          this.am4,
          this.am5,
        ],
        [
          'b',
          'Loans from Directors',
          this.bm1,
          this.bm2,
          this.bm3,
          this.bm4,
          this.bm5,
        ],
        [
          'c',
          'Loans from Friends and Relatives',
          this.cm1,
          this.cm2,
          this.cm3,
          this.cm4,
          this.cm5,
        ],
        [
          'd',
          'Employee Benefits- Accumulated Funds',
          this.dm1,
          this.dm2,
          this.dm3,
          this.dm4,
          this.dm5,
        ],
        [
          'e',
          'Other Medium & Long Term Liabilities',
          this.em1,
          this.em2,
          this.em3,
          this.em4,
          this.em5,
        ],
        [
          '',
          'TOTAL CURRENT LIABILITIES',
          this.tm1,
          this.tm2,
          this.tm3,
          this.tm4,
          this.tm5,
        ],
        ['3)', 'CAPITAL & RESERVE', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Share Capital',
          this.ac1,
          this.ac2,
          this.ac3,
          this.ac4,
          this.ac5,
        ],
        [
          'b',
          'General Reserves',
          this.bc1,
          this.bc2,
          this.bc3,
          this.bc4,
          this.bc5,
        ],
        [
          'c',
          'Retained Earnings : Surplus / Deficit',
          this.cc1,
          this.cc2,
          this.cc3,
          this.cc4,
          this.cc5,
        ],
        ['d', 'Other', this.dm1, this.dm2, this.dc3, this.dc4, this.dc5],
        [
          '',
          'TOTAL CAPITAL & RESERVES',
          this.tc1,
          this.tc2,
          this.tc3,
          this.tc4,
          this.tc5,
        ],
        [
          '',
          'TOTAL LIABILITIES',
          this.tl1,
          this.tl2,
          this.tl3,
          this.tl4,
          this.tl5,
        ],
        [],
        ['', 'ASSETS', '', '', '', '', '', '', '', ''],
        ['4)', 'CURRENT ASSETS', '', '', '', '', '', '', '', ''],
        ['a', 'Cash in hand', this.ch1, this.ch2, this.ch3, this.ch4, this.ch5],
        [
          'b',
          'Bank Balances',
          this.bb1,
          this.bb2,
          this.bb3,
          this.bb4,
          this.bb5,
        ],
        [
          'c',
          'Trade Debtors',
          this.td1,
          this.td2,
          this.td3,
          this.td4,
          this.td5,
        ],
        [
          'd',
          'Short Term Investments',
          this.st1,
          this.st2,
          this.st3,
          this.st4,
          this.st5,
        ],
        [
          'e',
          'Stocks / Inventory',
          this.si1,
          this.si2,
          this.si3,
          this.si4,
          this.si5,
        ],
        [
          'f',
          'Prepaid Expenses',
          this.pe1,
          this.pe2,
          this.pe3,
          this.pe4,
          this.pe5,
        ],
        [
          'g',
          'Advance to Suppliers',
          this.as1,
          this.as2,
          this.as3,
          this.as4,
          this.as5,
        ],
        [
          'h',
          'Other Current ASSETS',
          this.oa1,
          this.oa2,
          this.oa3,
          this.oa4,
          this.oa5,
        ],
        [
          '',
          'TOTAL CURRENT ASSETS',
          this.tca1,
          this.tca2,
          this.tca3,
          this.tca4,
          this.tca5,
        ],
        [
          '5)',
          'FIXED ASSETS AND NON-CURRENT ASSETS',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          'a',
          'Fixed Assets ( Net Block )',
          this.fa1,
          this.fa2,
          this.fa3,
          this.fa4,
          this.fa5,
        ],
        [
          'b',
          'Long Term Investments',
          this.lt1,
          this.lt2,
          this.lt3,
          this.lt4,
          this.lt5,
        ],
        [
          'c',
          'Other Non-Current Assets',
          this.on1,
          this.on2,
          this.on3,
          this.on4,
          this.on5,
        ],
        [
          '',
          'TOTAL FIXED ASSETS',
          this.tf1,
          this.tf2,
          this.tf3,
          this.tf4,
          this.tf5,
        ],
        ['6)', 'INTANGIBLE ASSETS', '', '', '', '', '', '', '', ''],
        ['a', 'Goodwill', this.gd1, this.gd2, this.gd3, this.gd4, this.gd5],
        [
          'b',
          'Preliminary Expenses',
          this.pr1,
          this.pr2,
          this.pr3,
          this.pr4,
          this.pr5,
        ],
        [
          'c',
          'Other Intangible Assets',
          this.oi1,
          this.oi2,
          this.oi3,
          this.oi4,
          this.oi5,
        ],
        [
          '',
          'TOTAL INTANGIBLE ASSETS',
          this.ti1,
          this.ti2,
          this.ti3,
          this.ti4,
          this.ti5,
        ],
        ['', 'TOTAL ASSETS', this.ta1, this.ta2, this.ta3, this.ta4, this.ta5],
        [
          '',
          'BALANCING',
          this.bal1,
          this.bal2,
          this.bal3,
          this.bal4,
          this.bal5,
        ],
      ];
    } else {
      body = [
        ['', 'LIABILITIES', '', '', '', '', '', '', '', ''],
        ['1)', 'CURRENT LIABILITIES', '', '', '', '', '', '', '', ''],
        [
          'a',
          'Short Term Borrowings from Banks',
          this.a1,
          this.a2,
          this.a3,
          this.a4,
        ],
        [
          'b',
          'Bank Loan Installments (Due in Next 1 Yr.)',
          this.b1,
          this.b2,
          this.b3,
          this.b4,
        ],
        [
          'c',
          'Short Term Borrowings from Others.',
          this.c1,
          this.c2,
          this.c3,
          this.c4,
        ],
        ['d', 'Trade Creditors', this.d1, this.d2, this.d3, this.d4],
        [
          'e',
          'Advance Payments from Customers',
          this.e1,
          this.e2,
          this.e3,
          this.e4,
        ],
        ['f', 'Taxes Payable', this.f1, this.f2, this.f3, this.f4],
        [
          'g',
          'Accrued Expenses to be paid',
          this.g1,
          this.g2,
          this.g3,
          this.g4,
        ],
        ['h', 'Other Current Liabilities', this.h1, this.h2, this.h3, this.h4],
        ['', 'TOTAL CURRENT LIABILITIES', this.t1, this.t2, this.t3, this.t4],
        [
          '2)',
          'MEDIUM & LONG TERM LIABILITIES',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          'a',
          'Bank Term Loans (Outstanding)',
          this.am1,
          this.am2,
          this.am3,
          this.am4,
        ],
        ['b', 'Loans from Directors', this.bm1, this.bm2, this.bm3, this.bm4],
        [
          'c',
          'Loans from Friends and Relatives',
          this.cm1,
          this.cm2,
          this.cm3,
          this.cm4,
        ],
        [
          'd',
          'Employee Benefits- Accumulated Funds',
          this.dm1,
          this.dm2,
          this.dm3,
          this.dm4,
        ],
        [
          'e',
          'Other Medium & Long Term Liabilities',
          this.em1,
          this.em2,
          this.em3,
          this.em4,
        ],
        [
          '',
          'TOTAL CURRENT LIABILITIES',
          this.tm1,
          this.tm2,
          this.tm3,
          this.tm4,
        ],
        ['3)', 'CAPITAL & RESERVE', '', '', '', '', '', '', '', ''],
        ['a', 'Share Capital', this.ac1, this.ac2, this.ac3, this.ac4],
        ['b', 'General Reserves', this.bc1, this.bc2, this.bc3, this.bc4],
        [
          'c',
          'Retained Earnings : Surplus / Deficit',
          this.cc1,
          this.cc2,
          this.cc3,
          this.cc4,
        ],
        ['d', 'Other', this.dm1, this.dm2, this.dc3, this.dc4],
        [
          '',
          'TOTAL CAPITAL & RESERVES',
          this.tc1,
          this.tc2,
          this.tc3,
          this.tc4,
        ],
        ['', 'TOTAL LIABILITIES', this.tl1, this.tl2, this.tl3, this.tl4],
        [],
        ['', 'ASSETS', '', '', '', '', '', '', '', ''],
        ['4)', 'CURRENT ASSETS', '', '', '', '', '', '', '', ''],
        ['a', 'Cash in hand', this.ch1, this.ch2, this.ch3, this.ch4],
        ['b', 'Bank Balances', this.bb1, this.bb2, this.bb3, this.bb4],
        ['c', 'Trade Debtors', this.td1, this.td2, this.td3, this.td4],
        ['d', 'Short Term Investments', this.st1, this.st2, this.st3, this.st4],
        ['e', 'Stocks / Inventory', this.si1, this.si2, this.si3, this.si4],
        ['f', 'Prepaid Expenses', this.pe1, this.pe2, this.pe3, this.pe4],
        ['g', 'Advance to Suppliers', this.as1, this.as2, this.as3, this.as4],
        ['h', 'Other Current ASSETS', this.oa1, this.oa2, this.oa3, this.oa4],
        [
          '',
          'TOTAL CURRENT ASSETS',
          this.tca1,
          this.tca2,
          this.tca3,
          this.tca4,
        ],
        [
          '5)',
          'FIXED ASSETS AND NON-CURRENT ASSETS',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          'a',
          'Fixed Assets ( Net Block )',
          this.fa1,
          this.fa2,
          this.fa3,
          this.fa4,
        ],
        ['b', 'Long Term Investments', this.lt1, this.lt2, this.lt3, this.lt4],
        [
          'c',
          'Other Non-Current Assets',
          this.on1,
          this.on2,
          this.on3,
          this.on4,
        ],
        ['', 'TOTAL FIXED ASSETS', this.tf1, this.tf2, this.tf3, this.tf4],
        ['6)', 'INTANGIBLE ASSETS', '', '', '', '', '', '', '', ''],
        ['a', 'Goodwill', this.gd1, this.gd2, this.gd3, this.gd4],
        ['b', 'Preliminary Expenses', this.pr1, this.pr2, this.pr3, this.pr4],
        [
          'c',
          'Other Intangible Assets',
          this.oi1,
          this.oi2,
          this.oi3,
          this.oi4,
        ],
        ['', 'TOTAL INTANGIBLE ASSETS', this.ti1, this.ti2, this.ti3, this.ti4],
        ['', 'TOTAL ASSETS', this.ta1, this.ta2, this.ta3, this.ta4],
        ['', 'BALANCING', this.bal1, this.bal2, this.bal3, this.bal4],
      ];
    }

    let TotalCell = parseInt(this.id) + 3;
    console.log(TotalCell);
    let arr = ['a', 'Short Term Borrowings from Banks'];

    var doc = new jsPDF();
    doc.text('Balance Sheet', 80, 10);
    doc.setFontSize(9);
    doc.text('Kyats in Mill', 178, 10);
    // doc.autoTable({theme:'grid',head :head , body: body , styles: {overflow: 'linebreak',fontSize: 5}}) // one page
    // doc.autoTable({ theme: 'grid', head: head, body: body })
    autoTable(doc, { theme: 'grid', head: head, body: body });
    // Save
    doc.save('BalanceSheet.pdf');
  };
}
