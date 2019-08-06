import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

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
    this.login.login(this.user.username, this.user.password).subscribe(data => console.log(data));
  }

  constructor(private login: LoginService) { }

  ngOnInit() {
  }

}
