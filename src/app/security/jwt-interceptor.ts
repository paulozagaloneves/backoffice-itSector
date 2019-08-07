import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from '../login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.loginService.currentUserValue;
        const isLoggedIn = currentUser != null;
        const isApiUrl = request.url.startsWith('http://192.168.1.122:8080');
        if (isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser}`
                }
            });
        }

        return next.handle(request);
    }
}