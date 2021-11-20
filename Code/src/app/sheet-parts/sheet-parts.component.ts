import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sheet-parts',
  templateUrl: './sheet-parts.component.html',
  styleUrls: ['./sheet-parts.component.css']
})
export class SheetPartsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openBalanceSheet(){
    let year = localStorage.getItem('year');
    this.router.navigateByUrl('/balsheet/'+year);
  }

  openMsmeSheet(){
    this.router.navigateByUrl('/FinAna');
  }
}
