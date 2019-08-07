import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {
    username: '',
    password: ''
  };

  onSubmit(form){
    this.login.login(this.user.username, this.user.password).subscribe(data => this.router.navigateByUrl('/list'));
  }

  constructor(private login: LoginService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('currentUser');
  }

}
