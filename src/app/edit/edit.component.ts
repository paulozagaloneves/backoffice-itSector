import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { DefaultResponse } from '../model/default-response'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) { }

  user: any = {
    name: '',
    userName: '',
    password: ''
  };

  ngOnInit() {
    
    this.userService.getUser(this.route.snapshot.params.id).subscribe(data => {
      this.user = data;
    });
  }

  editar(){
    this.userService.editUser(this.user, this.route.snapshot.params.id).subscribe((data: DefaultResponse) => {
      alert(data.message);
      this.router.navigateByUrl('/list');
    }, (error) => {
      alert(error.error.message);
    });
  }

  deletar() {
    this.userService.deleteUser(this.route.snapshot.params.id).subscribe((data: DefaultResponse) => {
      alert(data.message);
      this.router.navigateByUrl('/list');
    }, (error) => {
      alert(error.error.message)
    });
  }
}
