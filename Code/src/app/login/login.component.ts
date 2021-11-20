import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private ds: DataService) { }

  hide = true;
  username: string;
  password :string;

  ngOnInit(): void {
  }

  handleLogin(){
    var fd = new FormData();
    fd.append('action_id', 'LOGIN_USER');
    fd.append('username', this.username);
    fd.append('password', this.password);

    this.ds.LoginUser(fd).subscribe(
    (res) => {
      if(res != 0){
        localStorage.setItem('myuid',res[0].id)
        this.router.navigateByUrl('/dashbord');
      }else{
        localStorage.setItem('myuid','no')
        alert('incorrect username and password');
      }
    },
    (err) =>{
      alert('503 Server Error');
    });
  }

  GoToSignup(){
    this.router.navigateByUrl('/signup');
  }
}