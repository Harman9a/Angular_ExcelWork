import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  constructor(private ds: DataService, private router: Router, private store: Store<any>) {

    this.store.select('sheet').subscribe((state => state))

  }
 
data:any;
datas:[];
  ngOnInit(): void {
 
   this.getclist();
 //  localStorage.setItem('loggedin','TRUE');    

  }
  getclist(){
    var fd = new FormData();
  
    fd.append("action_id",'3' );
    this.ds.getclist(fd).subscribe(res=>{
    this.data =res;
     this.datas =this.data;
//console.log(res);
    });
  }
  // test(val){
  //   alert(val);
  // }

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

    this.router.navigateByUrl('/balsheet/'+year);
  }
}
