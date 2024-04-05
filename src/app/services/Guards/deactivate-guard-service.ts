import { Observable } from "rxjs";

import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";

export interface IDeactivateGuard{
    canExit:() => boolean | Promise<boolean>| Observable<boolean>;
}

export class DeactivateGuardService implements CanDeactivate<IDeactivateGuard> {
 
    canDeactivate(
        component: IDeactivateGuard,
        route: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ) : boolean | Promise<boolean>| Observable<boolean>{
       return component.canExit();
    }

}