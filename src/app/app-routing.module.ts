import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditComponent } from './edit/edit.component';
import { JwthGuard } from './security/jwt-guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'list', component: ListUsersComponent, canActivate: [JwthGuard]  },
  { path: 'create', component: CreateUserComponent, canActivate: [JwthGuard] },
  { path: 'edit/:id', component: EditComponent, canActivate: [JwthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
