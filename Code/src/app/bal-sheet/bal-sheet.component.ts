import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SheetData } from '../model/sheetData.model';


@Component({
  selector: 'app-bal-sheet',
  templateUrl: './bal-sheet.component.html',
  styleUrls: ['./bal-sheet.component.css']
})

export class BalSheetComponent {

  Liabilities = {
    CURRENT_LIABILITIES: {
      stbfb: [],
      bs_bli: [],
      bs_stbfo: [],
      bs_tc: [],
      bs_apfc: [],
      bs_tp: [],
      bs_aetbp: [],
      bs_ocl: [],
      bs_tcl: [],
    },
    MEDIUM_AND_LONG_TERM_LIABILITIES: {
      bs_btlo: [],
      bs_lfd: [],
      bs_lffar: [],
      bs_ebaf: [],
      bs_omltl: [],
      bs_tmltl: [],
    },
    CAPITAL_AND_RESERVE: {
      bs_sc: [],
      bs_gr: [],
      bs_resd: [],
      bs_o: [],
      bs_tcr: [],
    },
    TOTAL_LIABILITIES: [],
  };
  default_data: SheetData;
  TotalCell: number = 3;

  constructor(private store: Store<any>) {
    this.store.select('sheet').subscribe((state => this.default_data = state))
  }

  ngOnInit() {
    this.TotalCell += this.default_data.year;
    this.setJSON(this.TotalCell);
  }

  // updateValue = (value:number, name:string) => {
  //   var index = this.Liabilities.CURRENT_LIABILITIES.stbfb.indexOf(value);
  //   console.log("Index"+index+"Value Update"+value+"Name"+name+"stbfb1"+this.Liabilities.CURRENT_LIABILITIES.stbfb[1].value);
  //   // // this.Liabilities.CURRENT_LIABILITIES.stbfb[1].value=value

  
      
  // }
 

  setJSON = (cell) => {
    for (let i = 0; i < cell; i++) {
      this.Liabilities.CURRENT_LIABILITIES.stbfb.push({ id: i, value: 20, name: 'stbfb_'+i })
      this.Liabilities.CURRENT_LIABILITIES.bs_bli.push({ id: i, value: 10, name: 'bs_bli'+i })
      this.Liabilities.CURRENT_LIABILITIES.bs_stbfo.push({ id: i, value: 0, name: 'bs_stbfo'+i })
      this.Liabilities.CURRENT_LIABILITIES.bs_tc.push({ id: i, value: 0, name: 'bs_tc'+i })
      this.Liabilities.CURRENT_LIABILITIES.bs_apfc.push({ id: i, value: 0, name: 'bs_apfc'+i })
      this.Liabilities.CURRENT_LIABILITIES.bs_tp.push({ id: i, value: 0, name: 'bs_tp'+i })
      this.Liabilities.CURRENT_LIABILITIES.bs_aetbp.push({ id: i, value: 0, name: 'bs_aetbp'+i })
      this.Liabilities.CURRENT_LIABILITIES.bs_ocl.push({ id: i, value: 0, name: 'bs_ocl'+i })
      this.Liabilities.CURRENT_LIABILITIES.bs_tcl.push({ id: i, value: 0, name: 'bs_tcl_'+i })
    
  
        let total = this.Liabilities.CURRENT_LIABILITIES.stbfb[i].value +
        this.Liabilities.CURRENT_LIABILITIES.bs_bli[i].value +
        this.Liabilities.CURRENT_LIABILITIES.bs_stbfo[i].value +
        this.Liabilities.CURRENT_LIABILITIES.bs_tc[i].value +
        this.Liabilities.CURRENT_LIABILITIES.bs_apfc[i].value +
        this.Liabilities.CURRENT_LIABILITIES.bs_tp[i].value +
        this.Liabilities.CURRENT_LIABILITIES.bs_aetbp[i].value +
        this.Liabilities.CURRENT_LIABILITIES.bs_ocl[i].value;
      this.Liabilities.CURRENT_LIABILITIES.bs_tcl[i].value = total;
       
    }
  }
}
