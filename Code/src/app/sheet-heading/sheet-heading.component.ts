import { Component, OnInit, Input } from '@angular/core';
interface HeaderElementsInterface {
  col: number
  name: string
  year: any
}

interface HeaderInterface extends Array<HeaderElementsInterface> { }

@Component({
  selector: 'app-sheet-heading',
  templateUrl: './sheet-heading.component.html',
  styleUrls: ['./sheet-heading.component.css']
})
export class SheetHeadingComponent implements OnInit {

  @Input() year: any;
  pastYear: number = 2;
  currentYear: number = 1;
  minCollValue: number = 3;
  collUsed = 6;
  TotalYears = 0
  HeaderData: HeaderInterface = [];

  constructor() { }

  ngOnInit(): void {
    this.SetHeader()
  }

  SetHeader = () => {
    let currentYear = new Date().getFullYear();
    this.TotalYears = parseInt(this.year) + 3;
    this.minCollValue = (24 - this.collUsed) / this.TotalYears;

    // this.HeaderData.push({ col: this.minCollValue, name: 'Year', year: currentYear - 2 })
    // this.HeaderData.push({ col: this.minCollValue, name: 'Year', year: currentYear - 1 })
     this.HeaderData.push({ col: this.minCollValue, name: 'Year', year: currentYear })

    for (var i = 1; i <= this.year; ++i) {
      this.HeaderData.push({ col: this.minCollValue, name: 'Year', year: currentYear + i })
    }

  }

}
