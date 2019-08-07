import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { DefaultResponse } from '../model/default-response'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  user: any = {
    name: '',
    userName: '',
    password: '',
    role: 'ROLE_USER',
  };

  adicionar() {
    this.userService.createUser(this.user).subscribe((data: DefaultResponse) => {
      alert(data.message);
      this.router.navigateByUrl('/list');
    }, (erro) => {
      alert(erro.error.message);
    });
  }

}
