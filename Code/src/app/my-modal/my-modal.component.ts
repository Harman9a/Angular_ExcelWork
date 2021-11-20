import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { createSheetAction } from '../Ngrx/Actions/sheetHead.actions'
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})

export class MyModalComponent {

  constructor(private _snackBar: MatSnackBar , private router: Router, private store: Store<any>,  private ds: DataService) { }
	name: string = '' ;
	cName: string = '';
	type: string = '';
	year: any;
val:any;
  createSheet() {
  	this.store.dispatch(
      createSheetAction(
       {
          name:this.name,
          cName:this.cName,
          sheetType:this.type,
          year: this.year
        }
      )
    );
  //  console.log("Name"+this.name+"Comp Name"+this.cName+"Sheet Type"+this.type+"Year"+this.year);
  //  this.router.navigateByUrl('/balsheet');
  let uid = localStorage.getItem('myuid');
  var fd = new FormData();
  fd.append("name",this.name );
  fd.append("action_id",'2' );
  fd.append("cname",this.cName);
  fd.append("type",this.type);
  fd.append("Year",this.year);
  fd.append("uid",uid);

this.ds.addcompany(fd).subscribe((data)=>{
console.log(data)

if(data ==0){
  alert("User already exist");
} else{
  this.val = data;
  localStorage.setItem('c_id',this.val);    
  this.router.navigateByUrl('/balsheet/'+this.year);

}
});
  }
 
  selectTest(e) {
  	console.log(e)
  }

}