import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  users: Object;


  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    }, (error) => {
      alert(error.error.message);
    });
  }

  adicionar() {
    this.router.navigateByUrl('/create');
  }

  editar(id) {
    this.router.navigateByUrl('/edit/'+ id);
  }

  logout(){
    this.router.navigateByUrl('/');
  }
}
