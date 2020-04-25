import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpservicesService } from './httpservices.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
    providedIn: 'root'
})
export class RoutGardServices implements CanActivate {

    constructor(private httpservices: HttpservicesService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.httpservices.isUserLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
