import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})

export class DashbordComponent {
  constructor(private ds: DataService, private router: Router, private store: Store<any>) {
    this.store.select('sheet').subscribe((state => state))
  }
 
  data:any;
  datas:[];
  panelOpenState:false
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  ngOnInit(): void {
   this.getclist();
  }

  getclist(){
    let uid = localStorage.getItem('myuid');
    var fd = new FormData();
    fd.append("action_id",'3' );
    fd.append("uid",uid);
    this.ds.getclist(fd).subscribe(res=>{
    console.log(res);
    this.data =res;
     this.datas =this.data;
    });
  }

  delete = (id) => {
    var c = confirm("Are you sure you want to do that?");  
    if(c){
      var fd = new FormData();
      fd.append("id",id);
      fd.append("action_id",'9' );
      this.ds.delete(fd).subscribe(res=>{
        if(res == 1){
          alert("Deleted Succesfully");
          this.router.navigateByUrl('/dashbord');
          window.location.reload();
        }
      });
    }
  }

  viewSheet = (year,id, C_name) => {
    localStorage.setItem('c_id',id);    
    localStorage.setItem('c_name',C_name);    
    localStorage.setItem('loggedin','TRUE');
    localStorage.setItem('year',year);
    this.router.navigateByUrl('/sheetParts');
  }
}
