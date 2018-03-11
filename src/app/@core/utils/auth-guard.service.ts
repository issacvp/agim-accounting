import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NbAccessChecker } from '@nebular/security';
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private accessChecker: NbAccessChecker, private router: Router) {
  }
  canActivate() {
    console.log("AuthGuardService");
    if( this.accessChecker.isGranted('view', 'user') ) {
      return true;
    } else {
      return false;
    }
  }
}
