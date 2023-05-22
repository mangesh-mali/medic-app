import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentCompComponent } from '../payments/payment-comp/payment-comp.component';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class Gaurd1Guard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    var username = prompt("Enter Username");
    var pass = prompt("Enter Password");
    if (username == 'admin' && pass == '123') {
      alert("Access Granted");
      return true;
    } else {
      alert("Access Denied");
      return false;
    }


    // // bypass
    // return true;

  }

  constructor() {
    console.log("gaurd constructor");
  }

}
