import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { throwError } from 'rxjs' 
throwError(new Error("oops"));
import { AppService } from "./app.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthguardGuard implements CanActivate {
  
  constructor(private appService: AppService, private router: Router){}
  canActivate() {
    if (this.appService.getJwt() != null) {
        return true;
    }
    else {
        this.router.navigate(['login']);
    }
    return false;
  }
}
