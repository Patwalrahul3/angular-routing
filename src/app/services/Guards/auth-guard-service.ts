import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {}
  

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        let isLoggedIn = this.authService.isAuthentiated();

        if (isLoggedIn) {
            return true;
        } else {
            // Redirect to the root URL if the user is not authenticated
            return this.router.createUrlTree(['/']);
        }
    }


    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return this.canActivate(childRoute, state);
    }
}
