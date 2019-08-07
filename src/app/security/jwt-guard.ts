import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from '../login.service';

@Injectable({ providedIn: 'root' })
export class JwthGuard implements CanActivate {
    constructor(
        private router: Router,
        private loginService: LoginService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.loginService.currentUserValue;
        if (currentUser) {
            return true;
        }

        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return false;
    }
}