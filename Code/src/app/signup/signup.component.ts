import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router , private ds: DataService) { }

  ngOnInit(): void {
  }
  hide = true;
  username: string;
  email: string;
  password :string;

  handleSignup(){
    var fd = new FormData();
    fd.append('action_id', 'ADD_USER');
    fd.append('username', this.username);
    fd.append('email', this.email);
    fd.append('password', this.password);
    this.ds.SignupUser(fd).subscribe((res) => {
      if(res == true){
        this.router.navigateByUrl('/login');
      }
    });
  }
  
  GoToLogin(){
    this.router.navigateByUrl('/login');
  }
}