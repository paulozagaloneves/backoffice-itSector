import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { JwtInterceptor } from './security/jwt-interceptor';
import { EditComponent } from './edit/edit.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUsersComponent,
    CreateUserComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
