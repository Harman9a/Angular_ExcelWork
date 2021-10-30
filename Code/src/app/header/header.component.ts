import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyModalComponent } from '../my-modal/my-modal.component'
import { Router } from '@angular/router';
import { SheetData } from '../model/sheetData.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string;
  isavailable:any;
  default_data: SheetData;
  constructor(public dialog: MatDialog, private router: Router, private store: Store<any>) {
    this.store.select('sheet').subscribe((state => this.default_data = state))
   }
   ngOnInit(): void {
     
    this.title =localStorage.getItem('c_name');
    console.log(localStorage.getItem('loggedin'));
    if(localStorage.getItem('loggedin') == 'TRUE' ){
      this.isavailable = true;
    }
   }

   logout = () => {
     this.isavailable = false;

    localStorage.setItem('loggedin','FALSE');
    console.log(localStorage.getItem('loggedin'));
    this.router.navigateByUrl('/');
   }
  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  goHome = () => {
  //  console.log(this.default_data.cName);
    this.router.navigateByUrl('/');
  }

}
