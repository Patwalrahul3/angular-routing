import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { userService } from "../user.service";



interface User {
    id: string,
    name: string
}

@Injectable()
export class UserResolverService implements Resolve<User> {

    constructor(private userService: userService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
        let id = route.params['id'];

        let details = this.userService.getUser(id);

        return details;


        
    }

}