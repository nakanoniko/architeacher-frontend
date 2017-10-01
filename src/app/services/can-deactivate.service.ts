import { Injectable } from '@angular/core'
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {Observable} from "rxjs/Observable";
import {RippleService} from "../components/core/services/ripple.service";

@Injectable()
export class CanDeactivateService implements CanDeactivate<any>{
    canDeactivate(component: any,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        return new Promise(resolve=>{
            setTimeout(()=>resolve(true),this.rippleService.getDuration());
        });
    }
    constructor(
        private rippleService:RippleService){ }
}